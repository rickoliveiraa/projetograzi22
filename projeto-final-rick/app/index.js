import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const fotoLocal = require("./volei.webp");

export default function App() {
  const [scaleAnim] = useState(new Animated.Value(1));
  const [opacityAnim] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start();
  }, []);

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
      navigation.navigate("tema-livre");
    });
  }

  return (
    <Animated.View style={[styles.container, { opacity: opacityAnim }]}>
      <Image source={fotoLocal} style={styles.volleyballIcon} />

      <Text style={styles.title}>VÔLEI</Text>

      <Text style={styles.paragraph}>
        Mais que um esporte, o vôlei é uma sinfonia coletiva: seis corpos em perfeita harmonia, 
        onde o erro de um é resgatado pelo esforço de todos. Sem contato físico, sem individualismos — 
        apenas técnica, confiança e entrega absoluta ao time.
      </Text>

      <Text style={styles.paragraph}>
        Globalmente, o esporte cresce com força: mais de 800 milhões de praticantes em 220 países, 
        e uma nova era liderada por França, Itália e Polônia — mas com o Brasil sempre à espreita, 
        pronto para retomar seu trono nas quadras do mundo.
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
    paddingHorizontal: 26,
    backgroundColor: "#0A1A2F",
  },
  volleyballIcon: {
    width: 400,
    height: 250,
    borderRadius: 20,
    resizeMode: "cover",
    marginBottom: 10,
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
    fontSize: 38,
    fontWeight: "900",
    color: "#52d7ffff",
    textAlign: "center",
    letterSpacing: 2,
    marginBottom: 22,
    lineHeight: 44,
    textTransform: "uppercase", // deixa mais impactante
  },
  paragraph: {
    fontSize: 16,
    color: "#B3E5FC",
    textAlign: "center",
    lineHeight: 26,
    marginBottom: 18,
    marginHorizontal: 16,
    fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : "sans-serif-light",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 46,
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
    fontSize: 19,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 1.2,
  },
});