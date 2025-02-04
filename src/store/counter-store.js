import { create } from "zustand";

// 2. Create a Zustand store
const useStore = create((set) => ({
  // Initial state
  count: 0,
  // Action to increase count
  increase: () => set((state) => ({ count: state.count + 1 })),
  // Action to decrease count
  decrease: () => set((state) => ({ count: state.count - 1 })),
  // Action to increase count by a given amount
  increaseBy: (amount) => set((state) => ({ count: state.count + amount })),
  // functionName: () => set((state)=>({var: manipulate it}))
}));

export default useStore;
