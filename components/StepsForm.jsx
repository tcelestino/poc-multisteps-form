import { FormProvider } from '../store';
import { StepOne, StepTwo, StepThree, StepFour } from './Steps';

function StepsForm() {
  return (
    <FormProvider>
      <StepOne step={1} />
      <StepTwo step={2} />
      <StepThree step={3} />
      <StepFour step={4} />
    </FormProvider>
  );
}

export default StepsForm;
