import { View, ImageBackground } from "react-native";
import styles from "./RegistrationScreen.styles";
import { indicateBgImage } from "../../helpers/indicateBgImage/indicateBgImage";

const RegistrationScreen = () => {
  const bgImage = indicateBgImage();

  return (
    <ImageBackground source={bgImage} style={styles.bgImage}></ImageBackground>
  );
};

export default RegistrationScreen;
