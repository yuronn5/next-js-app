import localFont from "next/font/local";
import "./styles.css";
import { Poppins } from "next/font/google";

const geistSans = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1 className={poppins.className}>Top info</h1>
        {children}
      </body>
    </html>
  );
}