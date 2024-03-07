'use client';
import { useState, createContext, ReactNode, useContext } from "react";

interface HomeContextType {
    CoinData?: any;
    setCoinData: (data: any) => void;
}

const HomeContext = createContext({} as HomeContextType);

const HomeProvider = ({ children }: { children: ReactNode }) => {
    const [CoinData, setCoinData] = useState<any>(null);

    return (
        <HomeContext.Provider value={{ CoinData, setCoinData }}>
            {children}
        </HomeContext.Provider>
    );
};

export { HomeContext, HomeProvider };

export const useHome = () => useContext(HomeContext);
