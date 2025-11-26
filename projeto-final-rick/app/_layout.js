// app/_layout.js — versão SEM precisar de arquivos de imagem

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text } from "react-native";

// Importe as telas com os nomes corretos (hífen)
import Index from "./index";
import TemaLivre from "./tema-livre"; // ✅ nome do arquivo: tema-livre.js

const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0A1A2F",
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#2196F3",
        tabBarInactiveTintColor: "#BBDEFB",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="index"
        component={Index}
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 4,
                backgroundColor: color,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#0A1A2F", fontWeight: "bold", fontSize: 12 }}>
                I
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="tema-livre" // ✅ nome exato do arquivo (sem .js)
        component={TemaLivre}
        options={{
          title: "Tema Livre",
          tabBarIcon: ({ color }) => (
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 4,
                backgroundColor: color,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "#0A1A2F", fontWeight: "bold", fontSize: 10 }}>
                TL
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}