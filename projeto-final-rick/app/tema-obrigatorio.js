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
  Platform,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const isWeb = Platform.OS === "web";

const zeRoberto = {
  uri:
    "https://www.otempo.com.br/adobe/dynamicmedia/deliver/dm-aid--d4b3d3f3-8392-4d4f-b0fd-51471e46182f/v-lei-z--roberto-guimar-es-v-lei-1723314387.jpg?quality=90&preferwebp=true&width=1200&height=630",
};

const bernardinho = {
  uri:
    "https://www.otempo.com.br/content/dam/otempo/editorias/blog%20do%20voloch/2025/6/11/blog%20do%20voloch-volei-1749639065.jpg",
};

export default function TemaObrigatorio() {
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
    >
      <Text style={styles.title}>
        TREINADORES LENDÁRIOS: O LEGADO DE ZÉ ROBERTO E BERNARDINHO
      </Text>

      <Text style={styles.paragraph}>
        Desde os primeiros passos do voleibol no Brasil, dois nomes se tornaram
        pilares do esporte: Zé Roberto Guimarães e Bernardo Rezende.
      </Text>
      <Text style={styles.paragraph}>
        Suas trajetórias atravessam décadas, conquistas e gerações, moldando não
        apenas equipes vencedoras, mas toda a identidade do vôlei brasileiro.
      </Text>

      <Text style={styles.paragraph}>
        Antes de escreverem seus nomes na história como treinadores,{" "}
        <Text style={styles.highlight}>ambos iniciaram suas carreiras como jogadores profissionais</Text>,
        vivendo dentro de quadra as emoções, vitórias e derrotas — experiências que
        mais tarde se tornariam a base de sua visão como técnicos.
      </Text>

      <Text style={styles.sectionTitle}>
        ZÉ ROBERTO GUIMARÃES — Arquiteto da Seleção Feminina
      </Text>

      <View style={styles.coachCard}>
        <Image source={zeRoberto} style={styles.coachImage} />
        <Text style={styles.coachName}>Zé Roberto Guimarães</Text>
        <Text style={styles.subtitle}>
          “O Professor” — mente tática do vôlei feminino
        </Text>
        <Text style={styles.coachInfo}>
          🇧🇷 <Text style={styles.highlight}>Brasil</Text> | 71 anos (nascido em 31/07/1954)
        </Text>

        <Text style={styles.paragraph}>
          Zé Roberto começou no vôlei como{" "}
          <Text style={styles.strongBlue}>levantador</Text>, atuando no tradicional
          <Text style={styles.highlight}> E.C. Sírio</Text> e no{" "}
          <Text style={styles.highlight}>Clube Pinheiros</Text>.  
          Sua vivência em quadra desenvolveu a leitura de jogo e a inteligência tática
          que se tornariam sua marca como treinador.
        </Text>

        <Text style={styles.coachDetail}>
          • <Text style={styles.strongBlue}>Ouro Olímpico — Barcelona 1992 (Seleção Masculina)</Text>{'\n'}
          • <Text style={styles.strongBlue}>Ouro Olímpico — Pequim 2008</Text>{'\n'}
          • <Text style={styles.strongBlue}>Ouro Olímpico — Londres 2012</Text>{'\n'}
          • <Text style={styles.strongBlue}>Prata Olímpica — Tóquio 2021</Text>{'\n'}
          • <Text style={styles.strongBlue}>Bronze Olímpico — Paris 2024</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão do Grand Prix — 2013</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão do Grand Prix — 2014</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão do Sul-Americano — várias edições</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão da Copa dos Campeões — 2013</Text>
        </Text>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://www.cbv.com.br")}
        >
          <Text style={styles.linkText}>🔍 Ver perfil oficial CBV</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>
        BERNARDINHO — O Maior Campeão da História do Vôlei
      </Text>

      <View style={styles.coachCard}>
        <Image source={bernardinho} style={styles.coachImage} />
        <Text style={styles.coachName}>Bernardo “Bernardinho” Rezende</Text>
        <Text style={styles.subtitle}>
          “O Magistrado” — Rei dos títulos e da motivação
        </Text>
        <Text style={styles.coachInfo}>
          🇧🇷 <Text style={styles.highlight}>Brasil</Text> | 66 anos (nascido em 25/08/1959)
        </Text>

        <Text style={styles.paragraph}>
          Antes da lenda como técnico, Bernardinho brilhou como{" "}
          <Text style={styles.strongBlue}>levantador da Seleção Brasileira</Text>,
          disputando Olimpíadas (1980 e 1984) e conquistando medalhas
          internacionais. Sua visão como armador foi essencial para sua
          filosofia como treinador.
        </Text>

        <Text style={styles.coachDetail}>
          • <Text style={styles.strongBlue}>Ouro Olímpico — Atenas 2004</Text>{'\n'}
          • <Text style={styles.strongBlue}>Prata Olímpica — Pequim 2008</Text>{'\n'}
          • <Text style={styles.strongBlue}>Prata Olímpica — Londres 2012</Text>{'\n'}
          • <Text style={styles.strongBlue}>Ouro Olímpico — Rio 2016</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão Mundial — 2002</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão Mundial — 2006</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão da Copa do Mundo — 2003</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão da Copa do Mundo — 2007</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão da Liga Mundial — 2001</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão da Liga Mundial — 2003</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão da Liga Mundial — 2004</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão da Liga Mundial — 2005</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão da Liga Mundial — 2006</Text>{'\n'}
          • <Text style={styles.strongBlue}>Campeão Pan-Americano — 2011</Text>
        </Text>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://www.cbv.com.br")}
        >
          <Text style={styles.linkText}>🔍 Ver perfil oficial CBV</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>
        Dois técnicos, duas histórias, um legado eterno no voleibol mundial.
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
    paddingBottom: Platform.select({ web: 60, default: 50 }),
    alignItems: Platform.select({ web: "center", default: "flex-start" }),
  },
  title: {
    fontSize: Platform.select({ web: 34, default: 28 }),
    fontWeight: "900",
    color: "#E3F2FD",
    textAlign: "center",
    marginBottom: Platform.select({ web: 28, default: 22 }),
    lineHeight: Platform.select({ web: 40, default: 34 }),
    maxWidth: Platform.select({ web: 800, default: "100%" }),
  },
  paragraph: {
    fontSize: Platform.select({ web: 18, default: 16 }),
    color: "#B3E5FC",
    lineHeight: Platform.select({ web: 26, default: 25 }),
    marginBottom: Platform.select({ web: 26, default: 22 }),
    textAlign: "center",
    maxWidth: Platform.select({ web: 750, default: "100%" }),
  },
  sectionTitle: {
    fontSize: Platform.select({ web: 26, default: 23 }),
    fontWeight: "800",
    color: "#2196F3",
    marginVertical: Platform.select({ web: 24, default: 18 }),
    textAlign: "center",
  },
  coachCard: {
    backgroundColor: "rgba(10, 26, 47, 0.85)",
    borderRadius: Platform.select({ web: 20, default: 18 }),
    padding: Platform.select({ web: 28, default: 22 }),
    marginBottom: Platform.select({ web: 32, default: 28 }),
    borderWidth: 1,
    borderColor: "#3949AB",
    width: Platform.select({ web: "80%", default: "100%" }),
    maxWidth: Platform.select({ web: 720, default: undefined }),
    ...Platform.select({
      web: {
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
      },
    }),
  },

  // 🔥 AQUI ESTÁ A ÚNICA ALTERAÇÃO IMPORTANTE
  coachImage: {
    width: "100%",
    height: Platform.select({ web: 340, default: 220 }),
    borderRadius: Platform.select({ web: 20, default: 16 }),
    marginBottom: Platform.select({ web: 18, default: 14 }),

    resizeMode: Platform.select({ web: "contain", default: "cover" }),
    objectFit: Platform.select({ web: "contain", default: "cover" }),
  },

  coachName: {
    fontSize: Platform.select({ web: 24, default: 22 }),
    fontWeight: "900",
    color: "#21D430",
    marginBottom: Platform.select({ web: 10, default: 6 }),
    textAlign: "center",
  },
  subtitle: {
    fontSize: Platform.select({ web: 18, default: 16 }),
    fontStyle: "italic",
    fontWeight: "600",
    color: "#81D4FA",
    marginBottom: Platform.select({ web: 14, default: 10 }),
    textAlign: "center",
  },
  coachInfo: {
    fontSize: Platform.select({ web: 16, default: 15 }),
    color: "#B3E5FC",
    textAlign: "center",
    marginBottom: Platform.select({ web: 18, default: 14 }),
    fontWeight: "600",
  },
  coachDetail: {
    fontSize: Platform.select({ web: 16, default: 15 }),
    color: "#BBDEFB",
    lineHeight: 22,
    marginBottom: Platform.select({ web: 18, default: 14 }),
    fontWeight: "400",
    textAlign: "center",
  },
  strongBlue: {
    color: "#2196F3",
    fontWeight: "900",
  },
  linkButton: {
    alignSelf: "center",
    backgroundColor: "rgba(33,150,243,0.25)",
    paddingHorizontal: Platform.select({ web: 18, default: 16 }),
    paddingVertical: Platform.select({ web: 10, default: 8 }),
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "rgba(33,150,243,0.4)",
    marginTop: Platform.select({ web: 12, default: 8 }),
    ...Platform.select({
      web: {
        cursor: "pointer",
      },
    }),
  },
  linkText: {
    color: "#BBDEFB",
    fontWeight: "700",
    fontSize: Platform.select({ web: 15, default: 14 }),
  },
  footer: {
    fontSize: Platform.select({ web: 17, default: 16 }),
    textAlign: "center",
    color: "#81D4FA",
    marginTop: Platform.select({ web: 24, default: 20 }),
    fontStyle: "italic",
    fontWeight: "600",
    maxWidth: Platform.select({ web: 700, default: "100%" }),
  },
  highlight: {
    color: "#2196F3",
    fontWeight: "700",
  },
});
