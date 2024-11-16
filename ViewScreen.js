import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ViewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visualizar Documentos</Text>
      <Button title="Voltar para Upload" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
