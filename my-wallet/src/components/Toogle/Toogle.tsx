import { FC } from 'react';
import { ToogleWrapper, ToogleLabel, SwitchSelector } from './Toogle.styled';
import Switch from 'react-switch'

export const Toogle: FC = () => (
 <ToogleWrapper>
   <ToogleLabel>Light</ToogleLabel>
   <SwitchSelector checked={false} onChange={() => console.log("Changed")} uncheckedHandleIcon={false}/>
   <ToogleLabel>Dark</ToogleLabel>
 </ToogleWrapper>
);


