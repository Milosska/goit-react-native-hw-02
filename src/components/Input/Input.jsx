import { View, TextInput } from "react-native";
import styles from "./Input.styles";

export const Input = ({ placeholder, style, secureTextEntry }) => {
  return (
    <View style={style}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
