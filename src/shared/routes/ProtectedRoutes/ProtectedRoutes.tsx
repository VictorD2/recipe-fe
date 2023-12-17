/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { ReactNode } from "react";
import { useGlobalContext } from "@/shared/contexts/GlobalProvider";
import Loading from "@/shared/components/Loading";
import Redirect from "../Redirect";
import paths from "../paths";

const ProtectedRoutes = ({
  children,
}: {
  children: ReactNode;
}) => {
  const {
    auth: { isAuthenticated },
    loading: { isLoading },
  } = useGlobalContext();

  if (isLoading) return <Loading />;

  if (!isAuthenticated) return <Redirect to={paths.root} />;

  return <>{children}</>;
};

export default ProtectedRoutes;
