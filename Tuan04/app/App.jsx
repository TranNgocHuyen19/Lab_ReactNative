import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import Screen01 from "./components/Screen01";
import Screen02 from "./components/Screen02";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* <Screen01 /> */}
      <Screen02 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});
