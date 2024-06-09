import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";

const quicksand_init = Quicksand({
  subsets: ["latin"],
  weight: ["400", "300", "500"],
  variable: "--var-quicksand--",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={quicksand_init.variable}>
      <Component {...pageProps} />
    </div>
  );
}
