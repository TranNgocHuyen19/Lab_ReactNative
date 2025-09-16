import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function PromotionBox() {
  return (
    <View style={styles.row}>
      <View style={{ flex: 1, position: "relative" }}>
        <TextInput style={styles.input} placeholder="Mã giảm giá" />
        <View style={styles.yellowTag} />
      </View>

      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyText}>Áp dụng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    height: 44,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 6,
    paddingLeft: 56,
    paddingRight: 12,
    backgroundColor: "#fff",
  },
  yellowTag: {
    position: "absolute",
    left: 12,
    top: 12,
    width: 32,
    height: 20,
    backgroundColor: "#F2DD1B",
    borderRadius: 2,
  },
  applyBtn: {
    height: 44,
    paddingHorizontal: 16,
    backgroundColor: "#0A5EB7",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  applyText: { color: "#fff", fontWeight: "700" },
});
