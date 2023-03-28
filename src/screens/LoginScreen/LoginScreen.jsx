import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import styles from "./LoginScreen.styles";
import { Input } from "../../components/Input/Input";
import { StyledButton } from "../../components/StyledButton/StyledButton";
import { indicateBgImage } from "../../helpers/indicateBgImage/indicateBgImage";

const LoginScreen = () => {
  const bgImage = indicateBgImage();

  return (
    <ImageBackground style={styles.bgImage} source={bgImage} resizeMode="cover">
      <View style={styles.contentThumb}>
        <View style={styles.form}>
          <Text style={styles.pageHeader}>Войти</Text>
          <Input placeholder="Адрес электронной почты" />
          <Input
            style={{ marginTop: 16, marginBottom: 43 }}
            placeholder="Пароль"
            secureTextEntry={true}
          />
          <StyledButton textContent={"Войти"} />
        </View>
        <Text style={styles.linkText}>Нет аккаунта? Зарегистрироваться</Text>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;
