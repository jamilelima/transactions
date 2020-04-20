import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {
  Container,
  InputContainer,
  Title,
  Input,
  SubmitButton,
  ButtonText,
  ErrorText,
  FormInfo,
} from './styles';
import {Picker} from '@react-native-community/picker';
import getRealm from '../../services/realm';
import colors from '../../utils/colors';
import {format} from 'date-fns';

export default function CreateTransaction({navigation}) {
  const {register, setValue, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    handleAddTransaction(data);
  };

  const [values, setSelect] = useState({
    selectedOption: '',
  });

  async function saveTransaction(transaction) {
    const data = {
      // Because Realm don't provide incrementation I need to handle id creation carrefully. This prevents id repetitions.
      id:
        new Date().valueOf().toString(36) +
        Math.random().toString(36).substr(2),
      description: transaction.transactionDescription,
      value: parseInt(transaction.transactionValue, 10),
      type: transaction.transactionType,
      date: format(new Date(), 'dd/MM/yyyy'),
    };
    const realm = await getRealm();
    realm.write(() => {
      realm.create('Transactions', data);
    });
  }

  async function handleAddTransaction(transaction) {
    try {
      await saveTransaction(transaction);
      // set loading here
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Home');
  }

  const handleSelectChange = (selectedOption) => {
    setValue('transactionType', selectedOption);
    setSelect({selectedOption});
  };

  return (
    <Container>
      <FormInfo>
        Digite as informações abaixo para criar sua transação.
      </FormInfo>
      <InputContainer>
        <Title>Valor</Title>
        <Input
          ref={register({name: 'transactionValue'}, {required: true})}
          onChangeText={(text) => setValue('transactionValue', text, true)}
          keyboardType="numeric"
        />
        {errors.transactionValue && (
          <ErrorText>Por favor, preencha este campo.</ErrorText>
        )}
      </InputContainer>

      <InputContainer>
        <Title>Descrição</Title>
        <Input
          ref={register(
            {name: 'transactionDescription'},
            {required: true, maxLength: 20},
          )}
          onChangeText={(text) =>
            setValue('transactionDescription', text, true)
          }
        />
        {errors.transactionDescription && (
          <ErrorText>Por favor, preencha este campo.</ErrorText>
        )}
      </InputContainer>

      <InputContainer>
        <Title>Tipo de transação</Title>
        <Picker
          ref={register({name: 'transactionType'}, {required: true})}
          selectedValue={values.selectedOption}
          placeholderIconColor={colors.white}
          style={{color: colors.white}}
          onValueChange={handleSelectChange}>
          <Picker.Item label="Selecione um tipo..." value="" />
          <Picker.Item label="Entrada" value="credit" />
          <Picker.Item label="Saída" value="debit" />
        </Picker>
        {errors.transactionType && (
          <ErrorText>Por favor, preencha este campo.</ErrorText>
        )}
      </InputContainer>

      <SubmitButton onPress={handleSubmit(onSubmit)}>
        <ButtonText>Salvar</ButtonText>
      </SubmitButton>
    </Container>
  );
}
