export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div style={{ zoom: 2.1, textAlign: 'center' }}>{children}</div>
      </body>
    </html>
  );
}
