// app/sobre-mim.js

import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Platform,
  Dimensions,
} from "react-native";

// Foto mantida como está
const minhaFoto = require("../assets/foto.jpeg");

const { width } = Dimensions.get("window");
const isWeb = Platform.OS === "web";

export default function SobreMim() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.content,
          { paddingHorizontal: isWeb ? Math.min(40, width * 0.1) : 20 }
        ]}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <Text style={styles.title}>SOBRE MIM</Text>

        <View style={styles.infoCard}>
          <Image
            source={minhaFoto}
            style={[
              styles.profileImage,
              {
                width: isWeb ? 180 : 160,
                height: isWeb ? 180 : 160,
                borderRadius: isWeb ? 90 : 80,
              },
            ]}
          />

          <Text style={styles.infoText}>
            <Text style={styles.bold}>Nome:</Text>{' '}
            <Text style={styles.highlight}>Richard Gabriel</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Idade:</Text>{' '}
            <Text style={styles.highlight}>17 anos</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Curso:</Text>{' '}
            <Text style={styles.highlight}>Informática para Internet</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Série:</Text>{' '}
            <Text style={styles.highlight}>2º Info</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Disciplina:</Text>{' '}
            <Text style={styles.highlight}>Desenvolvimento para Dispositivos Móveis I</Text>
          </Text>
          <Text style={styles.infoText}>
            <Text style={styles.bold}>Tema do Projeto:</Text>{' '}
            <Text style={styles.highlight}>Voleibol</Text>
          </Text>
        </View>

        <Text style={styles.footer}>
          Este app é minha homenagem ao voleibol — um esporte que me inspira pela união, disciplina e superação coletiva.
          {"\n"}Desenvolvido com React Native, ele combina código, design e paixão por um dos maiores esportes do Brasil.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0A1A2F",
  },
  container: {
    flex: 1,
  },
  content: {
    paddingVertical: Platform.select({ web: 40, default: 20 }),
    paddingBottom: Platform.select({ web: 60, default: 40 }),
    alignItems: "center",
  },
  title: {
    fontSize: Platform.select({ web: 36, default: 28 }),
    fontWeight: "900",
    color: "#E3F2FD",
    textAlign: "center",
    marginBottom: Platform.select({ web: 32, default: 26 }),
    lineHeight: Platform.select({ web: 42, default: 34 }),
    textShadowColor: "rgba(33, 150, 243, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  infoCard: {
    backgroundColor: "rgba(10, 26, 47, 0.85)",
    borderRadius: 18,
    padding: Platform.select({ web: 32, default: 24 }),
    marginBottom: Platform.select({ web: 36, default: 26 }),
    borderWidth: 1,
    borderColor: "#3949AB",
    alignItems: "center",
    width: Platform.select({ web: "80%", default: "100%" }),
    maxWidth: Platform.select({ web: 600, default: undefined }),
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
      web: {
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
      },
    }),
  },
  profileImage: {
    marginBottom: Platform.select({ web: 26, default: 22 }),
    borderWidth: 2,
    borderColor: "rgba(33, 150, 243, 0.4)",
    resizeMode: "cover",
  },
  infoText: {
    fontSize: Platform.select({ web: 18, default: 16 }),
    color: "#B3E5FC",
    lineHeight: Platform.select({ web: 26, default: 24 }),
    marginBottom: Platform.select({ web: 12, default: 10 }),
    textAlign: "center",
    maxWidth: Platform.select({ web: 500, default: "100%" }),
  },
  bold: {
    fontWeight: "700",
    color: "#E3F2FD",
  },
  highlight: {
    color: "#2196F3",
    fontWeight: "700",
  },
  footer: {
    fontSize: Platform.select({ web: 18, default: 16 }),
    color: "#81D4FA",
    lineHeight: Platform.select({ web: 26, default: 24 }),
    marginTop: Platform.select({ web: 20, default: 12 }),
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "600",
    maxWidth: Platform.select({ web: 600, default: "100%" }),
    paddingHorizontal: Platform.select({ web: 20, default: 0 }),
  },
});