import Switch, { ReactSwitchProps } from 'react-switch';
import styled from 'styled-components';

export const ToogleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ToogleLabel = styled.span`

`
export const SwitchSelector = styled(Switch).attrs<ReactSwitchProps>(({theme}) => (
  {
    onColor: theme.colors.info, 
    offColor: theme.colors.warning
  }))<ReactSwitchProps>`
    margin: 0 7px;
  `;