import { useState, createContext, useContext, ReactNode, FC } from "react";

interface GlobalValuesInterface {
  stepGallons: number | null;
  minimumRequired: number | null;
  totalGallons: number | null;
}

interface CalculationsDataContextInterface {
  globalValues: GlobalValuesInterface;
  setGlobalValues: React.Dispatch<React.SetStateAction<GlobalValuesInterface>>;
}

const CalculationsDataContext = createContext<CalculationsDataContextInterface | undefined>(undefined);

const CalculationsDataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [globalValues, setGlobalValues] = useState<GlobalValuesInterface>({
    stepGallons: null,
    minimumRequired: null,
    totalGallons: null,
  });

  return (
    <CalculationsDataContext.Provider value={{ globalValues, setGlobalValues }}>
      {children}
    </CalculationsDataContext.Provider>
  );
};


const useCalculationsData = () => {
  const context = useContext(CalculationsDataContext);
  if (!context) {
    throw new Error("useCalculationsData must be used within a CalculationsDataProvider");
  }
  return context;
};

export { CalculationsDataProvider, useCalculationsData };