import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { Metadata } from "next";
import { inter } from "./ui/fonts";
import { createTheme, MantineProvider, ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import "@/app/ui/global.css";
import "@ezgrid/grid-core/styles.css";
import "@ezgrid/grid-core/icons.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

interface Props {
  readonly children: ReactNode;
}

// export const metadata: Metadata = {
//   title: {
//     template: "%s | Book Store",
//     default: "Book Store",
//   },
//   description: "The official Next.js Learn Dashboard built with App Router.",
//   metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
// };

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <ColorSchemeScript />
          <link
            rel="stylesheet"
            href="./node_modules/ezgrid/dist/ezgrid.min.css"
          ></link>
        </head>
        <MantineProvider theme={theme}>
          <body className={`${inter.className} antialiased`}>{children}</body>
        </MantineProvider>
      </html>
    </StoreProvider>
  );
}
