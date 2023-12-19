import './globals.css'
import './normalize.css'
import Header from './components/header/Header';

export default function RootLayout({ children}) {

  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
