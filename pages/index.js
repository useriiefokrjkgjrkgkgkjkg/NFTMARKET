import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    // Инициализация Telegram WebApp
    const tg = window.Telegram.WebApp;
    tg.expand();
  }, []);

  return (
    <div style={{
      backgroundColor: '#000000',
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }}>
      <Head>
        <title>Telegram Mini App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 16px',
        backgroundColor: '#1a1b1e'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            color: '#ffffff',
            fontSize: '18px',
            fontFamily: 'Arial, sans-serif'
          }}>0</span>
          <button style={{
            backgroundColor: '#3a3b3e',
            border: 'none',
            color: '#ffffff',
            width: '24px',
            height: '24px',
            borderRadius: '4px',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0
          }}>+</button>
          <button style={{
            backgroundColor: '#3a3b3e',
            border: 'none',
            color: '#ffffff',
            width: '24px',
            height: '24px',
            borderRadius: '4px',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0
          }}>-</button>
        </div>

        <button style={{
          backgroundColor: '#3b99fc',
          border: 'none',
          color: '#ffffff',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          fontFamily: 'Arial, sans-serif'
        }}>
          Connect Wallet
        </button>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 60px)'
      }}>
        <h1 style={{
          color: '#ffffff',
          fontSize: '24px',
          margin: 0,
          padding: 0,
          fontFamily: 'Arial, sans-serif'
        }}>
          в процессе
        </h1>
      </div>
    </div>
  );
} 