import Button from "@/ui/Button";
import Container from "@/ui/Container";
import InputText from "@/ui/InputText";
import Text from "@/ui/Text";
import { FC } from "react";
import { LoginFormProps } from "./LodingForm.type";
import { useGlobalContext } from "@/shared/contexts/GlobalProvider";
import { useForm } from "react-hook-form";
import { AxiosResponseLoginService, LoginType } from "@/shared/types/auth.type";
import { Controller } from "react-hook-form";
import { LoginResolver } from "./LoginForm.yup";
import { useMutation } from "react-query";
import { loginService } from "@/shared/services/auth.service";
import { Id, toast } from "react-toastify";
import { getErrorResponse } from "@/shared/utils/helpers";
import { toastConfig } from "@/shared/config";

const LoginForm: FC<LoginFormProps> = (props) => {
  const { children } = props;

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<LoginType>({
    resolver: LoginResolver,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    auth: { setIsAuthenticated },
    user: { setUser },
  } = useGlobalContext();

  // Login Mutate
  const { mutate: mutateLogin } = useMutation<
    AxiosResponseLoginService,
    any,
    LoginType & { toastId: Id }
  >(
    async (
      login: LoginType & { toastId: Id }
    ): Promise<AxiosResponseLoginService> => {
      const { toastId, ...rest } = login;
      return await loginService(rest);
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

  // Form Submit
  const handleLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(async () => {
      const toastId = toast.loading("Verificando...");
      mutateLogin({ ...watch(), toastId });
    })();
  };

  return (
    <Container
      onSubmit={handleLoginForm}
      as="form"
      size={{ width: "lg:w-4/12 md:w-7/12 w-11/12" }}
      separator={{
        padding: "xl:pt-10 p-10",
      }}
      rounded="rounded-2xl"
      display="flex"
      flexDirection="flex-col"
      flexWrap="flex-nowrap"
      gap="gap-10"
      bgColor="xl:backdrop-blur-none lg:backdrop-blur-none md:backdrop-blur-xl backdrop-blur-xl"
    >
      <Text
        text="Iniciar Sesión"
        font={{
          align: "text-center",
          size: "text-3xl",
          color: "lg:text-black text-white",
        }}
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
            name="email"
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

export default LoginForm;
