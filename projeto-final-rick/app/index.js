import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";

const fotoLocal = require("./assets/volei.jpg"); // <= coloque sua imagem aqui

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image source={fotoLocal} style={styles.volleyballIcon} />

        <Text style={styles.title}>VÔLEI EM FOCO</Text>

        <Text style={styles.subtitle}>
          Domine a quadra como jogador. Inspire como técnico.
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Começar Jornada</Text>
        </TouchableOpacity>

        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0f3d0f",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#0f3d0f",
  },

  volleyballIcon: {
    width: 240, // 4:3 ratio
    height: 180,
    borderRadius: 12,
    resizeMode: "cover",
    marginBottom: 30,
    ...Platform.select({
      android: {
        elevation: 5,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
      },
    }),
  },

  title: {
    fontSize: 36,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    color: "#e8ffe8",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 36,
  },

  button: {
    backgroundColor: "#ffd633",
    paddingHorizontal: 36,
    paddingVertical: 14,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: { elevation: 6 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
      },
    }),
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1c3d1c",
    letterSpacing: 1,
  },
});
