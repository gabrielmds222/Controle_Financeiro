export interface TransacaoProps {
  nome: string;
  preco: string;
  tipo: string;
  categoria: string;
}

export interface CardProps {
  title: string;
  Icon: React.FC;
}

export interface ModalProps {
  isOpen: boolean;
  onSubmit: (data: TransacaoProps) => void;
  closeModal: () => void;
  openModal: () => void;
  saveDataToLocalStorage: (data: TransacaoProps) => void;
}
