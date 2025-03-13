import Cookies from "js-cookie";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const userSubmitedArrStore = create(
  persist(
    (set) => ({
      patients: [],
      setPatients: (patientArr) => set(() => ({ patients: patientArr })),
    }),
    {
      name: "user-submitted-array",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
export const TotalLoadingStore = create((set) => ({
  isTotalLoading: false,
  setIsTotalLoading: (bool) => set(() => ({ isTotalLoading: bool })),
}));
export const TokenStore = create((set) => ({
  token: Cookies.get("token"),
  setToken: (token) => {
    Cookies.set("token", token);
    console.log(token);
    set(() => ({ token: token }));
  },
}));
