import React, { useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Search from "../../components/Search";
import Space from "../../components/Space";
import Stepper from "../../components/Stepper";
import FifthStep from "./FifthStep";
import FirstStep from "./FirstStep";
import FourthStep from "./FourthStep";
import SecondStep from "./SecondStep";
import SixtStep from "./SixtStep";
import ThirdStep from "./ThirdStep";

export default function Register() {
  const [step, setStep] = useState(1);

  return (
    <>
      {step == 1 ? (
        <FirstStep step={step} setStep={setStep} />
      ) : step == 2 ? (
        <SecondStep step={step} setStep={setStep} />
      ) : step == 3 ? (
        <ThirdStep step={step} setStep={setStep} />
      ) : step == 4 ? (
        <FourthStep step={step} setStep={setStep} />
      ) : step == 5 ? (
        <FifthStep step={step} setStep={setStep} />
      ) : (
        <SixtStep step={step} setStep={setStep} />
      )}
    </>
  );
}
