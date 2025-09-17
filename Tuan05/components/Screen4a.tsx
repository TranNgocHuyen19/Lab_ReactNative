import { StyleSheet, ActivityIndicator, View, Text, FlatList } from 'react-native';

import ProductBox from './ProductBox';
import NavigatorBar from './NavigatorBar';
import BottomTab from './BottomTab';
import { useState, useEffect } from 'react';

export type Product = {
  id: string;
  name: string;
  companyName: string;
  image: string;
};

export default function Screen4a() {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Product[] | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          'https://67cd3487dd7651e464eda0c5.mockapi.io/api/v1/product'
        );
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  if(loading) return (
    <ActivityIndicator size="large" color="#00ff00" />
  )

  if(error) return (
    <Text style={{color: 'red', fontWeight: '700'}}>{error}</Text>
  )

  return (
     <View style={styles.container}>
     <NavigatorBar />
     <Text style={{textAlign: 'center', paddingVertical: 10, fontWeight: 500}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      {data ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductBox item={item} />}
        />
      ) : (
        <Text>No products</Text>
      )}
      <BottomTab/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
