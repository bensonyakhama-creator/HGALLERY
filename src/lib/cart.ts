import { create } from "zustand";

type CartItem = {
  productId: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  add: (productId: string, quantity?: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
};

export const useCart = create<CartStore>((set) => ({
  items: [],

  add: (productId, quantity = 1) =>
    set((state) => {
      const existing = state.items.find((item) => item.productId === productId);

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        };
      }

      return {
        items: [...state.items, { productId, quantity }],
      };
    }),

  remove: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId),
    })),

  clear: () => set({ items: [] }),
}));
