import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createApiClient } from '@delivery-app/api-client';

type HealthResponse = {
  status: string;
};

const api = createApiClient('http://localhost:3000');

export default function App() {
  const [message, setMessage] = useState('Checking /health...');

  useEffect(() => {
    api
      .get<HealthResponse>('/health')
      .then((data) => setMessage(`Health: ${data.status}`))
      .catch((error: Error) => setMessage(`Error: ${error.message}`));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery Customer</Text>
      <Text style={styles.message}>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});
