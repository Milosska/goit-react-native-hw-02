import { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "./Input.styles";

export const Input = ({
  placeholder,
  style,
  secureTextEntry,
  setIsKeyboardShown,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={style}>
      <TextInput
        style={{
          ...styles.input,
          borderColor: isFocus ? "#FF6C00" : "#E8E8E8",
        }}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        secureTextEntry={secureTextEntry}
        onFocus={() => {
          setIsFocus(true);
          setIsKeyboardShown(true);
        }}
        onBlur={() => {
          setIsFocus(false);
          setIsKeyboardShown(false);
        }}
      />
    </View>
  );
};
