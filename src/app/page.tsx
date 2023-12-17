"use client";
import imgLogo from "@/shared/assets/img/fondo-login.jpg";
import Container from "@/ui/Container";
import AuthRoutes from "@/shared/routes/AuthRoutes";
import Text from "@/ui/Text";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);

  const handleChangeLogin = (isLogin: boolean) => {
    return () => {
      setIsLogin(isLogin);
    };
  };

  return (
    <AuthRoutes>
      <title>{isLogin ? "Iniciar Sesión" : "Registrarse"}</title>
      <Container
        style={{ backgroundImage: `url(${imgLogo.src})` }}
        size={{
          minHeight: "min-h-screen",
        }}
        className="bg-center bg-cover bg-no-repeat bg-secondary"
        justify="justify-center"
        flexDirection="flex-col"
        align="items-center"
        display="flex"
        as="main"
      >
        {isLogin ? (
          <LoginForm>
            <Container size={{ width: "w-full" }}>
              <Text
                onClick={handleChangeLogin(false)}
                className="cursor-pointer"
                font={{ size: "text-md", color: "lg:text-black text-white" }}
                text="¿No tienes una cuenta? Registrate"
              />
            </Container>
          </LoginForm>
        ) : (
          <RegisterForm>
            <Container size={{ width: "w-full" }}>
              <Text
                onClick={handleChangeLogin(true)}
                className="cursor-pointer"
                font={{ size: "text-md", color: "lg:text-black text-white" }}
                text="¿Ya tienes una cuenta? Inicia Sesión"
              />
            </Container>
          </RegisterForm>
        )}
      </Container>
    </AuthRoutes>
  );
}
