/* CÓDIGO FINAL — FIX DO WEB SEM CORTAR IMAGEM OU BOTÃO */

import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Animated,
  View,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const fotoLocal = require("./volei.webp");

const { width, height } = Dimensions.get("window");
const isWeb = Platform.OS === "web";

export default function App() {
  const navigation = useNavigation();

  const fade = useRef(new Animated.Value(0)).current;
  const translate = useRef(new Animated.Value(30)).current;
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(translate, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1.07,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <LinearGradient colors={["#061625", "#0E223A", "#15395C"]} style={styles.fundo}>
      <Animated.View
        style={[
          styles.container,
          isWeb && styles.webScrollFix,
          {
            opacity: fade,
            transform: [{ translateY: translate }],
          },
        ]}
      >
        {/* IMAGEM */}
        <View style={[styles.imageCard, isWeb && styles.imageCardWeb]}>
          <Image source={fotoLocal} style={styles.img} />
        </View>

        {/* TÍTULO */}
        <Text style={[styles.title, isWeb && styles.titleWeb]}>VÔLEI</Text>

        {/* TEXTOS */}
        <Text style={[styles.paragraph, isWeb && styles.paragraphWeb]}>
          O vôlei é um esporte rápido e estratégico, jogado entre duas equipes que tentam fazer a bola tocar o chão do adversário.
        </Text>

        <Text style={[styles.paragraph, isWeb && styles.paragraphWeb]}>
         Com saques fortes, ataques e defesas precisas, o jogo exige trabalho em equipe e muita agilidade. É um dos esportes mais populares do mundo, especialmente no Brasil.
        </Text>

        {/* BOTÃO */}
        <Animated.View style={{ transform: [{ scale: pulse }] }}>
          <TouchableOpacity
            style={[styles.button, isWeb && styles.buttonWeb]}
            activeOpacity={0.85}
            onPress={() => navigation.navigate("tema-livre")}
          >
            <Text style={[styles.buttonText, isWeb && styles.buttonTextWeb]}>ENTRAR</Text>
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

  /* FIX PARA O WEB NÃO CORTAR NADA */
  webScrollFix: {
    height: "100vh",
    width: "100vw",
    overflowY: "auto", // <-- ESSA LINHA RESOLVE SEU PROBLEMA
    paddingHorizontal: Math.min(40, width * 0.1),
    paddingVertical: 40,
    justifyContent: "flex-start", // deixa tudo visível
  },

  /* CARD DA IMAGEM */
  imageCard: {
    width: "85%",
    height: 210,
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 8,
  },

  imageCardWeb: {
    width: "70%",
    height: 260,
    marginTop: 50, // desce a imagem para web
    marginBottom: 32,
    boxShadow: "0 10px 25px rgba(0,0,0,0.45)",
  },

  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  /* TÍTULO */
  title: {
    fontSize: 40,
    fontWeight: "900",
    color: "#53C8FF",
    marginBottom: 18,
    textAlign: "center",
  },

  titleWeb: {
    fontSize: 56,
    marginBottom: 25,
  },

  /* TEXTO */
  paragraph: {
    fontSize: 16,
    color: "#D8ECFF",
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 14,
  },

  paragraphWeb: {
    fontSize: 20,
    lineHeight: 30,
    maxWidth: 800,
    marginBottom: 22,
  },

  /* BOTÃO */
  button: {
    backgroundColor: "#1A8CFF",
    paddingHorizontal: 55,
    paddingVertical: 18,
    borderRadius: 50,
    overflow: "hidden",
  },

  buttonWeb: {
    paddingHorizontal: 70,
    paddingVertical: 22,
    marginBottom: 80, // evita corte
    cursor: "pointer",
    boxShadow: "0 6px 16px rgba(26, 140, 255, 0.45)",
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },

  buttonTextWeb: {
    fontSize: 26,
  },
});
