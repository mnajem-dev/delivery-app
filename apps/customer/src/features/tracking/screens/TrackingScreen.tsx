import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { createTrackingSocket, TrackingEvent } from '../api';

type Props = {
  orderId: string;
  onBackHome: () => void;
};

export function TrackingScreen({ orderId, onBackHome }: Props) {
  const [status, setStatus] = useState('Connexion au suivi...');
  const [position, setPosition] = useState<string>('Position non disponible');

  useEffect(() => {
    const socket = createTrackingSocket(orderId);

    socket.onopen = () => {
      setStatus('Suivi connecté');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data) as TrackingEvent;

      setStatus(data.status);

      if (data.driverLat && data.driverLng) {
        setPosition(`${data.driverLat}, ${data.driverLng}`);
      }
    };

    socket.onerror = () => {
      setStatus('Tracking pas encore disponible côté backend');
    };

    socket.onclose = () => {
      setStatus('Connexion tracking fermée');
    };

    return () => {
      socket.close();
    };
  }, [orderId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suivi de livraison</Text>

      <Text style={styles.label}>Commande</Text>
      <Text style={styles.value}>{orderId}</Text>

      <Text style={styles.label}>Statut</Text>
      <Text style={styles.value}>{status}</Text>

      <Text style={styles.label}>Position du livreur</Text>
      <Text style={styles.value}>{position}</Text>

      <TouchableOpacity style={styles.button} onPress={onBackHome}>
        <Text style={styles.buttonText}>Retour accueil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontWeight: '700',
    marginTop: 16,
    color: '#374151',
  },
  value: {
    marginTop: 6,
    fontSize: 16,
    color: '#111827',
  },
  button: {
    marginTop: 35,
    backgroundColor: '#16a34a',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
