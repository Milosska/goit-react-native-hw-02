import { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import styles from "./LoginScreen.styles";
import { Input } from "../../components/Input/Input";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { StyledButton } from "../../components/StyledButton/StyledButton";
import { indicateBgImage } from "../../helpers/indicateBgImage/indicateBgImage";

const LoginScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const bgImage = indicateBgImage();

  handleBtnPress = () => {
    console.log(userData);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ImageBackground
        style={{
          ...styles.bgImage,
          marginBottom: isKeyboardShown ? -250 : 0,
        }}
        source={bgImage}
        resizeMode="cover"
      >
        <View
          style={{
            ...styles.contentThumb,
            marginBottom: isKeyboardShown ? 80 : 0,
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keybordContainer}
          >
            <View style={styles.form}>
              <Text style={styles.pageHeader}>Войти</Text>
              <Input
                placeholder="Адрес электронной почты"
                setIsKeyboardShown={setIsKeyboardShown}
                value={userData}
                setUserData={setUserData}
              />
              <PasswordInput
                style={{ marginTop: 16, marginBottom: 43 }}
                setIsKeyboardShown={setIsKeyboardShown}
                value={userData}
                setUserData={setUserData}
              />
              <StyledButton textContent={"Войти"} onPress={handleBtnPress} />
            </View>
          </KeyboardAvoidingView>
          <Text style={styles.linkText}>Нет аккаунта? Зарегистрироваться</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
