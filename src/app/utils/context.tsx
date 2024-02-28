import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

export type AppContextType = {
  isMinimizedAsideMenu: boolean;
  setIsMinimizedAsideMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const contextDefaultValues: AppContextType = {
  isMinimizedAsideMenu: false,
  setIsMinimizedAsideMenu: () => {},
};

export const AppContext = createContext<AppContextType>(contextDefaultValues);

export function useAppContext() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function ContextProvider({ children }: Props) {
  const [isMinimizedAsideMenu, setIsMinimizedAsideMenu] =
    useState<boolean>(false);

  useEffect(() => {}, []);

  const value = {
    isMinimizedAsideMenu,
    setIsMinimizedAsideMenu,
  };

  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
