import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin: 10px;
  padding: 50px;
  background: ${colors.davy_gre};
`;

export const DayOfWeek = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  font-family: 'Nunito-Regular';
`;

export const DayDate = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  font-family: 'Nunito-Regular';
`;

export const YourBalance = styled.Text`
  font-size: 12px;
  text-align: justify;
  color: ${colors.cool_grey};
  font-family: 'Nunito-Regular';
`;

export const TransactionValue = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.white_ish};
  font-family: 'Nunito-Regular';
`;
