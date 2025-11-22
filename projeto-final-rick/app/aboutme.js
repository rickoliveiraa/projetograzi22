import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, alignItems, Platform, SafeAreaView, ImageBackground } from 'react-native';
import foto from "../assets/foto.jpg";
import background from "../assets/background.jpg";

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={background} style={styles.background} resizeMode="cover"
      >
        <View style={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <View style={styles.main}>
      <View>
        <Image source={foto} style={styles.foto} />
        </View>
        <Text style={styles.subtitle}>
          <Text style={{fontWeight: "bold"}}>Nome: </Text> Richard
        </Text>
        <Text style={styles.subtitle}>
          <Text style={{fontWeight: "bold"}}>RM: </Text> 08335
        </Text>
        <Text style={styles.subtitle}>
          <Text style={{fontWeight: "bold"}}>Endereço: </Text> Rua 7 de Setembro, 166
        </Text>
        <Text style={styles.subtitle}>
          <Text style={{fontWeight: "bold"}}>Cidade: </Text> Presidente Venceslau
        </Text>
        <Text style={styles.subtitle}>
          <Text style={{fontWeight: "bold"}}>Estado: </Text> São Paulo
        </Text>
    </View>
    </View>
    </ImageBackground>
    <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#c3e6ebff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  main: {
    flexDirection: Platform.OS === "web" ? "row" : "column",
    gap: 20,
    // justifyContent: "center",
    alignItems: "center",
  },
  title : {
    // fontSize: 36,
    fontSize: Platform.OS === "web" ? 48 : 36,
    marginBottom: 20,
    textTransform: "uppercase",
    fontWeight: Platform.OS === "web" ? "bold" : null,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 15,
    // marginBottom: 20,
  },
  background: {
    width: "100%",
    height: "100%",
    flex:1,
  }
});
