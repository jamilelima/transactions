import styled from 'styled-components/native';
import colors from '../../utils/colors';
export const Container = styled.View`
  flex: 1;
  padding-top: 50px;
  background-color: ${colors.davy_gre};
`;

export const Title = styled.Text`
  font-family: 'Nunito-Regular';
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
  margin: 20px;
  background: ${colors.green};
  justify-content: center;
  border-radius: 4px;
  padding: 16px;
  font-family: 'Nunito-Regular';
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
