import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useCart } from '../hooks/useCart';

type Props = {
  token: string;
  onCheckout: () => void;
  onContinueShopping: () => void;
};

export function CartScreen({
  token,
  onCheckout,
  onContinueShopping,
}: Props) {
  const cart = useCart(token);
  const isEmpty = !cart.cart || cart.cart.items.length === 0;

  if (cart.loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#16a34a" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mon panier</Text>

      <TouchableOpacity style={styles.backButton} onPress={onContinueShopping}>
        <Text style={styles.backButtonText}>← Continuer les achats</Text>
      </TouchableOpacity>

      {isEmpty ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyTitle}>Votre panier est vide.</Text>
          <Text style={styles.emptyText}>
            Retournez au menu pour ajouter des articles.
          </Text>
        </View>
      ) : (
        <FlatList
          data={cart.cart?.items ?? []}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.menuItem?.name}</Text>

                <Text>
                  {item.unitPriceMinor / 100} {item.unitPriceCurrency}
                </Text>

                <Text>Quantité : {item.quantity}</Text>
              </View>

              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    cart.update(item.id, {
                      quantity: item.quantity + 1,
                    })
                  }
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    if (item.quantity > 1) {
                      cart.update(item.id, {
                        quantity: item.quantity - 1,
                      });
                    } else {
                      cart.remove(item.id);
                    }
                  }}
                >
                  <Text style={styles.buttonText}>−</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => cart.remove(item.id)}
                >
                  <Text style={styles.deleteText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}

      <View style={styles.footer}>
        <Text style={styles.total}>
          Sous-total : {(cart.cart?.subtotalMinor ?? 0) / 100} {cart.cart?.currency ?? 'USD'}
        </Text>

        {!isEmpty && (
          <TouchableOpacity style={styles.checkout} onPress={onCheckout}>
            <Text style={styles.checkoutText}>Passer la commande</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  title: { fontSize: 28, fontWeight: '700', marginBottom: 12 },

  backButton: {
    backgroundColor: '#e5e7eb',
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },

  backButtonText: {
    color: '#111827',
    fontWeight: '700',
  },

  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },

  emptyText: {
    color: '#6b7280',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  name: { fontSize: 18, fontWeight: '700', marginBottom: 6 },

  button: {
    backgroundColor: '#16a34a',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },

  buttonText: { color: '#fff', fontWeight: '700' },

  delete: {
    backgroundColor: '#dc2626',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  deleteText: { color: '#fff', fontSize: 12 },

  footer: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 16,
  },

  total: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },

  checkout: {
    backgroundColor: '#16a34a',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  checkoutText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});
