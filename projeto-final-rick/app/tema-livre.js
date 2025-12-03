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
  Platform,
  Dimensions,
} from "react-native";

const michieletto = require("./assets/players/mich.jpg");
const reggers = require("./assets/players/reggers.jpg");
const gabi = require("./assets/players/gabi.webp");
const antropova = require("./assets/players/antro.jpg");

const { width } = Dimensions.get("window");
const isWeb = Platform.OS === "web";

export default function TemaLivre() {
  const openLink = (url) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.content,
        { paddingHorizontal: isWeb ? Math.min(40, width * 0.1) : 20 }
      ]}
      showsVerticalScrollIndicator={false}
      bounces={false}
      nestedScrollEnabled={true}
    >
      <Text style={styles.title}>VOLEIBOL: O ESPORTE DA ALTURA, VELOCIDADE E UNIÃO</Text>

      <Text style={styles.paragraph}>
        Em 1895, numa academia da Associação Cristã de Moços (ACM) em Holyoke, Massachusetts, o professor de educação física William G. Morgan criou um esporte revolucionário. 
        Insatisfeito com a intensidade do basquete e buscando uma alternativa para homens mais velhos, ele combinou elementos do tênis (a rede), do handebol (o arremesso) e do badminton (o ritmo contínuo) — e assim nasceu o “mintonette”.
      </Text>

      <Text style={styles.paragraph}>
        Rapidamente, o nome foi trocado por “volley ball” (bola sobre a rede), e as regras se consolidaram: três toques por equipe, proibição de segurar a bola, e um jogo coletivo onde nenhum jogador pode dominar sozinho. 
        O esporte atravessou oceanos, ganhou as quadras do mundo e, em 1964, tornou-se parte dos Jogos Olímpicos em Tóquio. 
        Hoje, com mais de 800 milhões de praticantes em 220 países, o voleibol é símbolo de união, técnica e superação — um jogo onde o coletivo sempre vence o individual.
      </Text>

      <Text style={styles.paragraph}>
        O voleibol é um esporte global, dinâmico e coletivo, onde cada ponto é resultado de coordenação, técnica e espírito de equipe.
        Atualmente, duas seleções dominam o cenário internacional: a França no masculino e a Itália no feminino.
      </Text>

      <Text style={styles.sectionTitle}>CAMPEÕES MUNDIAIS E OLÍMPICOS (2024–2025)</Text>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: "#FF5252" }]}>Masculino</Text>
        <Text style={styles.cardText}>
          • <Text style={styles.bold}>Campeão Olímpico (Paris 2024): </Text><Text style={styles.highlight}>França</Text>{'\n'}
          • <Text style={styles.bold}>Campeão Mundial (2025): </Text><Text style={styles.highlight}>Itália</Text>{'\n'}
          • <Text style={styles.bold}>Vice-campeã Olímpica (2024): </Text><Text style={styles.highlight}>Polônia</Text>{'\n'}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={[styles.cardTitle, { color: "#42A5F5" }]}>Feminino</Text>
        <Text style={styles.cardText}>
          • <Text style={styles.bold}>Campeã Olímpica (Paris 2024): </Text><Text style={styles.highlight}>Itália</Text>{'\n'}
          • <Text style={styles.bold}>Campeã Mundial (2025): </Text><Text style={styles.highlight}>Itália</Text>{'\n'}
         • <Text style={styles.bold}>Vice-campeã Olímpica (2024): </Text><Text style={styles.highlight}>Estados Unidos</Text>{'\n'}
        </Text>
      </View>

      <Text style={styles.sectionTitle}>ATLETAS EM DESTAQUE</Text>

      {/* MICHIELETTO */}
      <View style={styles.playerCard}>
        <Image source={michieletto} style={styles.playerImage} />
        <Text style={styles.playerName}>Alessandro Michieletto</Text>
        <Text style={styles.playerInfo}>
          • <Text style={styles.bold}>Nacionalidade: </Text><Text style={styles.highlight}>Itália</Text>{'\n'}
          • <Text style={styles.bold}>Idade: </Text><Text style={styles.highlight}>23 anos</Text> (nascido em 05/12/2001){'\n'}
          • <Text style={styles.bold}>Altura: </Text><Text style={styles.highlight}>2,11 m</Text>{'\n'}
          • <Text style={styles.bold}>Clube atual: </Text><Text style={styles.highlight}>Itas Trentino</Text> (Itália){'\n'}
          • <Text style={styles.bold}>Posição: </Text><Text style={styles.highlight}>Ponteiro</Text>{'\n'}
          • <Text style={styles.bold}>Conquistas: </Text><Text style={styles.highlight}>Bi-Campeão Mundial pela Itália,</Text> <Text style={styles.highlight}>MVP Mundial 2025, Melhor Ponteiro VNL 2025, MVP A1 italiana 24/25.</Text>
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://www.volleynews.it/wp-content/uploads/2022/08/Alessandro-Michieletto-Italia.jpg")}
        >
          <Text style={styles.linkText}>Ver perfil oficial</Text>
        </TouchableOpacity>
      </View>

      {/* REGGERS */}
      <View style={styles.playerCard}>
        <Image source={reggers} style={styles.playerImage} />
        <Text style={styles.playerName}>Ferre Reggers</Text>
        <Text style={styles.playerInfo}>
          • <Text style={styles.bold}>Nacionalidade: </Text><Text style={styles.highlight}>Bélgica</Text>{'\n'}
          • <Text style={styles.bold}>Idade: </Text><Text style={styles.highlight}>22 anos</Text> (nascido em 18/07/2003){'\n'}
          • <Text style={styles.bold}>Altura: </Text><Text style={styles.highlight}>2,02 m</Text>{'\n'}
          • <Text style={styles.bold}>Clube atual: </Text><Text style={styles.highlight}>Allianz Milano</Text> (Itália){'\n'}
          • <Text style={styles.bold}>Posição: </Text><Text style={styles.highlight}>Oposto</Text>{'\n'}
          • <Text style={styles.bold}>Conquistas: </Text><Text style={styles.highlight}>Bronze Europeu U21 2020,</Text> <Text style={styles.highlight}>Melhor Oposto do Europeu 2020.</Text>
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://images.hln.be/ODUwYjk4NTk3NjQwZDNmYmEyOGEvZGlvLzI2MjU4NzI0OC9maWxsLzEzNDkvOTAwL2ZlcnJlLXJlZ2dlcnM=")}
        >
          <Text style={styles.linkText}>Ver perfil oficial</Text>
        </TouchableOpacity>
      </View>

      {/* GABI */}
      <View style={styles.playerCard}>
        <Image source={gabi} style={styles.playerImage} />
        <Text style={styles.playerName}>Gabi Guimarães</Text>
        <Text style={styles.playerInfo}>
          • <Text style={styles.bold}>Nacionalidade: </Text><Text style={styles.highlight}>Brasil</Text>{'\n'}
          • <Text style={styles.bold}>Idade: </Text><Text style={styles.highlight}>31 anos</Text> (nascida em 19/05/1994){'\n'}
          • <Text style={styles.bold}>Altura: </Text><Text style={styles.highlight}>1,80 m</Text>{'\n'}
          • <Text style={styles.bold}>Clube atual: </Text><Text style={styles.highlight}>Imoco Conegliano</Text>{'\n'}
          • <Text style={styles.bold}>Posição: </Text><Text style={styles.highlight}>Ponteira</Text>{'\n'}
           • <Text style={styles.bold}>Conquistas: </Text><Text style={styles.highlight}>Vice-campeã Olímpica Tóquio 2021, Medalhista de Bronze Paris 2024,</Text> <Text style={styles.highlight}>Melhor Ponteira do Campeonato Mundial 2025, Melhor Ponteira da VNL 2025, Melhor Ponteira das Olimpíadas de Paris 2024, MVP da Série A1 italiana 2024/25.</Text>
           </Text>
           <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://midianinja.org/wp-content/uploads/2024/07/Foto_-FIBV-1-jpg.webp")}
        >
          <Text style={styles.linkText}>Ver perfil oficial</Text>
        </TouchableOpacity>
      </View>

      {/* ANTROPOVA */}
      <View style={styles.playerCard}>
        <Image source={antropova} style={styles.playerImage} />
        <Text style={styles.playerName}>Ekaterina Antropova</Text>
        <Text style={styles.playerInfo}>
          • <Text style={styles.bold}>Nacionalidade: </Text><Text style={styles.highlight}>Itália/Rússia/Islândia</Text>{'\n'}
          • <Text style={styles.bold}>Idade: </Text><Text style={styles.highlight}>22 anos</Text> (nascida em 19/03/2003){'\n'}
          • <Text style={styles.bold}>Altura: </Text><Text style={styles.highlight}>2,02 m</Text>{'\n'}
          • <Text style={styles.bold}>Clube atual: </Text><Text style={styles.highlight}>Scandicci</Text>{'\n'}
          • <Text style={styles.bold}>Posição: </Text><Text style={styles.highlight}>Oposta</Text>{'\n'}
           • <Text style={styles.bold}>Conquistas: </Text><Text style={styles.highlight}>Campeã Olímpica em Paris 2024, Campeã VNL 2025, Campeã Mundial 2025,</Text> <Text style={styles.highlight}>Melhor sacadora Liga dos Campeões 2024/25, Melhor pontuadora Série A1 italiana 2024/25, Melhor sacadora Série A1 italiana 2024/25.</Text>
        </Text>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://img.nsctotal.com.br/wp-content/uploads/2025/07/Antropova-4.jpg")}
        >
          <Text style={styles.linkText}>Ver perfil oficial</Text>
        </TouchableOpacity>
      </View>

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
    paddingVertical: Platform.select({ web: 40, default: 20 }),
    paddingBottom: Platform.select({ web: 60, default: 40 }),
    alignItems: Platform.select({ web: "center", default: "flex-start" }),
  },
  title: {
    fontSize: Platform.select({ web: 32, default: 26 }),
    fontWeight: "900",
    color: "#E3F2FD",
    textAlign: "center",
    marginBottom: Platform.select({ web: 28, default: 20 }),
    lineHeight: Platform.select({ web: 38, default: 32 }),
    maxWidth: Platform.select({ web: 800, default: "100%" }),
  },
  paragraph: {
    fontSize: Platform.select({ web: 18, default: 16 }),
    color: "#B3E5FC",
    lineHeight: Platform.select({ web: 26, default: 24 }),
    marginBottom: Platform.select({ web: 28, default: 24 }),
    textAlign: "center",
    maxWidth: Platform.select({ web: 800, default: "100%" }),
  },
  sectionTitle: {
    fontSize: Platform.select({ web: 26, default: 22 }),
    fontWeight: "800",
    color: "#2196F3",
    marginBottom: Platform.select({ web: 22, default: 16 }),
    marginTop: Platform.select({ web: 28, default: 20 }),
    textAlign: "center",
  },
  card: {
    backgroundColor: "rgba(33, 150, 243, 0.08)",
    borderRadius: 14,
    padding: Platform.select({ web: 22, default: 18 }),
    marginBottom: Platform.select({ web: 24, default: 20 }),
    borderColor: "#2196F3",
    borderWidth: 1,
    width: Platform.select({ web: "80%", default: "100%" }),
    maxWidth: Platform.select({ web: 600, default: undefined }),
    ...Platform.select({
      web: {
        boxShadow: "0 6px 16px rgba(33, 150, 243, 0.2)",
      },
    }),
  },
  cardTitle: {
    fontSize: Platform.select({ web: 22, default: 19 }),
    fontWeight: "800",
    marginBottom: 8,
  },
  cardText: {
    fontSize: Platform.select({ web: 16, default: 15 }),
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

  /* ✔ CORREÇÃO DAS IMAGENS AQUI */
  playerImage: {
    width: "100%",
    height: Platform.select({ web: 350, default: 220 }),
    borderRadius: Platform.select({ web: 20, default: 16 }),
    marginBottom: Platform.select({ web: 16, default: 12 }),

    /* NO MOBILE: COVER (igual estava)
       NO WEB: CONTAIN (pra mostrar o rosto sem cortar) */
    resizeMode: Platform.select({ web: "contain", default: "cover" }),
    backgroundColor: "#000",
  },

  playerCard: {
    backgroundColor: "rgba(10, 26, 47, 0.7)",
    borderRadius: Platform.select({ web: 20, default: 16 }),
    padding: Platform.select({ web: 28, default: 20 }),
    marginBottom: Platform.select({ web: 30, default: 22 }),
    borderWidth: 1,
    borderColor: "#3949AB",
    width: Platform.select({ web: "80%", default: "100%" }),
    maxWidth: Platform.select({ web: 700, default: undefined }),
    ...Platform.select({
      web: {
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.35)",
      },
    }),
  },

  playerName: {
    fontSize: Platform.select({ web: 24, default: 20 }),
    fontWeight: "800",
    color: "#FF5252",
    marginBottom: Platform.select({ web: 14, default: 12 }),
  },
  playerInfo: {
    fontSize: Platform.select({ web: 16, default: 15 }),
    color: "#B3E5FC",
    lineHeight: Platform.select({ web: 24, default: 22 }),
    marginBottom: Platform.select({ web: 14, default: 12 }),
  },
  linkButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(33, 150, 243, 0.2)",
    paddingHorizontal: Platform.select({ web: 16, default: 14 }),
    paddingVertical: Platform.select({ web: 8, default: 6 }),
    borderRadius: 20,
    ...Platform.select({
      web: {
        cursor: "pointer",
      },
    }),
  },
  linkText: {
    color: "#2196F3",
    fontSize: Platform.select({ web: 15, default: 14 }),
    fontWeight: "600",
  },
  footer: {
    fontSize: Platform.select({ web: 16, default: 15 }),
    color: "#90CAF9",
    lineHeight: Platform.select({ web: 24, default: 22 }),
    marginTop: Platform.select({ web: 20, default: 10 }),
    textAlign: "center",
    fontStyle: "italic",
    maxWidth: Platform.select({ web: 700, default: "100%" }),
  },
});
