import { View, TextInput, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { changeTabBarVisibility } from "../redux/slicer/themeSlice";
import { countryList } from "../constants/countyList";

export default function Search({ onChangeText, value }) {
  const colors = useSelector((state) => state.theme.colors);
  const dispatch = useDispatch();
  const hideTabBar = () => {
    dispatch(changeTabBarVisibility(true));
  };
  const showTabBar = () => {
    dispatch(changeTabBarVisibility(false));
  };

  return (
    <View style={{ marginTop: 16 }}>
      <TextInput
        style={{
          width: "100%",
          height: 54,
          backgroundColor: colors.searchBar,
          color: colors.text,
          paddingLeft: 48,
          borderRadius: 16,
        }}
        placeholderTextColor={colors.placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholder="Search Country"
        keyboardType="web-search"
        onFocus={(e) => hideTabBar()}
        onEndEditing={(e) => showTabBar()}
      />
      <Image
        style={{
          width: 18,
          height: 18,
          tintColor: colors.text,
          position: "absolute",
          top: 18,
          left: 18,
        }}
        source={require("../assets/Icons/Profile.png")}
      />
    </View>
  );
}
