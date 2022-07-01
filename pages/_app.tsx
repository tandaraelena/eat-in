import '../styles.css';
import { BasketProvider } from '../context/basket';
export default function MyApp({ Component, pageProps }) {
  return (
    <BasketProvider>
      <Component {...pageProps} />{' '}
    </BasketProvider>
  );
}
