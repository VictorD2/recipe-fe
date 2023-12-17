import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const RegisterResolver = yupResolver(
  yup.object().shape({
    email: yup
      .string()
      .email("Formato incorrecto")
      .required("Este campo es requerido"),
    name: yup.string().required("Este campo es requerido"),
    password: yup.string().required("Este campo es requerido"),
    repeatPassword: yup.string().required("Este campo es requerido"),
  })
);
