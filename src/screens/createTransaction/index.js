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
  PickerContainer,
} from './styles';
import {Picker} from '@react-native-community/picker';
import getRealm from '../../services/realm';
import colors from '../../utils/colors';
import {format} from 'date-fns';
import Loading from '../../components/loading';
import {TextInputMask} from 'react-native-masked-text';

export default function CreateTransaction({navigation}) {
  const {register, setValue, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    handleAddTransaction(data);
  };

  const [values, setSelect] = useState({
    selectedOption: '',
  });

  const [money, setMoney] = useState({
    value: '',
  });

  const [loading, setLoading] = useState(false);

  async function saveTransaction(transaction) {
    const data = {
      // Because Realm don't provide incrementation I need to handle id creation carrefully. This prevents id repetitions.
      id:
        new Date().valueOf().toString(36) +
        Math.random().toString(36).substr(2),
      description: transaction.transactionDescription,
      value: transaction.transactionValue,
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
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }

  const handleSelectChange = (selectedOption) => {
    setValue('transactionType', selectedOption);
    setSelect({selectedOption});
  };

  const handleMoneyChange = (value, rawValue) => {
    setValue('transactionValue', rawValue);
    setMoney({value});
  };

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FormInfo>
            Digite as informações abaixo para criar sua transação.
          </FormInfo>
          <InputContainer>
            <Title>Valor</Title>
            <TextInputMask
              value={money.value}
              ref={register({name: 'transactionValue'}, {required: true})}
              type={'money'}
              style={{
                fontFamily: 'Nunito-Regular',
                color: '#000',
                backgroundColor: colors.white,
                borderRadius: 4,
                fontSize: 16,
              }}
              placeholderTextColor="#000"
              includeRawValueInChangeText={true}
              onChangeText={(value, rawText) =>
                handleMoneyChange(value, rawText)
              }
              placeholder={'R$0,00'}
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
            <PickerContainer>
              <Picker
                ref={register({name: 'transactionType'}, {required: true})}
                selectedValue={values.selectedOption}
                onValueChange={handleSelectChange}>
                <Picker.Item
                  label="Selecione um tipo de transação..."
                  value=""
                />
                <Picker.Item label="Crédito" value="credit" />
                <Picker.Item label="Débito" value="debit" />
              </Picker>
            </PickerContainer>
            {errors.transactionType && (
              <ErrorText>Por favor, escolha uma opção</ErrorText>
            )}
          </InputContainer>

          <SubmitButton onPress={handleSubmit(onSubmit)}>
            <ButtonText>Salvar</ButtonText>
          </SubmitButton>
        </>
      )}
    </Container>
  );
}
