import { FormProvider } from '../store';
import { StepName, StepEmailPhone, StepStatus, StepOptin } from './Steps';

function StepsForm() {
  return (
    <FormProvider>
      <StepName step={1} />
      <StepEmailPhone step={2} />
      <StepStatus step={3} />
      <StepOptin step={4} />
    </FormProvider>
  );
}

export default StepsForm;
