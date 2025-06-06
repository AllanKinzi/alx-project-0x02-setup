export interface CardProps {
    title: string;
    content: string;
  }
  
  export interface ButtonProps {
    label: string;
    onClick: () => void;
  }

  export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: CardProps) => void;
    children?: React.ReactNode;
  }

  export interface PropertyProps{
    name: string;
    address: {
      state: string;
      city: string;
      country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
      bed: string;
      shower: string;
      occupants: string;
    };
    image: string;
    discount: string;
  }
  