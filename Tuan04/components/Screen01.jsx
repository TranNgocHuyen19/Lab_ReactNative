import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import CartItem from "./components/CartItem";
import PromotionBox from "./components/PromotionBox";
import VoucherInput from "./components/VoucherInput";
import Checkout from "./components/Checkout";

export default function Screen01() {
  const cart = [
    {
      id: "1",
      title: "Nguyên hàm tích phân và ứng dụng",
      supplierName: "Tiki Trading",
      oldPrice: 141800,
      newPrice: 141800,
      quantity: 1,
      image: "item01.jpg",
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <View>
        <View>
          <View style={styles.card}>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CartItem item={item} />}
              ListFooterComponent={
                <View style={styles.savedVoucherRow}>
                  <Text style={styles.savedLabel}>Mã giảm giá đã lưu</Text>
                  <Text style={styles.savedLink}>Xem tại đây</Text>
                </View>
              }
              contentContainerStyle={{ padding: 12, gap: 12 }}
            />
          </View>

          <View style={styles.card}>
            <PromotionBox />
          </View>
          <View style={styles.blockSpacer} />

          <View style={styles.card}>
            <VoucherInput />
          </View>

          <View style={styles.blockHeaderRow}>
            <Text style={styles.subtotalLabel}>Tạm tính</Text>
            <Text style={styles.subtotalPrice}>141.800 đ</Text>
          </View>
          <View style={styles.bigGrayBlock} />
        </View>
      </View>

      <View style={styles.card}>
        <Checkout />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#C4C4C4",
  },

  card: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },

  savedVoucherRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12,
    marginTop: 8,
  },
  savedLabel: { fontSize: 14, fontWeight: "700" },
  savedLink: { fontSize: 14, fontWeight: "700", color: "#134FEC" },

  blockSpacer: {
    height: 10,
    backgroundColor: "#C4C4C4",
  },

  blockHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  subtotalLabel: { fontSize: 18, fontWeight: "700" },
  subtotalPrice: { fontSize: 18, color: "red", fontWeight: "700" },
});
