import '../styles/normalize.css';
import '../styles/global.css';
import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
});



export default function App({Component, pageProps}) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
