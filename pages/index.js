import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    // Инициализация Telegram WebApp
    if (typeof window !== 'undefined' && window.Telegram) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Telegram Mini App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>

      <main style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1>В процессе</h1>
      </main>
    </div>
  );
} 