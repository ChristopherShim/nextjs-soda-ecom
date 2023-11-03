import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "@/components/Nav";

export default function Layout({ children }) {
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
    <div className="bg-[#11122A] min-h-screen grid grid-cols-6">
      <Nav className="col-span-1" />

      <div className="col-span-5 bg-[#1B1C30] flex-grow text-black mt-2 mr-2 rounded-lg p-4 mb-2">
        {children}
      </div>
    </div>
  );
}
