import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Checkout() {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.labelBold}>Thành tiền</Text>
        <Text style={styles.priceBold}>141.800 đ</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  labelBold: { fontSize: 16, fontWeight: "700" },
  priceBold: { fontSize: 16, fontWeight: "700", color: "red" },

  button: {
    marginTop: 10,
    backgroundColor: "#E53935",
    borderRadius: 6,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  btnText: { color: "#fff", fontWeight: "700" },
});
