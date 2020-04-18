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
} from './styles';
import {Alert} from 'react-native';
import {Picker} from '@react-native-community/picker';
import colors from '../../utils/colors';
export default function CreateTransaction() {
  const {register, setValue, handleSubmit, errors} = useForm();

  const onSubmit = (data) => Alert.alert('Form Data', JSON.stringify(data));

  const [values, setSelect] = useState({
    selectedOption: '',
  });

  const handleSelectChange = (selectedOption) => {
    setValue('transactionType', selectedOption);
    setSelect({selectedOption});
  };

  return (
    <Container>
      <InputContainer>
        <Title>Valor</Title>
        <Input
          ref={register({name: 'transactionValue'}, {required: true})}
          onChangeText={(text) => setValue('transactionValue', text, true)}
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
        <Title>Tipo</Title>
        <Picker
          ref={register({name: 'transactionType'}, {required: true})}
          selectedValue={values.selectedOption}
          placeholderIconColor={colors.white}
          style={{color: colors.white}}
          onValueChange={handleSelectChange}>
          <Picker.Item label="Entrada" value="recieve" />
          <Picker.Item label="Saída" value="outcome" />
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
