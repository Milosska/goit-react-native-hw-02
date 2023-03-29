import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  keybordContainer: {
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  photoContainer: {
    position: "absolute",
    top: "-10%",
    width: 132,
    height: 120,
  },
  imageThumb: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  imageBtn: {
    position: "absolute",
    right: "-5%",
    bottom: "10%",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: "#ffffff",
  },
  form: {
    flex: 0,
    width: "100%",
  },
  pageHeader: {
    alignSelf: "center",
    marginTop: 92,
    marginBottom: 32,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
  },
  linkText: {
    marginTop: 16,
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});
