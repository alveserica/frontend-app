import styled, { keyframes, css } from 'styled-components';

interface InputTitleProps {
    visible: boolean;
    error: boolean;
}

interface InputProps {
    error: boolean;
}

// eslint-disable-next-line space-infix-ops, no-mixed-operators
export const ContainerInput = styled.div`
    color: #E55C39; 
    display: flex;
    flex-direction: column;
`;

// eslint-disable-next-line space-infix-ops, no-mixed-operators
export const Input = styled.input<InputProps>`
    width: 427px;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
    border: 2px solid ${props => (props.error ? '#E55C39' : '#ECEDF2')};
    color: ${props => (props.error && '#E55C39')};
    border-radius: 10px;
    font-size: 12px;
    font-weight: 500;
   
    &:focus {
        outline: none;
        border-color: ${props => !props.error && '#5858BF !important'};
        color: #000000 !important;
    };

    ::placeholder {
        color: #AEAEBA;
    };

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const slideFromBottom = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

// eslint-disable-next-line space-infix-ops, no-mixed-operators
export const InputTitleDiv = styled.div<InputTitleProps>`
    display: ${props => ((props.visible || props.error) ? 'flex' : 'none')};
    ${props => (props.visible || props.error) && css`
      animation: ${slideFromBottom} 1s forwards;
    `}
`;

// eslint-disable-next-line space-infix-ops, no-mixed-operators
export const InputTitle = styled.p<InputTitleProps>`
    padding: 0px 5px 0px 5px;
    color: ${props => (props.error ? '#E55C39' : '#000000')};
    font-size: 12px;
    font-weight: 600;
    background-color: white;
    margin-left: 8px;
    margin-bottom: -10px;
    z-index: 1;
`;
