import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FaArrowLeft } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa";

export default function NavigatorBar() {
  return (
    <View style={styles.container}>
      <FaArrowLeft />
      Chat
      <FaCartPlus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1BA9FF',
    color: 'white',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: 20
  },
});
