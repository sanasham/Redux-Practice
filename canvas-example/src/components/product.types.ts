export interface Rating {
  rate: number;
  count: number;
}

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: Rating;
}

export interface CardProps {
  id: number;
  image: string;
  brand: string;
  title: string;
  price: number;
  rating: number;
  ratingCount: number;
  originalPrice?: number;
  discount?: number;
  tag?: string;
  onAddToCart: (id: number) => void;
}
