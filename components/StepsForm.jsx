import { FormProvider } from '../store';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function StepsForm() {
  return (
    <>
      <FormProvider>
        <StepOne />
        <StepTwo />
        <StepThree />
      </FormProvider>
    </>
  );
}

export default StepsForm;
