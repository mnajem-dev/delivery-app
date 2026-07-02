import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import type { VendorSummaryDto } from '@delivery-app/shared-types';
import { getRestaurants } from '../api';

type Props = {
  token: string;
  onSelectRestaurant: (vendorId: string) => void;
  onLogout: () => void;
};

export function RestaurantsScreen({
  token,
  onSelectRestaurant,
  onLogout,
}: Props) {
  const [restaurants, setRestaurants] = useState<VendorSummaryDto[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  async function loadRestaurants(query?: string) {
    try {
      setLoading(true);
      const data = await getRestaurants(token, { search: query });
      setRestaurants(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRestaurants();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#16a34a" />
        <Text>Chargement des restaurants...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Restaurants</Text>

        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Rechercher..."
        value={search}
        onChangeText={(text) => {
          setSearch(text);
          loadRestaurants(text);
        }}
      />

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => onSelectRestaurant(item.userId)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
            <Text style={styles.info}>
              ⭐ {item.rating} • {item.deliveryRadius} km
            </Text>

            {item.etaMinutes !== undefined && (
              <Text style={styles.eta}>
                Livraison estimée : {item.etaMinutes} min
              </Text>
            )}
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Aucun restaurant trouvé.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: { fontSize: 28, fontWeight: '700', marginBottom: 15 },

  logoutButton: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },

  logoutText: { color: '#fff', fontWeight: '700' },

  search: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  name: { fontSize: 18, fontWeight: '700' },
  address: { marginTop: 4, color: '#666' },
  info: { marginTop: 6, color: '#444' },
  eta: { marginTop: 4, color: '#16a34a', fontWeight: '600' },
  empty: { textAlign: 'center', marginTop: 40, color: '#888' },
});
