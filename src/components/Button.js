import styled from 'styled-components';

export const ButtonContainer = styled.button`
background: transparent;
text-tranform: capitalize;
border: 0.2rem solid var(--lightBlue);
border-color: ${props => props.cart ? "var(--mainYellow)": "var(--lightBlue)"};
font-size: 1.3rem
color: ${props => props.cart ? "var(--mainYellow)": "var(--lightBlue)"};
padding : 0.2rem 0.5rem;
cursor: pointer;
margin:0.2rem 0.5rem 0.2rem 0rem;
transition : all 0.5s ease-in-out;
&:hover {
    background: ${props => props.cart ? "var(--mainYellow)": "var(--lightBlue)"};
    color : var(--mainBlue);
}
&:focus {
    outline:none;
}
`;


