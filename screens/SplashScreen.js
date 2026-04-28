import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';

const { width: W, height: H } = Dimensions.get('window');

const RINGS = [
  { top: 0.15, left: 0.08, color: '#0085C7' },
  { top: 0.15, left: 0.28, color: '#F4C300' },
  { top: 0.15, left: 0.48, color: '#000000' },
  { top: 0.15, left: 0.68, color: '#009F3D' },
  { top: 0.15, left: 0.88, color: '#DF0024' },
];

const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  top: ((i * 47 + 23) % 100) / 100 * H,
  left: ((i * 61 + 7) % 100) / 100 * W,
  size: (i % 3) + 1,
  opacity: ((i % 4) + 2) / 10,
}));

export default function SplashScreen({ onFinish }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.3)).current;
  const titleFade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 900, useNativeDriver: true }),
        Animated.spring(scaleAnim, { toValue: 1, tension: 40, friction: 6, useNativeDriver: true }),
      ]),
      Animated.timing(titleFade, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.delay(1800),
      Animated.timing(fadeAnim, { toValue: 0, duration: 600, useNativeDriver: true }),
    ]).start(() => onFinish());
  }, []);

  return (
    <View style={styles.container}>
      {STARS.map((s) => (
        <View key={s.id} style={[styles.star, { top: s.top, left: s.left, width: s.size, height: s.size, opacity: s.opacity }]} />
      ))}

      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Animated.Text style={[styles.emoji, { transform: [{ scale: scaleAnim }] }]}>
          🏅
        </Animated.Text>

        <Animated.View style={{ opacity: titleFade, alignItems: 'center' }}>
          <Text style={styles.title}>Esportes</Text>
          <Text style={styles.titleGold}>Olímpicos</Text>
          <Text style={styles.subtitle}>Conheça os esportes que emocionam o mundo</Text>
          <View style={styles.ringsRow}>
            {RINGS.map((r, i) => (
              <View
                key={i}
                style={[
                  styles.ring,
                  { borderColor: r.color === '#000000' ? '#ffffff' : r.color },
                  i > 0 && { marginLeft: -8 },
                ]}
              />
            ))}
          </View>
          <Text style={styles.credits}>PUC • Desenvolvimento Mobile</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050a14',
    alignItems: 'center',
    justifyContent: 'center',
  },
  star: {
    position: 'absolute',
    backgroundColor: '#f5c518',
    borderRadius: 10,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emoji: {
    fontSize: 90,
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 3,
  },
  titleGold: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#f5c518',
    letterSpacing: 3,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#7a9ec8',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  ringsRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  ring: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 3,
    backgroundColor: 'transparent',
  },
  credits: {
    fontSize: 13,
    color: '#f5c518',
    letterSpacing: 1,
  },
});
