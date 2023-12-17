import Button from "@/ui/Button";
import Container from "@/ui/Container";
import InputText from "@/ui/InputText";
import Text from "@/ui/Text";
import { FC } from "react";
import { RegisterFormProps } from "./RegisterForm.type";
import { useGlobalContext } from "@/shared/contexts/GlobalProvider";
import { Controller, useForm } from "react-hook-form";
import {
  AxiosResponseRegisterService,
  RegisterType,
} from "@/shared/types/auth.type";
import { RegisterResolver } from "./RegisterForm.yup";
import { useMutation } from "react-query";
import { Id, toast } from "react-toastify";
import { registerService } from "@/shared/services/auth.service";
import { toastConfig } from "@/shared/config";
import { getErrorResponse } from "@/shared/utils/helpers";

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const { children } = props;

  const {
    auth: { setIsAuthenticated },
    user: { setUser },
  } = useGlobalContext();

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<RegisterType>({
    resolver: RegisterResolver,
    defaultValues: {
      email: "",
      name: "",
      password: "",
      repeatPassword: "",
    },
  });

  // Register Mutate
  const { mutate: mutateRegister } = useMutation<
    AxiosResponseRegisterService,
    any,
    RegisterType & { toastId: Id }
  >(
    async (
      login: RegisterType & { toastId: Id }
    ): Promise<AxiosResponseRegisterService> => {
      const { toastId, ...rest } = login;
      return await registerService(rest);
    },
    {
      onSuccess: ({ data: { user, token } }, { toastId }) => {
        setIsAuthenticated(true);
        setUser(user);
        localStorage.setItem("token", token);
        toast.update(toastId, toastConfig("Bienvenido", "success"));
      },
      onError: (error, { toastId }) => {
        toast.update(toastId, toastConfig(getErrorResponse(error), "warning"));
      },
    }
  );

  const handleRegisterForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(async () => {
      if (watch("password") !== watch("repeatPassword")) {
        return toast.warning("Las contraseñas no coinciden");
      }
      const toastId = toast.loading("Verificando...");
      mutateRegister({ ...watch(), toastId });
    })();
  };

  return (
    <Container
      onSubmit={handleRegisterForm}
      as="form"
      size={{ width: "lg:w-4/12 md:w-7/12 w-11/12" }}
      separator={{
        padding: "xl:pt-36 lg:pt-48 p-10",
      }}
      rounded="rounded-2xl"
      display="flex"
      flexDirection="flex-col"
      flexWrap="flex-nowrap"
      gap="gap-10"
      bgColor="xl:backdrop-blur-none lg:backdrop-blur-none md:backdrop-blur-xl backdrop-blur-xl"
    >
      <Text
        text="Registrate"
        font={{
          align: "text-center",
          size: "text-3xl",
          color: "lg:text-black text-white",
        }}
      />
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <InputText
            bgColor="bg-transparent"
            border={{ size: "border-b", color: "lg:border-black border-white" }}
            font={{ color: "lg:text-black text-white" }}
            label={{
              text: "Nombre",
              font: { color: "lg:text-black text-white" },
            }}
            required
            value={field.value}
            onChange={field.onChange}
            helpText={{ text: errors.name?.message }}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <InputText
            bgColor="bg-transparent"
            border={{ size: "border-b", color: "lg:border-black border-white" }}
            font={{ color: "lg:text-black text-white" }}
            label={{
              text: "Correo Electrónico",
              font: { color: "lg:text-black text-white" },
            }}
            required
            value={field.value}
            onChange={field.onChange}
            helpText={{ text: errors.email?.message }}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <InputText
            type="password"
            bgColor="bg-transparent"
            border={{ size: "border-b", color: "lg:border-black border-white" }}
            font={{ color: "lg:text-black text-white" }}
            label={{
              text: "Contraseña",
              font: { color: "lg:text-black text-white" },
            }}
            required
            value={field.value}
            onChange={field.onChange}
            helpText={{ text: errors.password?.message }}
          />
        )}
      />

      <Controller
        name="repeatPassword"
        control={control}
        render={({ field }) => (
          <InputText
            type="password"
            bgColor="bg-transparent"
            border={{ size: "border-b", color: "lg:border-black border-white" }}
            font={{ color: "lg:text-black text-white" }}
            label={{
              text: "Repita la Contraseña",
              font: { color: "lg:text-black text-white" },
            }}
            required
            value={field.value}
            onChange={field.onChange}
            helpText={{ text: errors.repeatPassword?.message }}
          />
        )}
      />

      <Container size={{ width: "w-full" }}>
        <Button
          type="submit"
          border={{
            color: "lg:border-black border-white",
            size: "border",
          }}
          font={{ color: "lg:text-black text-white" }}
          text="Ingresar"
          remixicon="ri-login-circle-line"
        />
      </Container>
      {children}
    </Container>
  );
};

export default RegisterForm;
