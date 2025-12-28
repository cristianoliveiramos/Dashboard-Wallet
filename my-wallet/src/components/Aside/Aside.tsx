import "./styles";
import {  
  MdArrowUpward,
  MdDashboard,
  MdExitToApp,
  MdArrowDownward
} from "react-icons/md";

import {
  AsideWrapper,
  Header,
  LogImg,
  MenuAside,
  MenuItemLink,
  Title,
} from "./styles";

import logImg from "../../assets/logo.svg";

export const Aside = () => {
  return (
    <AsideWrapper>
      <Header>
        <LogImg src={logImg} alt="Logo Minha Carteira"></LogImg>
        <Title>Minha Carteira</Title>
      </Header>
        
      <MenuAside>
				<MenuItemLink href="#">  
					<MdDashboard />        
					Dashboard            
				</MenuItemLink>        

        <MenuItemLink href="#">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuAside>      
    </AsideWrapper>
  );
};
