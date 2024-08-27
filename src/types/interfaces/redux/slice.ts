import { IUser } from "../interfaces";

export interface InitialUserState {
  user: IUser | null;
  loading: boolean;
}

export interface IAddUser {
  user: IUser;
}

export interface HandleSpinner {
  loading: boolean;
}
