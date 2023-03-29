import { View, ImageBackground } from "react-native";
import styles from "./StartLayout.styles";
import { indicateBgImage } from "../../helpers/indicateBgImage/indicateBgImage";

export const StartLayout = ({ height, children }) => {
  const bgImage = indicateBgImage();

  return (
    <ImageBackground style={styles.bgImage} source={bgImage} resizeMode="cover">
      <View style={[styles.contentThumb, height]} height={height}>
        {children}
      </View>
    </ImageBackground>
  );
};
