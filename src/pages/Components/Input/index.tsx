import { useState, ChangeEvent } from 'react';
import { FieldErrors } from 'react-hook-form';
import {
    ContainerInput, Input, InputTitleDiv, InputTitle,
} from './style';
import InputErrorMessage from '../InputError';

interface InputComponentProps {
    register: any;
    name: string;
    placeholder: string;
    onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
    errors: FieldErrors;
    errorVisible: boolean;
    value?: string;
}

const InputComponent = ({
    placeholder,
    name,
    onBlur,
    register,
    errors,
    errorVisible,
    value,
}: InputComponentProps) => {
    const [onFocus, setFocus] = useState(false);

    console.log(value);

    return (
        <ContainerInput>
            <InputTitleDiv visible={onFocus || !!value} error={errorVisible}>
                <InputTitle visible={onFocus} error={errorVisible}>
                    {placeholder}
                </InputTitle>
            </InputTitleDiv>
            <Input
                {...register}
                name={name}
                placeholder={errorVisible || onFocus ? '' : placeholder}
                onBlur={onBlur}
                error={errorVisible}
                onBlurCapture={() => setFocus(false)}
                onFocus={() => setFocus(true)}
            />
            <InputErrorMessage
                name={name}
                errors={errors}
                visible={errorVisible}
            />
        </ContainerInput>
    );
};

export default InputComponent;