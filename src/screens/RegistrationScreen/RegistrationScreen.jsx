import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./RegistrationScreen.styles";
import { Input } from "../../components/Input/Input";
import { StyledButton } from "../../components/StyledButton/StyledButton";
import { StartLayout } from "../../components/StartLayout/StartLayout";

const RegistrationScreen = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <StartLayout height={{ height: "70%" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keybordContainer}
      >
        <View style={styles.photoContainer}>
          <View style={styles.imageThumb}></View>
          <TouchableOpacity style={styles.imageBtn} activeOpacity={0.7}>
            <Icon name="pluscircleo" size={30} color="#FF6C00" margin="auto" />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Text style={{ ...styles.pageHeader, marginTop: isShown ? 112 : 92 }}>
            Регистрация
          </Text>
          <Input
            placeholder="Логин"
            onFocus={() => {
              setIsShown(true);
            }}
          />
          <Input
            style={{ marginTop: 16 }}
            placeholder="Адрес электронной почты"
            onFocus={() => {
              setIsShown(true);
            }}
          />
          <Input
            style={{ marginTop: 16, marginBottom: 43 }}
            placeholder="Пароль"
            secureTextEntry={true}
            onFocus={() => {
              setIsShown(true);
            }}
          />
          <StyledButton textContent={"Зарегистрироваться"} />
        </View>

        <Text style={{ ...styles.linkText, marginBottom: isShown ? 0 : 45 }}>
          Уже есть аккаунт? Войти
        </Text>
      </KeyboardAvoidingView>
    </StartLayout>
  );
};

export default RegistrationScreen;
