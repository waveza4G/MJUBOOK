export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header>
            <h1>My Website</h1>
          </header>
          {children}
          <footer>
            <p>Footer content here</p>
          </footer>
        </body>
      </html>
    );
  }
  