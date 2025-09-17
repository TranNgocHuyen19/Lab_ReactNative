import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import type { Product } from './Screen4a';

export default function ProductBox({ item }: { item: Product }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.company} numberOfLines={1} ellipsizeMode='tail' >Shop {item.companyName}</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.btnChat}>Chat</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  company: {
    color: '#E83030',
    width: 120
  },
  btnChat: {
    alignItems: 'center',
    backgroundColor: '#F31111',
    color: 'white',
    padding: 10
  },
});
