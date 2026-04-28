import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import esportes from '../data/esportes.json';
import EsporteCard from '../components/EsporteCard';
import EsporteModal from '../components/EsporteModal';

export default function HomeScreen() {
  const [selectedEsporte, setSelectedEsporte] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.hint}>Toque em um esporte para explorar</Text>
      <FlatList
        data={esportes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EsporteCard esporte={item} onPress={() => setSelectedEsporte(item)} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      {selectedEsporte && (
        <EsporteModal esporte={selectedEsporte} onClose={() => setSelectedEsporte(null)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050a14',
  },
  hint: {
    color: '#f5c518',
    textAlign: 'center',
    fontSize: 13,
    paddingVertical: 10,
    letterSpacing: 0.5,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
});
