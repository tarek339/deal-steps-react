export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  street: string;
  houseNumber: string;
  zipCode: string;
  city: string;
  isVerified: boolean;
}

export interface IProduct {
  brand: string;
  imageUrl: string;
  description?: string;
  price: string;
}
