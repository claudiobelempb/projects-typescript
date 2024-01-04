import { CartContext } from '@contexts/CartProvider';
import { useContext } from 'react';

export function useCart() {
  return useContext(CartContext);
}
