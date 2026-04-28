import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function InfoRow({ label, value }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

function TechBadge({ name }) {
  return (
    <View style={styles.techBadge}>
      <Text style={styles.techBadgeText}>{name}</Text>
    </View>
  );
}

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerEmoji}>🏅</Text>
        <Text style={styles.appName}>Esportes Olímpicos</Text>
        <Text style={styles.version}>Versão 1.0.0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏟️  Sobre o Aplicativo</Text>
        <Text style={styles.cardText}>
          Aplicativo educacional sobre os 8 esportes olímpicos mais populares do mundo.
          Explore a história, curiosidades e dados de cada modalidade, incluindo recordes
          e atletas que marcaram os Jogos Olímpicos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎓  Informações Acadêmicas</Text>
        <InfoRow label="Disciplina" value="Desenvolvimento Mobile" />
        <InfoRow label="Instituição" value="PUC" />
        <InfoRow label="Plataforma" value="React Native / Expo" />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🛠  Tecnologias Utilizadas</Text>
        <View style={styles.badgesWrap}>
          <TechBadge name="React Native" />
          <TechBadge name="Expo SDK 54" />
          <TechBadge name="React Navigation" />
          <TechBadge name="expo-image" />
          <TechBadge name="JSON" />
          <TechBadge name="JavaScript" />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚡  Funcionalidades</Text>
        <Text style={styles.listItem}>• Splash screen com anéis olímpicos animados</Text>
        <Text style={styles.listItem}>• Navegação por abas (Bottom Tabs)</Text>
        <Text style={styles.listItem}>• Lista de esportes com imagens reais</Text>
        <Text style={styles.listItem}>• Detalhes completos de cada modalidade</Text>
        <Text style={styles.listItem}>• Dados carregados de arquivo JSON</Text>
        <Text style={styles.listItem}>• Curiosidades e recordes olímpicos</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📚  Fontes dos Dados</Text>
        <Text style={styles.cardText}>• Comitê Olímpico Internacional (COI)</Text>
        <Text style={styles.cardText}>• Wikimedia Commons (imagens)</Text>
        <Text style={styles.cardText}>• Wikipedia — Esportes Olímpicos</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Feito com ♥ para a PUC</Text>
        <Text style={styles.footerSub}>React Native + Expo Go</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050a14' },
  content: { padding: 16, paddingBottom: 40 },
  header: { alignItems: 'center', paddingVertical: 28 },
  headerEmoji: { fontSize: 72, marginBottom: 14 },
  appName: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', marginBottom: 6, textAlign: 'center' },
  version: { fontSize: 14, color: '#f5c518', letterSpacing: 1 },
  card: {
    backgroundColor: '#0a1428',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1a2a40',
  },
  cardTitle: { fontSize: 15, fontWeight: 'bold', color: '#f5c518', marginBottom: 14, letterSpacing: 0.5 },
  cardText: { fontSize: 14, color: '#a8c8e8', lineHeight: 22, marginBottom: 4 },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#1a2a40',
  },
  infoLabel: { fontSize: 14, color: '#7a9ec8' },
  infoValue: { fontSize: 14, color: '#ffffff', fontWeight: '500' },
  badgesWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  techBadge: {
    backgroundColor: '#1a2a40',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#f5c518',
  },
  techBadgeText: { color: '#f5c518', fontSize: 12, fontWeight: '600' },
  listItem: { fontSize: 14, color: '#a8c8e8', lineHeight: 26 },
  footer: { alignItems: 'center', marginTop: 8, paddingVertical: 16 },
  footerText: { color: '#f5c518', fontSize: 15, fontWeight: '600' },
  footerSub: { color: '#2a4a6a', fontSize: 12, marginTop: 4 },
});
