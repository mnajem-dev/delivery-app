import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { useAuth } from '../features/auth/hooks/useAuth';
import { LoginScreen } from '../features/auth/screens/LoginScreen';
import { RegisterScreen } from '../features/auth/screens/RegisterScreen';

import { RestaurantsScreen } from '../features/browse/screens/RestaurantsScreen';
import { RestaurantDetailsScreen } from '../features/browse/screens/RestaurantDetailsScreen';

import { CartScreen } from '../features/cart/screens/CartScreen';
import { CheckoutScreen } from '../features/checkout/screens/CheckoutScreen';
import { TrackingScreen } from '../features/tracking/screens/TrackingScreen';

type Screen =
  | 'login'
  | 'register'
  | 'restaurants'
  | 'details'
  | 'cart'
  | 'checkout'
  | 'tracking';

export default function App() {
  const auth = useAuth();

  const [screen, setScreen] = useState<Screen>('login');
  const [selectedVendor, setSelectedVendor] = useState('');
  const [currentOrder, setCurrentOrder] = useState('');

  if (auth.initializing) {
    return null;
  }

  if (!auth.user) {
    if (screen === 'register') {
      return (
        <>
          <RegisterScreen
            auth={auth}
            onGoToLogin={() => setScreen('login')}
          />
          <StatusBar style="auto" />
        </>
      );
    }

    return (
      <>
        <LoginScreen
          auth={auth}
          onGoToRegister={() => setScreen('register')}
        />
        <StatusBar style="auto" />
      </>
    );
  }

  if (screen === 'restaurants') {
    return (
      <>
        <RestaurantsScreen
          token={auth.token!}
          onLogout={auth.logout}
          onSelectRestaurant={(id) => {
            setSelectedVendor(id);
            setScreen('details');
          }}
        />
        <StatusBar style="auto" />
      </>
    );
  }

  if (screen === 'details') {
    return (
      <>
 <RestaurantDetailsScreen
  token={auth.token!}
  vendorId={selectedVendor}
  onBackToRestaurants={() => setScreen('restaurants')}
  onAddToCart={async (item) => {
    const api = await import('../features/cart/api');

    await api.addToCart(auth.token!, {
      menuItemId: item.id,
      quantity: 1,
      options: {},
    });

    setScreen('cart');
  }}
/>
        <StatusBar style="auto" />
      </>
    );
  }

  if (screen === 'cart') {
    return (
      <>
 <CartScreen
  token={auth.token!}
  onCheckout={() => setScreen('checkout')}
  onContinueShopping={() => setScreen('details')}
/>
        <StatusBar style="auto" />
      </>
    );
  }

  if (screen === 'checkout') {
    return (
      <>
        <CheckoutScreen
          token={auth.token!}
          onSuccess={(orderId) => {
            setCurrentOrder(orderId);
            setScreen('tracking');
          }}
        />
        <StatusBar style="auto" />
      </>
    );
  }

  if (screen === 'tracking') {
    return (
      <>
        <TrackingScreen
          orderId={currentOrder}
          onBackHome={() => setScreen('restaurants')}
        />
        <StatusBar style="auto" />
      </>
    );
  }

  return (
    <>
      <RestaurantsScreen
        token={auth.token!}
        onLogout={auth.logout}
        onSelectRestaurant={(id) => {
          setSelectedVendor(id);
          setScreen('details');
        }}
      />
      <StatusBar style="auto" />
    </>
  );
}
