import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // ✅ Navegação correta para abas

// Substitua por uma ilustração estilizada (não realista) com tons de azul e vermelho, proporção 4:3
const fotoLocal = require("./volei.jpg");

export default function App() {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [opacityAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation(); // ✅ Hook de navegação

  // Animação de entrada suave ao carregar a tela
  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  }, []);

  // Animação de toque no botão + navegação
  function animarBotao() {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.92,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.navigate("tema-livre"); // ✅ Vai para a aba "Tema Livre"
    });
  }

  return (
    <Animated.View style={[styles.container, { opacity: opacityAnim }]}>
      <Image source={fotoLocal} style={styles.volleyballIcon} />

      <Text style={styles.title}>VOLEIBOL</Text>

      <Text style={styles.subtitle}>
        Onde a quadra se torna palco, o esforço vira excelência e cada ponto
        é conquistado com garra, precisão e espírito de equipe. 
        Bem-vindo ao coração do esporte.
      </Text>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.85}
          onPress={animarBotao}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
    backgroundColor: "#0A1A2F",
  },
  volleyballIcon: {
    width: 260,
    height: 195, // proporção 4:3
    borderRadius: 20,
    resizeMode: "cover",
    marginBottom: 32,
    ...Platform.select({
      android: { elevation: 8 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
    }),
  },
  title: {
    fontSize: 42,
    fontWeight: "900",
    color: "#E3F2FD",
    textAlign: "center",
    letterSpacing: 1.6,
    marginBottom: 20,
    lineHeight: 46,
  },
  subtitle: {
    fontSize: 17,
    color: "#B3E5FC",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 36,
    width: "92%",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 48,
    paddingVertical: 17,
    borderRadius: 52,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      android: { elevation: 8 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
    }),
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 1.2,
  },
});