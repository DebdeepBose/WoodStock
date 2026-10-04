import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  items: [],
  cartGrandTotal: 0,
  isCartOpen: false,


  addToCart: (item) => {
    set((state) => {
      const existingProduct = state.items.some(
        (product) => product.id === item.id
      );
      if (!existingProduct) {
        return {
          items: [...state.items, item],
        };
      }

      return state;
    });
  },

  clearCart: () =>
    set((state) => ({
      items: [],
      cartGrandTotal: 0,
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => {
        return item.id !== id;
      }),
    })),
  
  setCartGrandTotal: (price) =>
    set((state) => ({
      cartGrandTotal: price,
    })),
  increaseCartGrandTotal: (price) =>
    set((state) => ({
      cartGrandTotal: state.cartGrandTotal + price,
    })),
  decreaseCartGrandTotal: (price) =>
    set((state) => ({ cartGrandTotal: state.cartGrandTotal - price })),
  openCart: () => {
    set((set) => ({
      isCartOpen: true,
    })),
      (document.body.style.overflow = "hidden"); 
  },

  closeCart: () => {
    set((set) => ({
      isCartOpen: false,
    })),
      (document.body.style.overflow = ""); 
  },
});

export const useCartStore = create(
  persist(devtools(store), { name: "cartStore" })
);
