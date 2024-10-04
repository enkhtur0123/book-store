"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { PowerIcon } from "@heroicons/react/24/outline";

const links = [
  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "Orders", href: "/pages/order", icon: UserGroupIcon },
  {
    name: "Books",
    href: "/pages/book",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/pages/customers", icon: UserGroupIcon },
];

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex">
      <div className="bg-gray-800 text-white w-40 space-y-1 py-6 px-2">
        <div className="text-left text-md font-semibold">Цэс</div>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx("block py-1 px-1 rounded hover:bg-gray-700", {
                "bg-sky-100 text-blue-600": pathname === link.href,
              })}
            >
              <div className="flex gap-2 text-xs">
                <LinkIcon className="w-4 h-4" />
                <span className="hidden md:block">{link.name}</span>
              </div>
            </Link>
          );
        })}
        <div className="block py-2.5 px-4 rounded hover:bg-gray-700">
          <form
            action={async () => {
              //console.log('Signed out');
            }}
          >
            <button className="flex gap-2 text-base">
              <PowerIcon className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
