import axios from "@/shared/utils/axios";
import {
  AxiosResponseLoginService,
  AxiosResponseProfileService,
  AxiosResponseRegisterService,
  LoginType,
  RegisterType,
} from "../types/auth.type";
import { API } from "../utils/api";

const api = `${API}/auth`;

/**
 *
 * @param {LoginType} login
 * @returns  {AxiosResponseLoginService}
 */
export const loginService = async (
  login: LoginType
): Promise<AxiosResponseLoginService> => {
  return await axios.post(`${api}/signin`, login);
};

/**
 *
 * @param {RegisterType} register
 * @returns  {AxiosResponseRegisterService}
 */
export const registerService = async (
  register: RegisterType
): Promise<AxiosResponseRegisterService> => {
  const { repeatPassword, ...rest } = register;
  return await axios.post(`${api}/signup`, rest);
};

/**
 *
 * @returns  {AxiosResponseProfileService}
 */
export const profileService =
  async (): Promise<AxiosResponseProfileService> => {
    return await axios.get(`${api}/profile`);
  };
