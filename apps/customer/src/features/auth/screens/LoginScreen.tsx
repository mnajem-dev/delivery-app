import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import type { useAuth } from '../hooks/useAuth';

type Props = {
  auth: ReturnType<typeof useAuth>;
  onGoToRegister: () => void;
};

export function LoginScreen({ auth, onGoToRegister }: Props) {
  const [email, setEmail] = useState('maya@example.com');
  const [password, setPassword] = useState('password123');

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>IDER</Text>
      <Text style={styles.title}>Connexion client</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {auth.error ? <Text style={styles.error}>{auth.error}</Text> : null}

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => auth.login(email, password)}
        disabled={auth.loading}
      >
        {auth.loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.primaryButtonText}>Se connecter</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton} onPress={onGoToRegister}>
        <Text style={styles.secondaryButtonText}>Créer un compte client</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center',
    color: '#16a34a',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 24,
    color: '#111827',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#f9fafb',
  },
  error: {
    color: '#dc2626',
    marginBottom: 12,
    textAlign: 'center',
  },
  primaryButton: {
    backgroundColor: '#16a34a',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 4,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryButton: {
    padding: 14,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#16a34a',
    fontWeight: '600',
  },
});
