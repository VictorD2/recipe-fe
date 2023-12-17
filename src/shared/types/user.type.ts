import { RoleType } from "./role.type";

export type UserType = {
  id: string;
  name: string;
  email: string;
  roleId: number;
  role: RoleType;
};
