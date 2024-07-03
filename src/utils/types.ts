export type Product = {
  id: string; //user id
  imgUrl: string;
  name: string;
  price: {
    small: number;
    medium: number;
    large: number;
  };
  description: string;
  category: string; // category id
  size: "small" | "medium" | "large";
};

export type Category = {
  id: string; // category id
  name: string;
};

export type User = {
  userName: string;
  email: string;
  password: string;
  avatar: string;
  address: string;
  cardInfo: {
    name: string;
    number: string;
    expirationDate: string;
    cvv: string;
  };
  favorites: string[]; // product id
};

export type Order = {
  id: string;
  products: {
    productId: string; // product id
    size: "small" | "medium" | "large";
    quantity: number;
  }[];
  user: string;
  date: Date;
  status: "placed" | "in progress" | "on the way" | "delivered";
  milkAmount: number; // 1-10
  promoCode: string | null;
};

export type Promotion = {
  productId: string; // product id
  title: string;
  description: string;
};

type PromotionCode = {
  id: string;
  code: string;
  discount: number;
  expirationDate: Date;
};
