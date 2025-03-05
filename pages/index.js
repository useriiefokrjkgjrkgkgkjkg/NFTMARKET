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
        backgroundColor: '#1a1b1e',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#0098EA"/>
              <path d="M17 8.5L7 13.5L10 15.5L13 12.5L11 16.5L14 17.5L17 8.5Z" fill="white"/>
            </svg>
            <span style={{
              color: '#ffffff',
              fontSize: '18px',
              fontFamily: 'Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              0
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
          <button style={{
            backgroundColor: '#3a3b3e',
            border: 'none',
            color: '#ffffff',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}>+</button>
          <button style={{
            backgroundColor: '#3a3b3e',
            border: 'none',
            color: '#ffffff',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            fontSize: '18px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}>-</button>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#ff6b6b',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}></div>
        </div>

        <button style={{
          backgroundColor: '#3b99fc',
          border: 'none',
          color: '#ffffff',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          fontFamily: 'Arial, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="white"/>
            <path d="M17 8.5L7 13.5L10 15.5L13 12.5L11 16.5L14 17.5L17 8.5Z" fill="#3b99fc"/>
          </svg>
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