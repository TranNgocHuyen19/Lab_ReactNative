import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import type { Product } from "./Screen4a";
import { FaStar } from "react-icons/fa";

const screenWidth = Dimensions.get("window").width;
const ITEM_WIDTH = screenWidth / 2 - 20;

export default function ProductCard({ item }: { item: Product }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.name}
      </Text>
      <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
        <FaStar style={{ color: "#FBE41B" }} />
        <FaStar style={{ color: "#FBE41B" }} />
        <FaStar style={{ color: "#FBE41B" }} />
        <FaStar style={{ color: "#FBE41B" }} />
        <FaStar style={{ color: "#C4C4C4" }} />
        <Text>(15)</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 600 }}>{item.price} đ</Text>
        <Text style={{ color: "#969DAA", fontSize: 18 }}>-39%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    margin: 10,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    marginTop: 8,
    textAlign: "center",
  },
});
