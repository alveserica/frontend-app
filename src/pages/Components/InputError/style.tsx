import styled from 'styled-components';

interface VisibleProps {
    visible: boolean;
}

const ContainerError = styled.div<VisibleProps>`
    display: ${props => (props.visible ? 'flex' : 'none')};
    flex-direction: row;
    align-items: center;
    margin-top: -10px;
    margin-bottom: 5px;
`;

export default ContainerError;
