import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header, Footer, StructuredData, GoogleAnalytics, AnalyticsProvider } from '@/components';
import { generateMetadata, generateStructuredData } from '@/utils/seo';

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${nunito.variable} antialiased`}>
        <AnalyticsProvider>
          <StructuredData data={generateStructuredData.organization()} />
          <StructuredData data={generateStructuredData.website()} />
          <Header />
          {children}
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
