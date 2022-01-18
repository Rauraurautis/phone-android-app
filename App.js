import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import doggo from "./doggo.jpg"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{paddingBottom: 15}}>Hello, world!</Text>
      <Image source={doggo} style={{width: 305, height: 159}}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
