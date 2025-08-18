export interface FlowerItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}

export interface HeaderProps {
  opacity: number;
}

export interface NotificationProps {
  opacity: number;
}

export interface ShopItemProps {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
}
