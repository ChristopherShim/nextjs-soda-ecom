import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import Nav from "@/components/Nav";
import Logo from "./Logo";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false)
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-black-100 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 rounded-lg px-4 text-black"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#11122A] min-h-screen ">
      <div className="block md:hidden flex items-center p-4">
      <button onClick={()=> setShowNav(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="flex grow justify-center mr-6"><Logo/></div>
      
      </div>
     
      <div className="grid grid-cols-6">
        <Nav className="col-span-1" show={showNav}/>
        <div className="col-span-5 bg-[#1B1C30] flex-grow text-black mt-2 mr-2 rounded-lg p-4 mb-2">
          {children}
        </div>
      </div>
    </div>
  );
}
