import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FaBars } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdReturnLeft } from "react-icons/io";

export default function BottomTab() {
  return (
    <View style={styles.container}>
      <TouchableOpacity><FaBars /></TouchableOpacity>
      <TouchableOpacity><IoHomeOutline /></TouchableOpacity>
      <TouchableOpacity><IoMdReturnLeft /></TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1BA9FF',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    fontSize: 20
  },
});
