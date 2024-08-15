// types.ts

type Customer = {
  id: string;
  name: string;
  title: string;
  address: string;
  avatar: string;
};

type Photo = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  description?: string; 
};

export type { Photo, Customer };
