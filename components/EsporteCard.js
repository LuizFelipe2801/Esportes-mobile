import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';

export default function EsporteCard({ esporte, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: esporte.cor }]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      <Image
        source={{ uri: esporte.imagem }}
        style={styles.image}
        contentFit="cover"
        transition={400}
        placeholder={{ color: esporte.cor + '44' }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{esporte.nome}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{esporte.subtitulo}</Text>
        <View style={styles.statsRow}>
          <StatBadge icon="🌍" text={esporte.origem.split(',')[0]} />
          <StatBadge icon="👥" text={esporte.equipe} />
          <StatBadge icon="🏅" text={esporte.olimpiadas} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

function StatBadge({ icon, text }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeIcon}>{icon}</Text>
      <Text style={styles.badgeText} numberOfLines={1}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#0a1428',
    borderRadius: 14,
    marginBottom: 14,
    padding: 14,
    borderLeftWidth: 4,
    borderWidth: 1,
    borderColor: '#1a2a40',
    alignItems: 'center',
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 12,
    marginRight: 14,
    backgroundColor: '#1a2a40',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 12,
    color: '#7a9ec8',
    marginBottom: 10,
    lineHeight: 16,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a2a40',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeIcon: {
    fontSize: 10,
    marginRight: 3,
  },
  badgeText: {
    fontSize: 11,
    color: '#a8c8e8',
    maxWidth: 90,
  },
});
