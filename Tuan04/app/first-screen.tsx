import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function FirstScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}></View>
      <View style={styles.inner}>
        <Text style={styles.title}>GROW</Text>
        <Text style={styles.title}>YOUR BUSINESS</Text>
      </View>
      <View>
        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>
      </View>
      <View style={styles.btnCtn}>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontWeight: '600'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontWeight: '600'}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#00CCF9',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    height: '100px',
    border: '10px solid #000',
    borderRadius: '50%',
    marginTop: 40
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '80px 0px',
  },
  title: {
    fontSize: '30px',
    fontWeight: '700',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    padding: '0 20px'
  },
  btnCtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: '80px 0px',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#E3C000',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    textAlign: 'center',
    margin: '0 30px'
  }
});
