// app/_layout.js

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Text, Platform, Dimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Importe todas as telas
import Index from "./index";
import TemaLivre from "./tema-livre";
import TemaObrigatorio from "./tema-obrigatorio";
import SobreMim from "./sobre-mim";

const Tab = createBottomTabNavigator();
const { height } = Dimensions.get("window");
const isWeb = Platform.OS === "web";

// Ajuste responsivo para web
const tabBarHeight = isWeb ? 64 : 60;
const paddingBottom = isWeb ? 12 : 8;

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#0A1A2F" }}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: "#0A1A2F",
              borderTopWidth: 0,
              height: tabBarHeight,
              paddingBottom: paddingBottom,
              // Evita sobreposição em navegadores web
              ...Platform.select({
                web: {
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                },
              }),
            },
            tabBarActiveTintColor: "#2196F3",
            tabBarInactiveTintColor: "#BBDEFB",
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "600",
            },
          }}
        >
          {/* Aba: Início */}
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

          {/* Aba: Tema Livre */}
          <Tab.Screen
            name="tema-livre"
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

          {/* Aba: Tema Obrigatório */}
          <Tab.Screen
            name="tema-obrigatorio"
            component={TemaObrigatorio}
            options={{
              title: "Tema Obrigatório",
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
                    TO
                  </Text>
                </View>
              ),
            }}
          />

          {/* Aba: Sobre Mim */}
          <Tab.Screen
            name="sobre-mim"
            component={SobreMim}
            options={{
              title: "Sobre Mim",
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
                    SM
                  </Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}