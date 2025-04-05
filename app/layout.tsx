import { type Metadata } from 'next'
import { IBM_Plex_Sans } from "next/font/google";

import {
  ClerkProvider,
} from '@clerk/nextjs'

import "./globals.css";
import { cn } from "@/lib/utils";




const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-sans",
  weight: ['400', '500', '600', '700'],
});


export const metadata: Metadata = {
  title: "Visionify",
  description: "AI-Powered Image Generator App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider appearance={
      {
        variables: {colorPrimary: '#624cf5'}
      }
    }>

    
      <html lang="en">
        <body
          className={cn("font-IBMPlex antialiased", IBMPlex.variable)}
        >
          
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          {children}
          
          
        </body>
      </html>
      </ClerkProvider>
  );
}

