import { AxiosResponse } from "axios";
import { UserType } from "./user.type";

export type LoginType = {
  email: string;
  password: string;
};

export type RegisterType = {
  email: string;
  password: string;
  name: string;
  repeatPassword: string;
};

type ResponseAuth = {
  token: string;
  user: UserType;
};

export type AxiosResponseLoginService = AxiosResponse<
  ResponseAuth,
  ResponseAuth
>;

export type AxiosResponseRegisterService = AxiosResponse<
  ResponseAuth,
  ResponseAuth
>;

export type AxiosResponseProfileService = AxiosResponse<UserType, UserType>;
