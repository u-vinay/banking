import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if (loggedOut) router.push("/sign-in");
  };
  return (
    <footer className="footer flex cursor-pointer items-center justify-between gap-2 py-6 text-gray-700">
      <div
        className={
          type === "mobile"
            ? "footer_name-mobile xl:hidden"
            : "footer_name xl:flex"
        }
      >
        <p className="text-xl font-bold text-shadow-gray-700">
          {user?.firstName[0]}
        </p>
      </div>
      <div
        className={
          type === "mobile"
            ? "footer_email-mobile hidden xl:flex"
            : "footer_email hidden xl:flex"
        }
      >
        <h1 className="text-14 truncate font-semibold text-gray-00">
          {user?.firstName}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image
          src="
        icons/logout.svg"
          fill
          alt="jsm"
        />
      </div>
    </footer>
  );
};

export default Footer;
