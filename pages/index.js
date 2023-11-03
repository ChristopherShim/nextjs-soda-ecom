import Layout from "@/components/Layout";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between mb-4">
        <h2 className="text-white">
          <b>{session?.user?.email}</b>
        </h2>

        <button onClick={()=>signOut("google")} className="log-out">Log Out</button>
      </div>
      <div className=" border-b-2"></div>
    </Layout>
  )
}
