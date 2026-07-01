import { useEffect, useMemo, useState } from 'react';

import type {
  AddCartItemDto,
  CartDto,
  UpdateCartItemDto,
} from '@delivery-app/shared-types';

import {
  addToCart,
  clearCart,
  getCart,
  removeCartItem,
  updateCartItem,
} from '../api';

export function useCart(token: string) {
  const [cart, setCart] = useState<CartDto | null>(null);
  const [loading, setLoading] = useState(false);

  async function refresh() {
    setLoading(true);

    try {
      const data = await getCart(token);
      setCart(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  async function add(dto: AddCartItemDto) {
    await addToCart(token, dto);
    await refresh();
  }

  async function update(
    itemId: string,
    dto: UpdateCartItemDto,
  ) {
    await updateCartItem(token, itemId, dto);
    await refresh();
  }

  async function remove(itemId: string) {
    await removeCartItem(token, itemId);
    await refresh();
  }

  async function clear() {
    await clearCart(token);
    await refresh();
  }

  const totalItems = useMemo(() => {
    if (!cart) return 0;

    return cart.items.reduce(
      (sum, item) => sum + item.quantity,
      0,
    );
  }, [cart]);

  return {
    cart,
    loading,
    refresh,
    add,
    update,
    remove,
    clear,
    totalItems,
  };
}
