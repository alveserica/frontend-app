import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchAllData } from "../../store/project-actions";
import { StyledApp } from "../../assets/styles";
import InputComponent from "../Components/Input";
import { useForm } from "react-hook-form";
import { validateFormString } from "src/utils/functions";

type AppProps = {
  user: string;
  firstname: string;
  email: string;
}

export function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AppProps>();
  const onSubmit = (data: AppProps) => console.log(data);

  const dispatch = useAppDispatch();
  const allData = useAppSelector((state) => state.project?.all);
  console.log(allData);

  const clickHandler = () => {
    dispatch(fetchAllData());
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
            register={register('user', {
                required: { value: true, message: 'Required field' },
            })}
            name="user"
            placeholder="User"
            onBlur={e => validateFormString(e.currentTarget.value)}
            value={watch('user')}
            errorVisible={!!errors.user}
            errors={errors}
        />
        <InputComponent
            register={register('firstname', {
                required: { value: true, message: 'Required field' },
            })}
            name="firstname"
            placeholder="Firstname"
            onBlur={e => validateFormString(e.currentTarget.value)}
            value={watch('firstname')}
            errorVisible={!!errors.firstname}
            errors={errors}
        />
        <InputComponent
            register={register('email', {
                required: { value: true, message: 'Required field' },
            })}
            name="email"
            placeholder="E-mail"
            onBlur={e => validateFormString(e.currentTarget.value)}
            value={watch('email')}
            errorVisible={!!errors.email}
            errors={errors}
        />
        <StyledApp>
          <button type="submit">Submit</button>
        </StyledApp>
      </form>
      <StyledApp>
        <button onClick={clickHandler}>Fetch Test</button>
      </StyledApp>
    </Fragment>
  );
}

export default App;
