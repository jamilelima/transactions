import styled from 'styled-components/native';
import colors from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: ${colors.primary};
`;

export const FormInfo = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 0 10px;
  color: ${colors.white_ish};
`;

export const Title = styled.Text`
  font-family: 'Nunito-Regular';
  margin-bottom: 10px;
  font-size: 14px;
  color: ${colors.white_ish};
  font-weight: bold;
`;

export const InputContainer = styled.View`
  margin: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  border-radius: 4px;
  font-size: 16px;
  color: #000;
  font-family: 'Nunito-Regular';
  background: ${colors.white_ish};
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  margin: 30px;
  background: ${colors.green};
  justify-content: center;
  border-radius: 4px;
  padding: 16px;
`;

export const ButtonText = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 16px;
  color: ${colors.davy_gre};
`;

export const ErrorText = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 16px;
  color: ${colors.red};
`;

export const PickerContainer = styled.View`
  border-radius: 4px;
  font-family: 'Nunito-Regular';
  background-color: ${colors.white};
`;
