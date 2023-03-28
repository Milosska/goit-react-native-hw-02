import { StyleSheet, View } from "react-native";
import RegistrationScreen from "./src/screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
