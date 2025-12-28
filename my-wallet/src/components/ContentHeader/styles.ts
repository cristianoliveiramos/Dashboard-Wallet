import { styled } from "styled-components";

export const ContentHeaderWrapp = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const TitleWrapp = styled.div`
    color: ${props => props.theme.colors.white};

		> h2 {
			&::after {
				width: 55px;
				content: '';
				display: block;
				border-bottom: 10px solid ${props => props.theme.colors.warning};
			}
		}
`

export const Controllers = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const Button = styled.button`
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.white};
`