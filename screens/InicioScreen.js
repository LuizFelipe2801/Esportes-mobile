import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RINGS = [
  { color: '#0085C7' },
  { color: '#F4C300' },
  { color: '#1a1a1a' },
  { color: '#009F3D' },
  { color: '#DF0024' },
];

const STATS = [
  { icon: '🏅', value: '8', label: 'Esportes' },
  { icon: '🌍', value: '206', label: 'Países' },
  { icon: '🏟️', value: '33', label: 'Modalidades\nem Paris 2024' },
  { icon: '📅', value: '1896', label: 'Primeiro Jogos\nModernos' },
];

const DESTAQUES = [
  {
    cor: '#1a9e3a',
    emoji: '⚽',
    nome: 'Futebol',
    fato: 'Brasil: 5 títulos mundiais e único a participar de todas as Copas.',
  },
  {
    cor: '#0077cc',
    emoji: '🏊',
    nome: 'Natação',
    fato: 'Michael Phelps: 28 medalhas — mais que a maioria dos países.',
  },
  {
    cor: '#e63946',
    emoji: '🏃',
    nome: 'Atletismo',
    fato: 'Usain Bolt: 9,58s nos 100m — recorde mundial imbatível desde 2009.',
  },
  {
    cor: '#f5c518',
    emoji: '🏐',
    nome: 'Vôlei',
    fato: 'Brasil: 3 ouros olímpicos masculino e 2 feminino.',
  },
];

function StatCard({ icon, value, label }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function DestaqueCard({ item }) {
  return (
    <View style={[styles.destaqueCard, { borderLeftColor: item.cor }]}>
      <View style={styles.destaqueHeader}>
        <Text style={styles.destaqueEmoji}>{item.emoji}</Text>
        <Text style={[styles.destaqueName, { color: item.cor }]}>{item.nome}</Text>
      </View>
      <Text style={styles.destaqueFato}>{item.fato}</Text>
    </View>
  );
}

export default function InicioScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.hero}>
        <View style={styles.ringsRow}>
          {RINGS.map((r, i) => (
            <View key={i} style={[styles.ring, { borderColor: r.color }]} />
          ))}
        </View>
        <Text style={styles.heroTitle}>Jogos Olímpicos</Text>
        <Text style={styles.heroSub}>Citius · Altius · Fortius</Text>
        <Text style={styles.heroSub2}>Mais Rápido · Mais Alto · Mais Forte</Text>
      </View>

      <Text style={styles.sectionTitle}>Números Olímpicos</Text>
      <View style={styles.statsGrid}>
        {STATS.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Destaques do App</Text>
      {DESTAQUES.map((item, i) => (
        <DestaqueCard key={i} item={item} />
      ))}

      <View style={styles.trivia}>
        <Text style={styles.triviaTitle}>🔥 Você Sabia?</Text>
        <Text style={styles.triviaText}>
          A tocha olímpica percorre mais de{' '}
          <Text style={styles.triviaHighlight}>12.000 km</Text> antes de acender o
          caldeirão na cerimônia de abertura. Em Paris 2024, passou por mais de{' '}
          <Text style={styles.triviaHighlight}>400 cidades francesas</Text> antes de
          chegar ao Stade de France.
        </Text>
      </View>

      <View style={styles.trivia}>
        <Text style={styles.triviaTitle}>🥇 Brasil nas Olimpíadas</Text>
        <Text style={styles.triviaText}>
          O Brasil já conquistou{' '}
          <Text style={styles.triviaHighlight}>37 medalhas de ouro</Text> na história dos
          Jogos. Em Paris 2024, a delegação brasileira somou{' '}
          <Text style={styles.triviaHighlight}>3 ouros, 7 pratas e 10 bronzes</Text>.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050a14' },
  content: { padding: 16, paddingBottom: 40 },

  hero: { alignItems: 'center', paddingVertical: 28 },
  ringsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  ring: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 5,
    marginHorizontal: -6,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
    marginBottom: 6,
    textAlign: 'center',
  },
  heroSub: {
    fontSize: 13,
    color: '#f5c518',
    letterSpacing: 3,
    fontWeight: '600',
    textAlign: 'center',
  },
  heroSub2: {
    fontSize: 11,
    color: '#3a5a7a',
    letterSpacing: 1,
    marginTop: 4,
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#f5c518',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 12,
    marginTop: 4,
  },

  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: '#0a1428',
    borderRadius: 14,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a2a40',
    flex: 1,
    minWidth: '45%',
  },
  statIcon: { fontSize: 22, marginBottom: 6 },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f5c518',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: '#7a9ec8',
    textAlign: 'center',
    lineHeight: 15,
  },

  destaqueCard: {
    backgroundColor: '#0a1428',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1a2a40',
    borderLeftWidth: 4,
  },
  destaqueHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  destaqueEmoji: { fontSize: 20, marginRight: 10 },
  destaqueName: { fontSize: 16, fontWeight: 'bold' },
  destaqueFato: { fontSize: 13, color: '#a8c8e8', lineHeight: 20 },

  trivia: {
    backgroundColor: '#0a1428',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#1a2a40',
    borderLeftWidth: 4,
    borderLeftColor: '#f5c518',
    marginTop: 4,
  },
  triviaTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f5c518',
    marginBottom: 8,
  },
  triviaText: { fontSize: 13, color: '#a8c8e8', lineHeight: 21 },
  triviaHighlight: { color: '#ffffff', fontWeight: 'bold' },
});
