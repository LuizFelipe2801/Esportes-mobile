import React from 'react';
import {
  View, Text, StyleSheet, Modal, ScrollView,
  TouchableOpacity, SafeAreaView,
} from 'react-native';
import { Image } from 'expo-image';

function StatCard({ icon, label, value }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

export default function EsporteModal({ esporte, onClose }) {
  return (
    <Modal visible animationType="slide" onRequestClose={onClose} statusBarTranslucent>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={{ uri: esporte.imagem }}
            style={styles.image}
            contentFit="cover"
            transition={400}
            placeholder={{ color: esporte.cor + '44' }}
          />

          <View style={styles.headerRow}>
            <View style={[styles.colorDot, { backgroundColor: esporte.cor }]} />
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{esporte.nome}</Text>
              <Text style={styles.subtitle}>{esporte.subtitulo}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Sobre</Text>
            <Text style={styles.description}>{esporte.descricao}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Dados</Text>
            <View style={styles.statsGrid}>
              <StatCard icon="🌍" label="Origem" value={esporte.origem} />
              <StatCard icon="👥" label="Equipe" value={esporte.equipe} />
              <StatCard icon="⏱️" label="Duração" value={esporte.duracao} />
              <StatCard icon="🏅" label="Olímpico" value={esporte.olimpiadas} />
            </View>
          </View>

          <View style={styles.curiosityBox}>
            <Text style={styles.curiosityTitle}>🏆 Você sabia?</Text>
            <Text style={styles.curiosityText}>{esporte.curiosidade}</Text>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={onClose} activeOpacity={0.8}>
            <Text style={styles.closeButtonText}>← Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050a14',
  },
  image: {
    width: '100%',
    height: 260,
    backgroundColor: '#0a1428',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 4,
  },
  colorDot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 14,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: 14,
    color: '#7a9ec8',
    marginTop: 3,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#f5c518',
    marginBottom: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  description: {
    fontSize: 15,
    color: '#a8c8e8',
    lineHeight: 26,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  statCard: {
    backgroundColor: '#0a1428',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1a2a40',
    flex: 1,
    minWidth: '45%',
  },
  statIcon: {
    fontSize: 22,
    marginBottom: 6,
  },
  statValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: '#7a9ec8',
    textAlign: 'center',
  },
  curiosityBox: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#0a1428',
    borderRadius: 14,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#f5c518',
  },
  curiosityTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f5c518',
    marginBottom: 8,
  },
  curiosityText: {
    fontSize: 14,
    color: '#a8c8e8',
    lineHeight: 22,
  },
  closeButton: {
    marginHorizontal: 16,
    marginBottom: 32,
    backgroundColor: '#f5c518',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#050a14',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
