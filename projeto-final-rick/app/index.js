<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
=======
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
>>>>>>> 491f712f4a7bae3ef2a11dc1cd935983edb78ade
  Image,
  TouchableOpacity,
  Platform,
  Animated,
} from "react-native";
<<<<<<< HEAD
import { useNavigation } from "@react-navigation/native"; // ✅ Navegação correta para abas

// Substitua por uma ilustração estilizada (não realista) com tons de azul e vermelho, proporção 4:3
=======
import { SafeAreaView } from "react-native-safe-area-context";

// Substitua esta imagem por uma versão estilizada (não realista) com cores azul e vermelho, se desejar
>>>>>>> 491f712f4a7bae3ef2a11dc1cd935983edb78ade
const fotoLocal = require("./volei.jpg");

export default function App() {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [opacityAnim] = useState(new Animated.Value(0));
<<<<<<< HEAD
  const navigation = useNavigation(); // ✅ Hook de navegação

  // Animação de entrada suave ao carregar a tela
  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 900,
=======

  // Animação ao abrir a tela
  React.useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 800,
>>>>>>> 491f712f4a7bae3ef2a11dc1cd935983edb78ade
      useNativeDriver: true,
    }).start();
  }, []);

<<<<<<< HEAD
  // Animação de toque no botão + navegação
  function animarBotao() {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.92,
        duration: 100,
=======
  // Animação do botão
  function animarBotao() {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.94,
        duration: 90,
>>>>>>> 491f712f4a7bae3ef2a11dc1cd935983edb78ade
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
<<<<<<< HEAD
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
=======
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
>>>>>>> 491f712f4a7bae3ef2a11dc1cd935983edb78ade
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
<<<<<<< HEAD
    paddingHorizontal: 28,
=======
    paddingHorizontal: 24,
>>>>>>> 491f712f4a7bae3ef2a11dc1cd935983edb78ade
    backgroundColor: "#0A1A2F",
  },
  volleyballIcon: {
    width: 260,
<<<<<<< HEAD
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
=======
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
>>>>>>> 491f712f4a7bae3ef2a11dc1cd935983edb78ade
      },
    }),
  },
  title: {
<<<<<<< HEAD
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
=======
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
>>>>>>> 491f712f4a7bae3ef2a11dc1cd935983edb78ade
      },
    }),
  },
  buttonText: {
<<<<<<< HEAD
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 1.2,
=======
    fontSize: 19,
    fontWeight: "700",
    color: "#E3F2FD",
    letterSpacing: 1,
>>>>>>> 491f712f4a7bae3ef2a11dc1cd935983edb78ade
  },
});