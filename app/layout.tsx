import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Metadata } from "next";
import { inter } from "./ui/fonts";
import "@/app/ui/global.css";

interface Props {
  readonly children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s | Book Store",
    default: "Book Store",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </StoreProvider>
  );
}
