/* CÓDIGO MELHORADO SEM ANIMAÇÃO DA BOLINHA BRANCA */
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Animated,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const fotoLocal = require("./volei.webp");

export default function App() {
  const navigation = useNavigation();

  const fade = useRef(new Animated.Value(0)).current;
  const translate = useRef(new Animated.Value(30)).current;
  const buttonPulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: 900,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(buttonPulse, {
          toValue: 1.05,
          duration: 1100,
          useNativeDriver: true,
        }),
        Animated.timing(buttonPulse, {
          toValue: 1,
          duration: 1100,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // ⚠️ REMOVIDO: Animação da bola branca
    // const bolaX = useRef(new Animated.Value(-40)).current;
    // Animated.loop(...).start(); → removido

  }, []);

  function entrar() {
    navigation.navigate("tema-livre");
  }

  return (
    <LinearGradient colors={["#061625", "#0E223A", "#15395C"]} style={styles.fundo}>
      <Animated.View style={[styles.container, { opacity: fade, transform: [{ translateY: translate }] }]}>
        
        {/* CARD DA IMAGEM */}
        <View style={styles.imageCard}>
          <Image source={fotoLocal} style={styles.img} />
          <View style={styles.glassOverlay} />
          {/* 🔵 BOLA REMOVIDA */}
        </View>

        {/* TÍTULO */}
        <Text style={styles.title}>VÔLEI</Text>

        {/* TEXTOS MAIS BONITOS E ORGANIZADOS */}
        <Text style={styles.paragraph}>
          O vôlei é um esporte entre duas equipes separadas por uma rede, em que cada lado tenta fazer a bola tocar o chão do adversário usando até três toques por jogada. 
          O jogo começa com o saque e segue em ritmo rápido, com ataques, bloqueios e defesas. </Text>

        <Text style={styles.paragraph}>
        A partida é dividida em sets até 25 pontos, e vence quem fechar três sets.
        É um esporte ágil, técnico e cheio de momentos emocionantes.
        </Text>

        {/* BOTÃO */}
        <Animated.View style={{ transform: [{ scale: buttonPulse }] }}>
          <TouchableOpacity activeOpacity={0.85} style={styles.button} onPress={entrar}>
            <Text style={styles.buttonText}>ENTRAR</Text>
            <View style={styles.buttonGlow} />
          </TouchableOpacity>
        </Animated.View>

      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 28,
  },

  /* 🔵 imagem menor e mais elegante */
  imageCard: {
    width: "85%",
    height: 210,
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 20,
    position: "relative",
    ...Platform.select({
      android: { elevation: 8 },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
      },
    }),
  },

  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  glassOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.08)",
  },

  /* 🔵 bola animada — REMOVIDA */
  // bola: {
  //   width: 26,
  //   height: 26,
  //   borderRadius: 13,
  //   backgroundColor: "#fff",
  //   position: "absolute",
  //   top: 20,
  //   elevation: 6,
  //   shadowColor: "#fff",
  //   shadowOpacity: 0.6,
  //   shadowRadius: 8,
  // },

  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "#53C8FF",
    textAlign: "center",
    marginBottom: 18,
  },

  paragraph: {
    fontSize: 16,
    color: "#D8ECFF",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 14,
  },

  button: {
    backgroundColor: "#1A8CFF",
    paddingHorizontal: 55,
    paddingVertical: 18,
    borderRadius: 50,
    overflow: "hidden",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
  },

  buttonGlow: {
    position: "absolute",
    top: -50,
    left: -50,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255,255,255,0.16)",
  },
});