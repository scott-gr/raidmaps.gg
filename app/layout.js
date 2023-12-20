import './globals.css'
import './normalize.css'
import Header from './components/header/Header';

export const metadata = {
  metadataBase: new URL('https://raidmaps.gg'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  title: {
    template: '%s | raidmaps.gg',
    default: 'raidmaps.gg',
  },
  description: 'Simple raid maps for Destiny 2. Easy to share with your LFG fireteam.',
  author: 'Fargabarga',
  openGraph: {
    title: 'raidmaps.gg',
    description: 'Simple raid maps for Destiny 2. Easy to share with your LFG fireteam.',
    type: 'website',
    url: 'https://raidmaps.gg',
    siteName: 'raidmaps.gg',
    locale: 'en_US',
  },
};

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
