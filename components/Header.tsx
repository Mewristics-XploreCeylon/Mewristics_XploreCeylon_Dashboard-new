import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeaderNavLink from "./HeaderNavLink";

export const Headerr = () => {
  const menuItems = [
    { label: `Overview`, url: `/dashboard/home` },
    { label: `Crew Manual`, url: `/dashboard/crew_manual` },
    { label: `Crew Management`, url: `/dashboard/crew_management` },
  ];

  return (
    <header className="flex flex-col gap-5">
      <div className="py-4 flex items-center bg-white justify-evenly">
        <Link href="/">
          <Image
            width={36}
            height={36}
            src="/fits_logo.png"
            className="w-8 md:w-9"
            alt="logo"
          />
        </Link>

        <nav className="ml-8">
          <ul className="flex flex-wrap gap-x-8 text-gray-900">
            {menuItems.map(({ url, label }, index) => (
              <li key={index}>
                <HeaderNavLink href={url}>{label}</HeaderNavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
