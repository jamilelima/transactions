import styled from 'styled-components/native';

import colors from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
`;

export const FabButton = styled.TouchableOpacity`
  position: absolute;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  right: 16px;
  bottom: 16px;
  background-color: ${colors.white};
  border-radius: 30px;
`;

export const FabIcon = styled.Text`
  font-size: 36px;
  color: ${colors.green};
`;
