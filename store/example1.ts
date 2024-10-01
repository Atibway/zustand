import { create } from "zustand"

export type storeProps = {
    count: number;
    increase: ()=> void;
    decrease: ()=> void;
    removeAllCount: ()=> void;
    updateCount: (newCount:number)=> void;
}

export const useStore = create<storeProps>((set)=> ({
    count: 0,
    increase: ()=> set((state)=> ({count: state.count + 1})),
    decrease: ()=> set((state)=> ({count: state.count - 1})),
    removeAllCount: () => set({count: 0}),
    updateCount: (newCount: number) => set({count: newCount})
}))