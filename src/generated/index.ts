export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Category = {
  __typename?: 'Category';
  _id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CategoryInput = {
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createOrder?: Maybe<Order>;
  createProduct?: Maybe<Product>;
  createUser?: Maybe<User>;
  loginUser?: Maybe<User>;
};


export type MutationCreateCategoryArgs = {
  fields?: InputMaybe<CategoryInput>;
};


export type MutationCreateOrderArgs = {
  fields?: InputMaybe<OrderInput>;
};


export type MutationCreateProductArgs = {
  fields?: InputMaybe<ProductInput>;
};


export type MutationCreateUserArgs = {
  fields?: InputMaybe<UserInput>;
};


export type MutationLoginUserArgs = {
  fields?: InputMaybe<UserLoginInput>;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID']['output'];
  date?: Maybe<Scalars['Date']['output']>;
  products: Array<Maybe<Products>>;
  promoCode?: Maybe<Scalars['String']['output']>;
  status: OrderStatus;
  user: Scalars['String']['output'];
};

export type OrderInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  products: Array<InputMaybe<ProductsInput>>;
  promoCode?: InputMaybe<Scalars['String']['input']>;
  status: OrderStatus;
  user: Scalars['String']['input'];
};

export enum OrderStatus {
  Delivered = 'delivered',
  InProgress = 'in_progress',
  OnTheWay = 'on_the_way',
  Placed = 'placed'
}

export type Price = {
  __typename?: 'Price';
  large?: Maybe<Scalars['Float']['output']>;
  medium?: Maybe<Scalars['Float']['output']>;
  small?: Maybe<Scalars['Float']['output']>;
};

export type PriceInput = {
  large?: InputMaybe<Scalars['Float']['input']>;
  medium?: InputMaybe<Scalars['Float']['input']>;
  small?: InputMaybe<Scalars['Float']['input']>;
};

export type Product = {
  __typename?: 'Product';
  _id: Scalars['ID']['output'];
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  imgUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Price>;
};

export type ProductInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<PriceInput>;
};

export enum ProductSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type Products = {
  __typename?: 'Products';
  milkAmount: Scalars['Int']['output'];
  productId: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  size: ProductSize;
};

export type ProductsInput = {
  milkAmount: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  size: ProductSize;
};

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<Array<Category>>;
  getOrders?: Maybe<Array<Order>>;
  getProducts?: Maybe<Array<Product>>;
  getUsers?: Maybe<Array<User>>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type UserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


