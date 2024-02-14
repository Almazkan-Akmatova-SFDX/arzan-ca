import { Box, ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
const karla = Karla({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arzan Cafe",
  description:
    "Welcome to Arzan Cafe, we are a restaurant that serves traditional Central Asian Kyrgyz food. You are all very welcome here!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body className={karla.className} style={{ backgroundColor: "black" }}>
          <main style={{ backgroundColor: "white" }}>
            <Box padding={{ base: "0", md: "12px" }} overflow="clip">
              {children}
            </Box>
          </main>
        </body>
      </ChakraProvider>
    </html>
  );
}
