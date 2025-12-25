import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "KIDS - Kindergarten and Child Care",
  description: "KIDS is a clean, modern, and fully responsive template for kindergarten, childcare, homeschooling, school, learning, playground businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/apple-touch-icon-114x114.png" />
        
        {/* Vendor CSS */}
        <link rel="stylesheet" type="text/css" href="/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/vendor/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/vendor/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/vendor/owl.theme.default.min.css" />
        <link rel="stylesheet" type="text/css" href="/css/vendor/magnific-popup.css" />
        <link rel="stylesheet" type="text/css" href="/css/vendor/animate.min.css" />
        
        {/* Custom CSS */}
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
      </head>
      <body>
        {children}
        
        {/* JS Vendor Scripts */}
        <Script src="/js/vendor/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/vendor/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/vendor/owl.carousel.js" strategy="afterInteractive" />
        <Script src="/js/vendor/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/vendor/waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
