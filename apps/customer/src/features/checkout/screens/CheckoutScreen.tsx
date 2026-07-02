import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { clearCart } from '../../cart/api';
import { createOrder } from '../api';

type Props = {
  token: string;
  onSuccess: (orderId: string) => void;
};

export function CheckoutScreen({ token, onSuccess }: Props) {
  const [deliveryAddressId, setDeliveryAddressId] = useState('');
  const [tipMinor, setTipMinor] = useState('0');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleCheckout() {
    if (!deliveryAddressId.trim()) {
      setMessage('Veuillez saisir une adresse de livraison.');
      return;
    }

    try {
      setLoading(true);
      setMessage('');

      const order = await createOrder(token, {
        deliveryAddressId,
        tipMinor: Number(tipMinor),
      });

      await clearCart(token);

      setMessage('Commande créée avec succès.');

      setTimeout(() => {
        onSuccess(order.id);
      }, 800);
    } catch (error) {
      console.error(error);
      setMessage('Impossible de créer la commande.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation de commande</Text>

      <Text style={styles.label}>Adresse de livraison</Text>
      <TextInput
        style={styles.input}
        placeholder="ID de l'adresse"
        value={deliveryAddressId}
        onChangeText={setDeliveryAddressId}
      />

      <Text style={styles.label}>Pourboire</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={tipMinor}
        onChangeText={setTipMinor}
      />

      {message ? <Text style={styles.message}>{message}</Text> : null}

      <TouchableOpacity
        style={styles.button}
        onPress={handleCheckout}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Création...' : 'Confirmer la commande'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 30, textAlign: 'center' },
  label: { fontWeight: '600', marginBottom: 6, marginTop: 12 },
  input: { borderWidth: 1, borderColor: '#d1d5db', borderRadius: 10, padding: 12 },
  message: { textAlign: 'center', marginTop: 18, color: '#16a34a', fontWeight: '700' },
  button: { marginTop: 30, backgroundColor: '#16a34a', padding: 16, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
