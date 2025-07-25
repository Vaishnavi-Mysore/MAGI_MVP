// Signup.tsx component with hook form and spinner integration
import { useForm, FormProvider } from 'react-hook-form';
import InputField from '../common/form/InputField';
import CustomButton from '../common/button/CustomButton';
import ButtonSpinner from '../common/spinners/Loaders';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setSpinLoader } from '../../features/reduxslices/loaderToggles/isSpinner';
import { setNavbarButtonLabel } from '../../features/reduxslices/uiSlices/buttonSlices';

type SignupFormData = {
  email: string;
  password: string;
};

const Signup = () => {
  // Initialize react-hook-form
  const methods = useForm<SignupFormData>();
  // Destructure methods for easier access of form methods
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const dispatch = useDispatch();

  useEffect(() => {
    // isSubmitting is destructured from react hook form
    if (!isSubmitting) dispatch(setNavbarButtonLabel('Submit'));
  }, [dispatch, isSubmitting]);

  // react-hook-form only turns true during an async submission function.
  const onSubmit = async (data: SignupFormData) => {
    dispatch(setSpinLoader(true));

    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async work

    console.log('Signup data:', data);
    dispatch(setSpinLoader(false));
  };

  useEffect(() => {
    console.log('Signup form rendered');
  }, []);


  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            required
            register={register}
            error={errors.email}
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            placeholder="Minimum 6 characters"
            required
            register={register}
            error={errors.password}
          />

          <CustomButton
            usage='button'
            label=''
            type="submit"
            customContent={isSubmitting ? <ButtonSpinner /> : undefined}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default Signup;
