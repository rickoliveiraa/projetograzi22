// app/tema-livre.js

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

// Importar as imagens dos jogadores
const michieletto = require("./assets/players/mich.jpg");
const reggers = require("./assets/players/reggers.jpg");
const gabi = require("./assets/players/gabi.webp");
const antropova = require("./assets/players/antro.jpg");

export default function TemaLivre() {
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
      <Text style={styles.title}>VOLEIBOL: O ESPORTE DA ALTURA, VELOCIDADE E UNIÃO</Text>

      {/* Introdução */}
      <Text style={styles.paragraph}>
        O voleibol é um esporte global, dinâmico e coletivo, onde cada ponto é resultado de coordenação, técnica e espírito de equipe.
        Atualmente, duas seleções dominam o cenário internacional: a França no masculino e a Itália no feminino.
      </Text>

      {/* Campeões Olímpicos e Mundiais */}
      <Text style={styles.sectionTitle}>CAMPEÕES MUNDIAIS E OLÍMPICOS (2024–2025)</Text>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: "#FF5252" }]}>Masculino</Text>
        <Text style={styles.cardText}>
          • <Text style={styles.bold}>Campeão Olímpico (Paris 2024): </Text><Text style={styles.highlight}>França</Text>{'\n'}
          • <Text style={styles.bold}>Campeão Mundial (2025): </Text><Text style={styles.highlight}>Itália</Text>{'\n'}
          • <Text style={styles.bold}>Vice-campeã Olímpica: </Text><Text style={styles.highlight}>Polônia</Text>{'\n'}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: "#42A5F5" }]}>Feminino</Text>
        <Text style={styles.cardText}>
          • <Text style={styles.bold}>Campeã Olímpica (Paris 2024): </Text><Text style={styles.highlight}>Itália</Text>{'\n'}
          • <Text style={styles.bold}>Campeã Mundial (2025): </Text><Text style={styles.highlight}>Itália</Text>{'\n'}
         • <Text style={styles.bold}>Vice-campeã Olímpica: </Text><Text style={styles.highlight}>Estados Unidos</Text>{'\n'}
        </Text>
      </View>

      {/* Atletas em Destaque */}
      <Text style={styles.sectionTitle}>ATLETAS EM DESTAQUE</Text>

      {/* Alessandro Michieletto */}
      <View style={styles.playerCard}>
        <Image source={michieletto} style={styles.playerImage} />
        <Text style={styles.playerName}>Alessandro Michieletto</Text>
        <Text style={styles.playerInfo}>
          • <Text style={styles.bold}>Nacionalidade: </Text><Text style={styles.highlight}>Itália</Text>{'\n'}
          • <Text style={styles.bold}>Idade: </Text><Text style={styles.highlight}>23 anos</Text> (nascido em 05/12/2001){'\n'}
          • <Text style={styles.bold}>Altura: </Text><Text style={styles.highlight}>2,11 m</Text>{'\n'}
          • <Text style={styles.bold}>Clube atual: </Text><Text style={styles.highlight}>Itas Trentino</Text> (Itália){'\n'}
          • <Text style={styles.bold}>Posição: </Text><Text style={styles.highlight}>Ponteiro</Text>{'\n'}
          • <Text style={styles.bold}>Conquistas: </Text><Text style={styles.highlight}>Bi-Campeão Mundial pela Itália</Text>, <Text style={styles.highlight}>MVP Campeonato Mundial 2025, Melhor Ponteiro da VNL 2025, MVP da Série A1 italiana 2024/25. </Text>
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://www.volleynews.it/wp-content/uploads/2022/08/Alessandro-Michieletto-Italia.jpg")}
        >
          <Text style={styles.linkText}>Ver perfil oficial</Text>
        </TouchableOpacity>
      </View>

      {/* Ferre Reggers */}
      <View style={styles.playerCard}>
        <Image source={reggers} style={styles.playerImage} />
        <Text style={styles.playerName}>Ferre Reggers</Text>
        <Text style={styles.playerInfo}>
          • <Text style={styles.bold}>Nacionalidade: </Text><Text style={styles.highlight}>Bélgica</Text>{'\n'}
          • <Text style={styles.bold}>Idade: </Text><Text style={styles.highlight}>22 anos</Text> (nascido em 18/07/2003){'\n'}
          • <Text style={styles.bold}>Altura: </Text><Text style={styles.highlight}>2,02 m</Text>{'\n'}
          • <Text style={styles.bold}>Clube atual: </Text><Text style={styles.highlight}>Allianz Milano</Text> (Itália){'\n'}
          • <Text style={styles.bold}>Posição: </Text><Text style={styles.highlight}>Oposto</Text>{'\n'}
          • <Text style={styles.bold}>Conquistas: </Text><Text style={styles.highlight}>Bronze no Campeonato Europeu U21 2020</Text>, <Text style={styles.highlight}>Melhor oposto do Europeu 2020</Text>.
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://images.hln.be/ODUwYjk4NTk3NjQwZDNmYmEyOGEvZGlvLzI2MjU4NzI0OC9maWxsLzEzNDkvOTAwL2ZlcnJlLXJlZ2dlcnM=")}
        >
          <Text style={styles.linkText}>Ver perfil oficial</Text>
        </TouchableOpacity>
      </View>

      {/* Gabi Guimarães */}
      <View style={styles.playerCard}>
        <Image source={gabi} style={styles.playerImage} />
        <Text style={styles.playerName}>Gabi Guimarães</Text>
        <Text style={styles.playerInfo}>
          • <Text style={styles.bold}>Nacionalidade: </Text><Text style={styles.highlight}>Brasil</Text>{'\n'}
          • <Text style={styles.bold}>Idade: </Text><Text style={styles.highlight}>31 anos</Text> (nascida em 19/05/1994){'\n'}
          • <Text style={styles.bold}>Altura: </Text><Text style={styles.highlight}>1,80 m</Text>{'\n'}
          • <Text style={styles.bold}>Clube atual: </Text><Text style={styles.highlight}>Imoco Conegliano</Text> (Itália){'\n'}
          • <Text style={styles.bold}>Posição: </Text><Text style={styles.highlight}>Ponteira</Text>{'\n'}
          • <Text style={styles.bold}>Conquistas: </Text><Text style={styles.highlight}>Vice-campeã Olímpica Tóquio 2021, Medalhista de Bronze Paris 2024</Text>, <Text style={styles.highlight}>Melhor Ponteira do Campeonato Mundial 2025, Melhor Ponteira da VNL 2025, Melhor Ponteira das Olimpíadas de Paris 2024, MVP da Série A1 italiana 2024/25.</Text>
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://midianinja.org/wp-content/uploads/2024/07/Foto_-FIBV-1-jpg.webp")}
        >
          <Text style={styles.linkText}>Ver perfil oficial</Text>
        </TouchableOpacity>
      </View>

      {/* Ekaterina Antropova */}
      <View style={styles.playerCard}>
        <Image source={antropova} style={styles.playerImage} />
        <Text style={styles.playerName}>Ekaterina Antropova</Text>
        <Text style={styles.playerInfo}>
          • <Text style={styles.bold}>Nacionalidade: </Text><Text style={styles.highlight}>Itália</Text> (nascida na Rússia){'\n'}
          • <Text style={styles.bold}>Idade: </Text><Text style={styles.highlight}>22 anos</Text> (nascida em 19/03/2003){'\n'}
          • <Text style={styles.bold}>Altura: </Text><Text style={styles.highlight}>2,02 m</Text>{'\n'}
          • <Text style={styles.bold}>Clube atual: </Text><Text style={styles.highlight}>Savino Del Bene Scandicci</Text> (Itália){'\n'}
          • <Text style={styles.bold}>Posição: </Text><Text style={styles.highlight}>Oposta</Text>{'\n'}
          • <Text style={styles.bold}>Conquistas: </Text><Text style={styles.highlight}>Campeã Olímpica em Paris 2024, Campeã VNL 2025, Campeã Mundial 2025</Text>, <Text style={styles.highlight}>Melhor sacadora Liga dos Campeões 2024/25, Melhor pontuadora Série A1 italiana 2024/25, Melhor sacadora Série A1 italiana 2024/25.</Text>
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://img.nsctotal.com.br/wp-content/uploads/2025/07/Antropova-4.jpg")}
        >
          <Text style={styles.linkText}>Ver perfil oficial</Text>
        </TouchableOpacity>
      </View>

      {/* Nota final */}
      <Text style={styles.footer}>
        O voleibol segue evoluindo com novas gerações de atletas que combinam força, técnica e inteligência tática.
        {"\n"}Esses quatro são exemplos de talento, dedicação e paixão pelo esporte — e todos brilham na elite mundial.
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
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: "900",
    color: "#E3F2FD",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 32,
  },
  paragraph: {
    fontSize: 16,
    color: "#B3E5FC",
    lineHeight: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2196F3",
    marginBottom: 16,
    marginTop: 20,
  },
  card: {
    backgroundColor: "rgba(33, 150, 243, 0.08)",
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    borderColor: "#2196F3",
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: "#BBDEFB",
    lineHeight: 22,
  },
  bold: {
    fontWeight: "700",
    color: "#E3F2FD",
  },
  highlight: {
    color: "#2196F3",
    fontWeight: "700",
  },
  playerCard: {
    backgroundColor: "rgba(10, 26, 47, 0.7)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 22,
    borderWidth: 1,
    borderColor: "#3949AB",
  },
  playerImage: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    marginBottom: 12,
    resizeMode: "cover",
  },
  playerName: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FF5252",
    marginBottom: 12,
  },
  playerInfo: {
    fontSize: 15,
    color: "#B3E5FC",
    lineHeight: 22,
    marginBottom: 12,
  },
  linkButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(33, 150, 243, 0.2)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  linkText: {
    color: "#2196F3",
    fontSize: 14,
    fontWeight: "600",
  },
  footer: {
    fontSize: 15,
    color: "#90CAF9",
    lineHeight: 22,
    marginTop: 10,
    textAlign: "center",
    fontStyle: "italic",
  },
});