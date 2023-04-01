import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../components/BackButton";
import BorderedButton from "../../components/BorderedButton";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Search from "../../components/Search";
import Space from "../../components/Space";
import Stepper from "../../components/Stepper";
import { countryList } from "../../constants/countyList";
import { changeColorMode } from "../../redux/slicer/themeSlice";

export default function FirstStep({ step, setStep }) {
  const colors = useSelector((state) => state.theme.colors);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(countryList);
  useEffect(() => {
    setFiltered(countryList.filter((item) => item.name.includes(search)));
  }, [search]);

  return (
    <Container>
      <Row>
        <BackButton />
        <Stepper ratio={step} />
        <Space style={{ width: 24, height: 24 }} />
      </Row>
      <Button label={"ilerle" + step} onPress={() => setStep(step + 1)} />
      <Button label={"geri" + step} onPress={() => setStep(step - 1)} />
      <Button
        label={"renk değiştir"}
        onPress={() => dispatch(changeColorMode())}
      />
      <Text
        style={{
          fontSize: 54,
          color: colors.text,
          fontFamily: "Inter-Bold",
        }}
      >
        Which country are you from?
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: colors.text,
          fontFamily: "Inter-Light",
          marginTop: 8,
        }}
      >
        Please select your country of origin fır a better recommendations.
      </Text>
      <Search onChangeText={setSearch} value={search} />
      {filtered.map((country, index) => (
        <BorderedButton style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={{ width: 36, height: 36, borderRadius: 16 }}
            source={{
              uri: `https://flagsapi.com/${country.code}/flat/64.png`,
            }}
          />
          <Text
            style={{
              color: colors.border,
              fontFamily: "Inter-Medium",
              marginLeft: 16,
            }}
            key={country.code}
          >
            {country.code}
          </Text>
          <Text
            style={{
              color: colors.text,
              fontFamily: "Inter-SemiBold",
              marginLeft: 16,
            }}
            key={index}
          >
            {country.name}
          </Text>
        </BorderedButton>
      ))}
    </Container>
  );
}
