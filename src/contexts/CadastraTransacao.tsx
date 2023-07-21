import { createContext, useContext, useState, useEffect } from "react";
import { TransacaoProps, TransacaoDataProps } from "@/types";

export interface ContextProps {
  isOpen: boolean;
  entrada: number;
  saida: number;
  total: number;
  transacoes: TransacaoProps[];
  setTransacoes: React.Dispatch<React.SetStateAction<TransacaoProps[]>>;
  onSubmit: (data: TransacaoProps) => void;
  closeModal: () => void;
  openModal: () => void;
  saveDataToLocalStorage: (data: TransacaoProps) => void;
  fetchDataFromLocalStorage: () => void;
}

const CadastraTransacaoContext = createContext<ContextProps>(
  {} as ContextProps
);

export function useCadastraTransacaoContext() {
  const context = useContext(CadastraTransacaoContext);
  if (!context) {
    throw new Error(
      "useCadastraTransacaoContext must be used within a CadastraTransacaoProvider"
    );
  }
  return context;
}

export const CadastraTransacaoProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [transacoes, setTransacoes] = useState<TransacaoProps[]>([]);
  const [entrada, setEntrada] = useState<number>(0);
  const [saida, setSaida] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const onSubmit = (data: TransacaoProps) => {
    if (data) {
      closeModal();
      saveDataToLocalStorage(data);
    }
    console.log(data);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const saveDataToLocalStorage = (data: TransacaoProps) => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem("transacaoData", jsonData);
    console.log(data);
  };

  const fetchDataFromLocalStorage = () => {
    try {
      const jsonData = localStorage.getItem("transacaoData");
      if (jsonData) {
        const transacoesData: TransacaoDataProps = JSON.parse(jsonData);
        // Atualize o estado com os dados recuperados do LocalStorage
        // Exemplo:
        setEntrada(transacoesData.entrada);
        setSaida(transacoesData.saida);
        setTotal(transacoesData.total);
      }
    } catch (error) {
      console.error("Error fetching data from LocalStorage:", error);
    }
  };

  useEffect(() => {
    fetchDataFromLocalStorage();
  }, []);

  const contextValue: ContextProps = {
    isOpen,
    entrada,
    saida,
    total,
    onSubmit,
    closeModal,
    openModal,
    transacoes,
    setTransacoes,
    saveDataToLocalStorage,
    fetchDataFromLocalStorage,
  };

  return (
    <CadastraTransacaoContext.Provider value={contextValue}>
      {children}
    </CadastraTransacaoContext.Provider>
  );
};
