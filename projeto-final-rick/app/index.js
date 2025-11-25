import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Substitua esta imagem por uma versão estilizada (não realista) com cores azul e vermelho, se desejar
const fotoLocal = require("./volei.jpg");

export default function App() {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [opacityAnim] = useState(new Animated.Value(0));

  // Animação ao abrir a tela
  React.useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  // Animação do botão
  function animarBotao() {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.94,
        duration: 90,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 90,
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <SafeAreaView style={styles.safe}>
      <Animated.View style={[styles.container, { opacity: opacityAnim }]}>
        <Image source={fotoLocal} style={styles.volleyballIcon} />

        <Text style={styles.title}>BEM-VINDO AO VÔLEI EM FOCO</Text>

        <Text style={styles.subtitle}>
          Aqui, cada salto conta, cada toque define o jogo e cada atleta escreve
          sua história. Seja parte do mundo do vôlei — disciplina, energia,
          trabalho em equipe e superação.
        </Text>

        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={animarBotao}
          >
            <Text style={styles.buttonText}>Começar Minha Jornada</Text>
          </TouchableOpacity>
        </Animated.View>

        <StatusBar style="light" />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0A1A2F",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#0A1A2F",
  },
  volleyballIcon: {
    width: 260,
    height: 195, // 4:3 ratio
    borderRadius: 18,
    resizeMode: "cover",
    marginBottom: 30,
    ...Platform.select({
      android: { elevation: 6 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      },
    }),
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: "#E3F2FD",
    textAlign: "center",
    letterSpacing: 1.2,
    marginBottom: 16,
    lineHeight: 42, // para melhor legibilidade em telas menores
  },
  subtitle: {
    fontSize: 17,
    color: "#BBDEFB",
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 34,
    width: "90%",
  },
  button: {
    backgroundColor: "#2196F3", // azul vibrante, combinando com sua preferência
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: { elevation: 7 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 7,
      },
    }),
  },
  buttonText: {
    fontSize: 19,
    fontWeight: "700",
    color: "#E3F2FD",
    letterSpacing: 1,
  },
});