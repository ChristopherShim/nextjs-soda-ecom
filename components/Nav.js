import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession ,signOut } from "next-auth/react";
import Image from "next/image";
import sopopLogo from "@/assets/Sopop-logo.png";

const Nav = () => {
  const { data: session } = useSession();

  const inactiveLink = "flex gap-1 p-4";
  const activeLink = inactiveLink + " bg-white text-blue-900 rounded-lg font-bold";
  const route = useRouter();
  const { pathname } = route;

  return (
    <aside className="text-white p-4 pr-0 mr-5">
      <Image src={sopopLogo} className="h-8 w-full object-contain mb-16"></Image>

      <div className="flex gap-4 mb-16 items-center">
        <img
          src={session?.user?.image}
          className="w-14 h-14 rounded-[999px]"
        ></img>
        <div className="flex flex-col ">
          <span className="font-bold">{session?.user?.name}</span>
          <p>Admin</p>
        </div>
      </div>

      <nav className="flex flex-col gap-4">
        <Link href="/" className={pathname === "/" ? activeLink : inactiveLink}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            stroke="currentColor"
          >
            <path
              d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z"
              strokeWidth="2"
            />
            <path
              d="M21 9L3 9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 21L9 9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Dashboard
        </Link>

        <Link
          href="/products"
          className={pathname.includes("/products") ? activeLink : inactiveLink}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              d="M9 13H15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6.5C3 6.03534 3 5.80302 3.03843 5.60982C3.19624 4.81644 3.81644 4.19624 4.60982 4.03843C4.80302 4 5.03534 4 5.5 4H12H18.5C18.9647 4 19.197 4 19.3902 4.03843C20.1836 4.19624 20.8038 4.81644 20.9616 5.60982C21 5.80302 21 6.03534 21 6.5V6.5V6.5C21 6.96466 21 7.19698 20.9616 7.39018C20.8038 8.18356 20.1836 8.80376 19.3902 8.96157C19.197 9 18.9647 9 18.5 9H12H5.5C5.03534 9 4.80302 9 4.60982 8.96157C3.81644 8.80376 3.19624 8.18356 3.03843 7.39018C3 7.19698 3 6.96466 3 6.5V6.5V6.5Z"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M4 9V15.9999C4 17.8856 4 18.8284 4.58579 19.4142C5.17157 19.9999 6.11438 19.9999 8 19.9999H9H15H16C17.8856 19.9999 18.8284 19.9999 19.4142 19.4142C20 18.8284 20 17.8856 20 15.9999V9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Products
        </Link>

        <Link
          href="/orders"
          className={pathname.includes("/orders") ? activeLink : inactiveLink}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            stroke="currentColor"
          >
            <path d="M3.5 10H20.5" strokeWidth="2" strokeLinecap="round" />
            <path d="M6 14H8" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 14H13" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M3 9C3 7.11438 3 6.17157 3.58579 5.58579C4.17157 5 5.11438 5 7 5H12H17C18.8856 5 19.8284 5 20.4142 5.58579C21 6.17157 21 7.11438 21 9V12V15C21 16.8856 21 17.8284 20.4142 18.4142C19.8284 19 18.8856 19 17 19H12H7C5.11438 19 4.17157 19 3.58579 18.4142C3 17.8284 3 16.8856 3 15V12V9Z"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          Orders
        </Link>

        <Link
          href="/settings"
          className={pathname.includes("/settings") ? activeLink : inactiveLink}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            stroke="currentColor"
          >
            <path
              d="M10.255 4.18806C9.84269 5.17755 8.68655 5.62456 7.71327 5.17535C6.10289 4.4321 4.4321 6.10289 5.17535 7.71327C5.62456 8.68655 5.17755 9.84269 4.18806 10.255C2.63693 10.9013 2.63693 13.0987 4.18806 13.745C5.17755 14.1573 5.62456 15.3135 5.17535 16.2867C4.4321 17.8971 6.10289 19.5679 7.71327 18.8246C8.68655 18.3754 9.84269 18.8224 10.255 19.8119C10.9013 21.3631 13.0987 21.3631 13.745 19.8119C14.1573 18.8224 15.3135 18.3754 16.2867 18.8246C17.8971 19.5679 19.5679 17.8971 18.8246 16.2867C18.3754 15.3135 18.8224 14.1573 19.8119 13.745C21.3631 13.0987 21.3631 10.9013 19.8119 10.255C18.8224 9.84269 18.3754 8.68655 18.8246 7.71327C19.5679 6.10289 17.8971 4.4321 16.2867 5.17535C15.3135 5.62456 14.1573 5.17755 13.745 4.18806C13.0987 2.63693 10.9013 2.63693 10.255 4.18806Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              strokeWidth="2"
            />
          </svg>
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Nav;
