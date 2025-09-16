import { View, Text, StyleSheet } from "react-native";

export default function VoucherInput() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        <Text style={styles.link}> Nhập tại đây?</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 10 },
  text: { fontSize: 13, fontWeight: "700", color: "#333" },
  link: { color: "#134FEC", fontWeight: "700" },
});
