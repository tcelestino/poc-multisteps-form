import { FormProvider } from '../store';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

function StepsForm() {
  return (
    <>
      <FormProvider>
        <StepOne />
        <StepTwo />
      </FormProvider>
    </>
  );
}

export default StepsForm;
