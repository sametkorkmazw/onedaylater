export const metadata = {
  title: "One Day Later",
  description: "See what one day can change.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
