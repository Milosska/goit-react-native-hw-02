import { View, Text } from "react-native";
import styles from "./LoginScreen.styles";
import { Input } from "../../components/Input/Input";
import { StyledButton } from "../../components/StyledButton/StyledButton";
import { StartLayout } from "../../components/StartLayout/StartLayout";

const LoginScreen = () => {
  return (
    <StartLayout height={{ height: "60%" }}>
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
    </StartLayout>
  );
};

export default LoginScreen;
