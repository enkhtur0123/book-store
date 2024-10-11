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
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Orders", href: "/order", icon: UserGroupIcon },
  {
    name: "Books",
    href: "/book",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/customers", icon: UserGroupIcon },
];

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="h-screen flex">
      <div className="bg-gray-800 text-white w-40 flex flex-col py-6 px-2">
        <div className="text-center text-md font-semibold mb-4">Цэс</div>

        <div className="flex-1 space-y-2">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "block py-2 px-2 rounded hover:bg-gray-700 border-b border-gray-600",
                  {
                    "bg-sky-100 text-blue-600": pathname === link.href,
                  }
                )}
              >
                <div className="flex gap-2 text-xs">
                  <LinkIcon className="w-3 h-3" />
                  <span className="hidden md:block">{link.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="mt-auto block py-2.5 px-4 rounded hover:bg-gray-700">
          <form
            action={async () => {
              //console.log('Signed out');
            }}
          >
            <button className="flex gap-2 text-xs">
              <PowerIcon className="w-4" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
