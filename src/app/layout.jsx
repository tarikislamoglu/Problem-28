import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex h-[100vh] justify-center items-center">
        {children}
      </body>
    </html>
  );
}
