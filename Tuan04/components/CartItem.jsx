import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function CartItem({ item }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/item01.jpg")} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.supplier}>Cung cấp bởi {item.supplierName}</Text>

        <Text style={styles.price}>
          {item.newPrice.toLocaleString("vi-VN")} đ
        </Text>
        <Text style={styles.oldPrice}>
          {item.oldPrice.toLocaleString("vi-VN")} đ
        </Text>

        <View style={styles.bottomRow}>
          <View style={styles.qtyBox}>
            <TouchableOpacity style={styles.btnQuantity}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{item.quantity}</Text>
            <TouchableOpacity style={styles.btnQuantity}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.buyLater}>Mua sau</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  logo: { width: 96, height: 120, resizeMode: "cover", borderRadius: 2 },

  title: { fontWeight: "700", fontSize: 14, marginBottom: 6 },
  supplier: { fontSize: 12, color: "#333", marginBottom: 6 },

  price: { color: "red", fontSize: 22, fontWeight: "700", marginBottom: 2 },
  oldPrice: {
    color: "#9E9E9E",
    textDecorationLine: "line-through",
    fontSize: 12,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    justifyContent: "space-between",
  },
  qtyBox: { flexDirection: "row", alignItems: "center", gap: 12 },
  btnQuantity: {
    width: 28,
    height: 28,
    borderRadius: 2,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyText: { fontWeight: "700" },
  buyLater: { color: "#134FEC", fontWeight: "700" },
});
