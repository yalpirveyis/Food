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

export default function FifthStep({ step, setStep }) {
  const colors = useSelector((state) => state.theme.colors);

  return (
    <Container>
      <Row>
        <BackButton />
        <Stepper ratio={step} />
        <Space style={{ width: 24, height: 24 }} />
      </Row>
      <Button label={"ilerle" + step} onPress={() => setStep(step + 1)} />
      <Button label={"geri" + step} onPress={() => setStep(step - 1)} />
      <Text
        style={{
          fontSize: 54,
          color: colors.text,
          fontFamily: "Inter-Bold",
        }}
      >
        FifthStep
      </Text>
    </Container>
  );
}
