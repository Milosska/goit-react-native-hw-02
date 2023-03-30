import { useState } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import styles from "./PasswordInput.styles";

export const PasswordInput = ({
  style,
  setIsKeyboardShown,
  value,
  setUserData,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isShown, setIsShown] = useState(true);

  const handlePress = () => {
    setIsShown((prevState) => !prevState);
  };
  return (
    <View style={{ ...styles.container, ...style }}>
      <TextInput
        value={value.password}
        style={{
          ...styles.input,
          borderColor: isFocus ? "#FF6C00" : "#E8E8E8",
        }}
        placeholder="Пароль"
        placeholderTextColor="#BDBDBD"
        secureTextEntry={isShown}
        onFocus={() => {
          setIsFocus(true);
          setIsKeyboardShown(true);
        }}
        onBlur={() => {
          setIsFocus(false);
          setIsKeyboardShown(false);
        }}
        onChangeText={(value) => {
          setUserData((prev) => ({
            ...prev,
            password: value,
          }));
        }}
      />
      <Pressable style={styles.showBtn} onPress={handlePress}>
        <Text style={styles.btnText}>{isShown ? "Показать" : "Скрыть"}</Text>
      </Pressable>
    </View>
  );
};
