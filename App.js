import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from "react-native";
import icon from "./assets/icon.png"

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={icon} style={{ width: 100, height: 100 }} />
      <Text style={{color: "#fff"}}>
        Open up App.js to start working on your app!z Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Magnam, tenetur excepturi corporis
        assumenda cumque, aspernatur quas labore perspiciatis error vel, animi
        laudantium aperiam harum nobis? Eius, quod quae. Voluptatum, minus!
      </Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
