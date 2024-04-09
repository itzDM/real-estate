import { ReactNode, createContext, useEffect, useState } from "react";

interface userData {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface AuthContextValue {
  currentUser: userData | null;
  updateUser: (user: userData | null) => void;
}

export const AuthContext = createContext<AuthContextValue>({
  currentUser: null,
  updateUser: () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const storedUser = localStorage.getItem("user");
  const initialUser = storedUser ? JSON.parse(storedUser) : null;
  const [currentUser, setCurrentUser] = useState<userData | null>(initialUser);

  const updateUser = (user: userData | null) => {
    setCurrentUser(user);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
