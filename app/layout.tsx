import type { Metadata } from "next";
import { Inter, Figtree } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const inter = Inter({ subsets: ['latin'] })
const figtree = Figtree({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Lan",
  description: "Eoeoe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
