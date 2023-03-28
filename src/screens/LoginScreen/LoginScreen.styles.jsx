import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  contentThumb: {
    position: "relative",
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    height: "60%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    marginBottom: 111,
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
});
