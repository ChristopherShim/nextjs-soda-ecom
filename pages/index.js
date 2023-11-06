import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between mb-4">
        <h2 className="text-white">
          <b>{session?.user?.email}</b>
        </h2>

        
      </div>
      <div className=" border-b-2"></div>
    </Layout>
  )
}
