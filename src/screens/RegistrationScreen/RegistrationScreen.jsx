import { View, TouchableOpacity, Text, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./RegistrationScreen.styles";
import { Input } from "../../components/Input/Input";
import { StyledButton } from "../../components/StyledButton/StyledButton";
import { indicateBgImage } from "../../helpers/indicateBgImage/indicateBgImage";

const RegistrationScreen = () => {
  const bgImage = indicateBgImage();

  return (
    <ImageBackground style={styles.bgImage} source={bgImage} resizeMode="cover">
      <View style={styles.contentThumb}>
        <View style={styles.photoContainer}>
          <View style={styles.imageThumb}></View>
          <TouchableOpacity style={styles.imageBtn} activeOpacity={0.7}>
            <Icon name="pluscircleo" size={30} color="#FF6C00" margin="auto" />
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <Text style={styles.pageHeader}>Регистрация</Text>
          <Input placeholder="Логин" />
          <Input
            style={{ marginTop: 16 }}
            placeholder="Адрес электронной почты"
          />
          <Input
            style={{ marginTop: 16, marginBottom: 43 }}
            placeholder="Пароль"
            secureTextEntry={true}
          />
          <StyledButton textContent={"Зарегистрироваться"} />
        </View>
        <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;
