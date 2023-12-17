"use client";

import DashboardLayout from "@/shared/layouts/DashboardLayout";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default layout;
