import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type {
  MenuItemDto,
  VendorDetailDto,
} from '@delivery-app/shared-types';

import {
  getRestaurantDetails,
  getRestaurantMenu,
} from '../api';

type Props = {
  token: string;
  vendorId: string;
  onAddToCart: (item: MenuItemDto) => void;
  onBackToRestaurants: () => void;
};

export function RestaurantDetailsScreen({
  token,
  vendorId,
  onAddToCart,
  onBackToRestaurants,
}: Props) {
  const [vendor, setVendor] = useState<VendorDetailDto | null>(null);
  const [menu, setMenu] = useState<MenuItemDto[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadRestaurant() {
    try {
      setLoading(true);

      const details = await getRestaurantDetails(token, vendorId);
      const items = await getRestaurantMenu(token, vendorId);

      setVendor(details);
      setMenu(items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadRestaurant();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#16a34a" />
      </View>
    );
  }

  if (!vendor) {
    return (
      <View style={styles.center}>
        <Text>Restaurant introuvable.</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={menu}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBackToRestaurants}
          >
            <Text style={styles.backButtonText}>← Retour aux restaurants</Text>
          </TouchableOpacity>

          <Text style={styles.title}>{vendor.name}</Text>
          <Text style={styles.address}>{vendor.address}</Text>
          <Text style={styles.info}>⭐ {vendor.rating}</Text>
          <Text style={styles.menuTitle}>Menu</Text>
        </>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.category}>{item.category}</Text>

          <Text style={styles.price}>
            {item.priceMinor / 100} {item.priceCurrency}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onAddToCart(item)}
          >
            <Text style={styles.buttonText}>Ajouter au panier</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

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

  title: {
    fontSize: 28,
    fontWeight: '700',
  },

  address: {
    marginTop: 6,
    color: '#666',
  },

  info: {
    marginTop: 6,
    marginBottom: 20,
  },

  menuTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
  },

  category: {
    color: '#666',
    marginTop: 4,
  },

  price: {
    marginTop: 8,
    fontWeight: '700',
  },

  button: {
    marginTop: 12,
    backgroundColor: '#16a34a',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
