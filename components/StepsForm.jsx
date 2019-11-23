import { FormProvider } from '../store';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function StepsForm() {
  return (
    <>
      <FormProvider>
        <StepOne step={1} />
        <StepTwo step={2} />
        <StepThree step={3} />
      </FormProvider>
    </>
  );
}

export default StepsForm;
