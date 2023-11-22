import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter()
  return (
    <SessionProvider session={session}>
      <Component key={router.asPath} {...pageProps} />
    </SessionProvider>
  );
}
