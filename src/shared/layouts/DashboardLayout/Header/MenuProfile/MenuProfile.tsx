/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter, usePathname } from "next/navigation";
import { useGlobalContext } from "@/shared/contexts/GlobalProvider";
import { ButtonProps } from "@/ui/Button/Button.type";
import DropdownMenu from "@/ui/DropdownMenu";
import Item from "@/ui/DropdownMenu/Item";
import paths from "@/shared/routes/paths";
import Text from "@/ui/Text";
import Icon from "@/ui/Icon";

const MenuProfile = () => {
  const {
    auth: { setIsAuthenticated },
    user: { user },
  } = useGlobalContext();

  const router = useRouter();
  const pathname = usePathname();

  // remove token and change IsAuthenticated
  const handleLogOut = () => {
    console.log("XDD");
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  // Dropdown options
  const menuItems: Array<ButtonProps> = [
    {
      text: "Gestionar cuenta",
      remixicon: "ri-user-line",
      onClick: () => {
        router.push(paths.profile);
      },
      bgColor: pathname.includes(paths.profile)
        ? "bg-primary"
        : "hover:bg-primary bg-white",
      font: {
        color: pathname.includes(paths.profile)
          ? "text-white"
          : "group-hover:text-white text-gray-900",
      },
    },
    {
      text: "Cerrar Sesión",
      remixicon: "ri-logout-box-line",
      onClick: handleLogOut,
    },
  ];

  return (
    <DropdownMenu
      bgColor="bg-transparent"
      separator={{
        margin: "mt-2",
      }}
      positionAbs="right-0"
      buttonNode={
        <>
          <Text
            text={user.name}
            className="hidden md:block md:ml-2 truncate max-w-[8rem]"
          />
          <Icon
            remixicon="ri-arrow-down-s-line"
            font={{ color: "text-violet-200 hover:text-violet-100" }}
            className="ml-2 -mr-1"
            aria-hidden="true"
          />
        </>
      }
    >
      {menuItems.map((item, i) => {
        return <Item {...item} key={"item-menu-profile-" + i} />;
      })}
    </DropdownMenu>
  );
};

export default MenuProfile;
