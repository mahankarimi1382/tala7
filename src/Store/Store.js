import Cookies from "js-cookie";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const userDetails = create(
  persist(
    (set) => ({
      applicantUserId: "",
      setApplicantUserId: (value) => set(() => ({ applicantUserId: value })),
      userData:{},
      setUserData:(value)=>set(()=>({userData:value}))
    }),
    {
      name: "applicantUserId",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
  
);

export const TokenStore = create((set) => ({
  token: Cookies.get("token"),
  setToken: (token) => {
    Cookies.set("token", token);
    console.log(token);
    set(() => ({ token: token }));
  },
}));
