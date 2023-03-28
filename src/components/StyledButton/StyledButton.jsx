import { TouchableOpacity, Text } from "react-native";
import styles from "./StyledButton.styles";

export const StyledButton = ({ textContent }) => {
  return (
    <TouchableOpacity style={styles.btn} activeOpacity={0.7}>
      <Text style={styles.text}>{textContent}</Text>
    </TouchableOpacity>
  );
};
