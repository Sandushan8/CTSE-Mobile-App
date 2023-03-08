import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Btn({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 5,
        alignItems: "center",
        width: 350,
        paddingVertical: 5,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 27, fontWeight: "bold" }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
