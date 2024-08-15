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
  description?: string; // Use '?' if description can be optional
  // Add other properties if needed
};

export type { Photo, Customer };
