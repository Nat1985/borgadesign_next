import { create } from "zustand";

const useMainStore = create((set) => ({
    // Burger menu
    isOpen: false,
    setBurger: (action) => set({ isOpen: action }),
    // Submenu
    isSubOpen: false,
    setSubMenu: (action) => set({ isSubOpen: action })
}))

useMainStore.subscribe((state) => {
    // Possibilità di eseguire codice ogni volta che i valore degli stati cambiano
})

export default useMainStore