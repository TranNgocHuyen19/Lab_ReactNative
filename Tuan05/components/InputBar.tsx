import { TextInput, View, StyleSheet } from "react-native";
import { FaArrowLeft } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";

export default function InputBar() {
  return (
    <View style={styles.container}>
      <FaArrowLeft />
      <View style={styles.inputContainer}>
        <FaSearch style={{ color: "#000000" }} />
        <TextInput placeholder="Dây cáp usb" style={styles.input} />
      </View>
      <FaCartPlus />
      <HiDotsHorizontal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1BA9FF",
    color: "white",
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    fontSize: 20,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 2,
    backgroundColor: "#fff",
    padding: 5,
  },

  input: {
    marginLeft: 5,
  },
});
