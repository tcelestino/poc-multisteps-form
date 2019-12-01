import { FormProvider } from '../store';
import {
  StepName,
  StepEmailPhone,
  StepStatus,
  StepOptin,
  StepStateCity
} from './Steps';

function StepsForm() {
  return (
    <FormProvider>
      <StepName step={1} />
      <StepEmailPhone step={2} />
      <StepStatus step={3} />
      <StepOptin step={4} />
      <StepStateCity step={5} />
    </FormProvider>
  );
}

export default StepsForm;
