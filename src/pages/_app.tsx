import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Navigator } from "../components/Navigator";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname, route } = router;

  const current = {
    title: pathname.substring(1, 2)?.toUpperCase() + pathname.substring(2),
    href: route,
  };

  return (
    <>
      <ChakraProvider>
        <div className="max-h-screen max-w-screen overflow-hidden">
          <header>
            <Header />
          </header>
          <div className="flex flex-row h-screen pt-12">
            <aside>
              <Sidebar />
            </aside>
            <main className="flex flex-col w-full h-full bg-gray-200 ">
              <Navigator current={current} />
              <div className="overflow-y-auto">
                <Component {...pageProps} />
              </div>
            </main>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
