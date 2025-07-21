import { ProcessStep as ProcessStepType } from '@/types';

interface ProcessStepProps {
  step: ProcessStepType;
  isActive: boolean;
}

const ProcessStep = ({ step, isActive }: ProcessStepProps) => {
  return (
    <div className={`step ${isActive ? 'active' : ''}`} data-step={step.id}>
      <div className="circle"></div>
      <h2 className="step-title">Step {step.id}: {step.title}</h2>
      <div className="step-content">
        <div className="step-left">
          <p className="subtitle">{step.subtitle}</p>
          <ul className="list">
            {step.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {step.id < 6 && <hr />}
        </div>
        <div className="step-right">
          <div className="benefits">
            {step.benefits.map((benefit, index) => (
              <p key={index}>{benefit}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
