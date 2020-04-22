import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 50px;
  background: ${colors.davy_gre};
`;

export const DayOfWeek = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;

export const DayDate = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
`;

export const YourBalance = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 12px;
  text-align: justify;
  color: ${colors.cool_grey};
`;

export const TransactionValue = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 22px;
  font-weight: bold;
  color: ${colors.white_ish};
`;
