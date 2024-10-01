
import toast  from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type Product ={
    id:number;
    name:string;
    price:number;
    image:string;
    quantity: number;
}

interface CartStore {
    items: Product[]
    addItem: (data: Product) => void;
    removeItem: (id:number)=> void;
    removeAll: ()=> void;
    updateQuantity: (qty:number, id:number)=> void;
}

export const useCart = create(
    persist<CartStore>((set, get)=> ({
items: [],
addItem: (data: Product)=> {
    const currentItems = get().items;
    const existingItem = currentItems.find((item)=> item.id === data.id)

    if(existingItem){
        return toast("Item already in cart")
    }

    const cartItem = {
        id: data.id,
        name: data.name,
        image:data.image,
        price: data.price,
        quantity: 1
    }

    set({items: [...get().items, cartItem]});
    toast.success("Item added to cart")
},

removeItem:(id:number)=> {
    set({items: [...get().items.filter((item)=> item.id !== id)]})
},

removeAll:()=> set({items:[]}),
updateQuantity: (qty: number, id: number) => {
    const currentItems = get().items;
    const itemToUpdate = currentItems.find((item) => item.id === id);

    if (itemToUpdate) {
      const updatedItems = currentItems.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      );
      set({ items: updatedItems });
    } else {
      toast.error("Item not found in cart");
    }
  },
}),{
        name: "cart-storage",
        storage: createJSONStorage(()=> localStorage)
    }
))