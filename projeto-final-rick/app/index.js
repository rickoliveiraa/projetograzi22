import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>
        <Text style={styles.subtitle}>Bem-vindo ao aplicativo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faececff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 36,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
  }
});
