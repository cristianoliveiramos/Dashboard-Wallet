import {styled} from 'styled-components'

export const AsideWrapper = styled.div `
    grid-area: AS;
    color: ${props => props.theme.colors.white };
    background-color: ${props => props.theme.colors.secondary };

    border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 70px;
`

export const LogImg = styled.img`
    height: 40px;
    width: 40px;
`

export const MenuAside = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 30px;        
`

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0;
    transition: opacity .3s;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5px;
    
    &:hover {
        opacity: .7;
    }
`

export const Title = styled.h3`
    font-size: 20px;
    color: ${props => props.theme.colors.white};
`