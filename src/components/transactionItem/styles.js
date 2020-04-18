import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 10px;
  padding: 30px;
  background: ${colors.davy_gre};
`;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
`;

export const TransactionImage = styled.Image`
  width: 200;
  height: 200;
  border-radius: 100;
`;

export const TransactionValue = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.red};
`;

export const TransactionDate = styled.Text`
  font-size: 12px;
  text-align: center;
  color: ${colors.cool_grey};
`;
