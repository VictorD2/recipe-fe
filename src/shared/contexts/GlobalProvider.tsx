/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { UserType } from "../types/user.type";
import { useQuery } from "react-query";
import { profileService } from "../services/auth.service";
import { AxiosResponseProfileService } from "../types/auth.type";

type GlobalContextType = {
  auth: {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  };
  loading: {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
  };
  user: {
    user: UserType;
    setUser: Dispatch<SetStateAction<UserType>>;
  };
};

export const initialStateUser: UserType = {
  id: "",
  name: "",
  email: "",
  roleId: 0,
  role: {
    id: 0,
    name: "",
    permissions: [],
  },
};

export const GlobalContext = createContext({} as GlobalContextType);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (context === null)
    throw new Error("useGlobalContext must be used within a GlobalProvider");

  return context;
};

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserType>(initialStateUser);

  useQuery<AxiosResponseProfileService>(
    "GET_PROFILE",
    async (): Promise<AxiosResponseProfileService> => {
      return await profileService();
    },
    {
      onSuccess: ({ data }) => {
        setUser(data);
        setIsLoading(false);
        setIsAuthenticated(true);
      },
    }
  );

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const jwt = jwtDecode<{ id: string }>(token);
  //     setIsAuthenticated(true);
  //   }
  //   setIsLoading(false);
  // }, []);

  return (
    <GlobalContext.Provider
      value={{
        auth: {
          isAuthenticated,
          setIsAuthenticated,
        },
        loading: {
          isLoading,
          setIsLoading,
        },
        user: {
          user,
          setUser,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
