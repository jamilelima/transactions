import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  align-content: center;
  align-items: center;
`;

export const EmptyListText = styled.Text`
  font-family: 'Nunito-Regular';
  font-size: 12px;
  text-align: center;
  color: ${colors.cool_grey};
`;
