/* eslint-disable react/prop-types */
import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

export default function FormIndex({ step, setFieldValue, nextStep, setNo}) {
  switch (step) {
    case 0:
      return <Step1 setFieldValue={setFieldValue} nextStep={nextStep} />;
    case 1:
      return <Step2 nextStep={nextStep} step={step} setNo={setNo} />;

    case 2:
      return <Step3 nextStep={nextStep} />;
    case 3:
      return <Step4 nextStep={nextStep} />;
    case 4:
      return <Step5 />;
    default:
      return <div>ERROR: Pls Refresh</div>;
  }
}
