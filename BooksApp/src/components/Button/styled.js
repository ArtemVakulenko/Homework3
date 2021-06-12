import styled from 'styled-components';

const StButton = styled.button`
    color: white;
    height: 2em;
    width: auto;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #2B5278;
    border-radius: 10px;
    background-color: #2b5278;
    cursor: pointer;
    :hover {
        border: 2px solid white ;
    }
`;
const StIcon = styled.button`
    height: 40px;
    width: 40px;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #2b5278;
    border-radius: 10px;
    background-image: ${(props) => props.icon};
    cursor: pointer;
    :hover {
        border: 2px solid white;
    }
`;

export { StButton, StIcon };
