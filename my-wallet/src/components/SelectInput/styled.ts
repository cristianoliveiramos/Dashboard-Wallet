import styled from 'styled-components';

export const SelectInputWrapper = styled.div`
    gap: 10px;
    display: flex;
`;

export const SelectOptions = styled.select`
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};    
    border-radius: 5px;    
`
