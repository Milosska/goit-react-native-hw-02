import { PixelRatio } from "react-native";

export const indicateBgImage = () => {
  const bgPath = {
    general: require("../../images/bg/bg-min.jpg"),
    big: require("../../images/bg/bg-min-2x.jpg"),
    extrabig: require("../../images/bg/bg-min-3x.jpg"),
  };

  const currentPixelRatio = PixelRatio.get();
  if (currentPixelRatio >= 3) {
    return bgPath.extrabig;
  } else if (currentPixelRatio < 3 && currentPixelRatio >= 2) {
    return bgPath.big;
  } else {
    return bgPath.general;
  }
};
