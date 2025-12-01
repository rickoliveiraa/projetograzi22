// app/tema-obrigatorio.js

import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";

// ✅ IMAGENS VIA LINK EXTERNO (não dependem de cache local)
const zeRoberto = { uri: "ttps://www.cbv.com.br/noticias/ze-roberto-guimaraes-renova-com-a-cbv" }; // Foto azul do Ze Roberto
const bernardinho = { uri: "https://www.rbsdirect.com.br/filestore/8/6/6/7/9/9/4_3164c004e4a8078/4997668_9fe892681aede81.jpg?w=700" }; // Foto verde do Bernardinho

export default function TemaObrigatorio() {
  const openLink = (url) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      bounces={false}
      nestedScrollEnabled={true}
    >
      {/* Título */}
      <Text style={styles.title}>TREINADORES LENDÁRIOS: O LEGADO DE ZE ROBERTO E BERNARDINHO</Text>

      {/* Introdução */}
      <Text style={styles.paragraph}>
        No voleibol, o técnico é o arquiteto invisível — quem molda estratégias, lidera emoções e transforma talentos em campeões. 
        No Brasil, dois nomes elevaram esse papel à categoria de lenda: Ze Roberto Guimarães, mestre da seleção feminina, e Bernardinho Rezende, gênio da seleção masculina.
      </Text>
      <Text style={styles.paragraph}>
        Ambos construíram impérios com disciplina, inteligência tática e um profundo amor pelo esporte. Suas trajetórias são sinônimo de glória, superação e orgulho nacional.
      </Text>

      {/* Ze Roberto Guimarães */}
      <Text style={styles.sectionTitle}>🏆 ZE ROBERTO GUIMARÃES — O MESTRE DA SELEÇÃO FEMININA</Text>

      <View style={styles.coachCard}>
        <Image source={zeRoberto} style={styles.coachImage} />
        <Text style={styles.coachName}>Ze Roberto Guimarães</Text>
        <Text style={styles.subtitle}>“O Professor” — Arquiteto das medalhas douradas</Text>
        <Text style={styles.coachInfo}>
          🇧🇷 <Text style={styles.highlight}>Brasil</Text> | 🎂 68 anos (nascido em 07/09/1956) | 🏆 Treinador da Seleção Feminina desde 2017
        </Text>
        <Text style={styles.coachDetail}>
          Ze Roberto assumiu a seleção feminina em 2017 e, desde então, revolucionou o time com sua visão tática e liderança serena. 
          Sob seu comando, o Brasil conquistou:
          • <Text style={styles.highlight}>Medalha de Bronze nas Olimpíadas de Paris 2024</Text>
          • <Text style={styles.highlight}>Campeã da Liga das Nações (VNL) 2024</Text>
          • <Text style={styles.highlight}>Finalista do Campeonato Mundial 2025</Text>
          • <Text style={styles.highlight}>Maior série invicta da história da seleção feminina (18 vitórias consecutivas)</Text>
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://www.cbv.com.br/noticias/ze-roberto-guimaraes-renova-com-a-cbv")}
        >
          <Text style={styles.linkText}>🔍 Ver perfil oficial CBV</Text>
        </TouchableOpacity>
      </View>

      {/* Bernardinho Rezende */}
      <Text style={styles.sectionTitle}>🥇 BERNARDINHO REZENDE — O GÊNIO DA SELEÇÃO MASCULINA</Text>

      <View style={styles.coachCard}>
        <Image source={bernardinho} style={styles.coachImage} />
        <Text style={styles.coachName}>Bernardinho Rezende</Text>
        <Text style={styles.subtitle}>“O Magistrado” — Rei das quadras e dos troféus</Text>
        <Text style={styles.coachInfo}>
          🇧🇷 <Text style={styles.highlight}>Brasil</Text> | 🎂 65 anos (nascido em 25/08/1960) | 🏆 Treinador da Seleção Masculina desde 2001 (com interrupções)
        </Text>
        <Text style={styles.coachDetail}>
          Bernardinho é um dos maiores treinadores da história mundial. Comandou a seleção masculina por mais de duas décadas, escrevendo páginas douradas:
          • <Text style={styles.highlight}>Ouro Olímpico em Pequim 2008 e Londres 2012</Text>
          • <Text style={styles.highlight}>Campeão Mundial em 2002 e 2006</Text>
          • <Text style={styles.highlight}>Tricampeão da Liga das Nações (VNL) — 2019, 2021, 2023</Text>
          • <Text style={styles.highlight}>Recordista de medalhas olímpicas e mundiais pela CBV</Text>
          • <Text style={styles.highlight}>Induzido ao Hall da Fama do Voleibol em 2022</Text>
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://www.rbsdirect.com.br/filestore/8/6/6/7/9/9/4_3164c004e4a8078/4997668_9fe892681aede81.jpg?w=700")}
        >
          <Text style={styles.linkText}>🔍 Ver perfil oficial CBV</Text>
        </TouchableOpacity>
      </View>

      {/* Nota Final */}
      <Text style={styles.footer}>
        Ze Roberto e Bernardinho não apenas treinam equipes — eles inspiram gerações. 
        {"\n"}Seus métodos, paixão e dedicação transformaram o voleibol brasileiro em referência global. 
        {"\n"}Eles são prova de que, além do talento dos jogadores, há um mestre nos bastidores — e ele merece todo o respeito.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A1A2F",
  },
  content: {
    padding: 20,
    paddingBottom: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#E3F2FD",
    textAlign: "center",
    marginBottom: 22,
    lineHeight: 34,
    textShadowColor: "rgba(33, 150, 243, 0.3)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  paragraph: {
    fontSize: 16,
    color: "#B3E5FC",
    lineHeight: 25,
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2196F3",
    marginBottom: 18,
    marginTop: 26,
    textAlign: "center",
  },
  coachCard: {
    backgroundColor: "rgba(10, 26, 47, 0.85)",
    borderRadius: 18,
    padding: 22,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#3949AB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  coachImage: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 14,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },
  coachName: {
    fontSize: 22,
    fontWeight: "900",
    color: "#FF5252",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#81D4FA",
    marginBottom: 10,
    fontStyle: "italic",
  },
  coachInfo: {
    fontSize: 15,
    color: "#B3E5FC",
    lineHeight: 22,
    marginBottom: 12,
    fontWeight: "600",
  },
  coachDetail: {
    fontSize: 15,
    color: "#90CAF9",
    lineHeight: 23,
    marginBottom: 14,
  },
  linkButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(33, 150, 243, 0.25)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(33, 150, 243, 0.4)",
  },
  linkText: {
    color: "#BBDEFB",
    fontSize: 14,
    fontWeight: "600",
  },
  footer: {
    fontSize: 16,
    color: "#81D4FA",
    lineHeight: 24,
    marginTop: 20,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "600",
  },
});