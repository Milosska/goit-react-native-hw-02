import { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./RegistrationScreen.styles";
import { Input } from "../../components/Input/Input";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";
import { StyledButton } from "../../components/StyledButton/StyledButton";
import { indicateBgImage } from "../../helpers/indicateBgImage/indicateBgImage";

const RegistrationScreen = () => {
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const bgImage = indicateBgImage();

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
            marginBottom: isKeyboardShown ? 100 : 0,
          }}
        >
          <View style={styles.photoContainer}>
            <View style={styles.imageThumb}></View>
            <TouchableOpacity style={styles.imageBtn} activeOpacity={0.7}>
              <Icon
                name="pluscircleo"
                size={30}
                color="#FF6C00"
                margin="auto"
              />
            </TouchableOpacity>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keybordContainer}
          >
            <View style={styles.form}>
              <Text style={styles.pageHeader}>Регистрация</Text>
              <Input
                placeholder="Логин"
                setIsKeyboardShown={setIsKeyboardShown}
              />
              <Input
                style={{ marginTop: 16 }}
                placeholder="Адрес электронной почты"
                setIsKeyboardShown={setIsKeyboardShown}
              />
              <PasswordInput
                style={{ marginTop: 16, marginBottom: 43 }}
                setIsKeyboardShown={setIsKeyboardShown}
              />
              <StyledButton textContent={"Зарегистрироваться"} />
            </View>
          </KeyboardAvoidingView>
          <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;
