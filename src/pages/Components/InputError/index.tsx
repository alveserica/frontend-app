import { ErrorMessage } from '@hookform/error-message';
import ContainerError from './style';

interface InputErrorMessageProps {
    visible: boolean;
    name: string;
    errors: any;
}

const InputErrorMessage = ({ visible, name, errors }: InputErrorMessageProps) => (
    <ContainerError visible={visible}>
        <ErrorMessage errors={errors} name={name} />
    </ContainerError>
);

export default InputErrorMessage;
