import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']} style={styles.container}>
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
          <Text style={{fontWeight: '700'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontWeight: '700'}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>HOW WE WORK?</Text>
      </View>
    </LinearGradient>
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
    fontWeight: '700',
    padding: '0 20px'
  },
  btnCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '60px',
    marginBottom: '20px',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#E3C000',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 4,
    alignSelf: 'flex-start',
    textAlign: 'center',
    margin: '0 30px',
  }
});
