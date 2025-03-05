import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [balance, setBalance] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Инициализация Telegram WebApp
    const tg = window.Telegram.WebApp;
    tg.expand();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        padding: '8px 16px',
        backgroundColor: '#17181C',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: '#222327',
            padding: '0 10px',
            borderRadius: '12px',
            height: '40px',
            boxSizing: 'border-box'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.7}}>
              <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#0088CC"/>
              <path d="M17 8.5L7 13.5L10 15.5L13 12.5L11 16.5L14 17.5L17 8.5Z" fill="white"/>
            </svg>
            <span style={{
              color: '#ffffff',
              fontSize: '16px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              fontWeight: '500',
              opacity: 0.9,
              paddingTop: '1px'
            }}>
              {balance}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '2px', opacity: 0.5}}>
                <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        <button style={{
          backgroundColor: '#3B99FC',
          border: 'none',
          color: '#ffffff',
          padding: '0 16px',
          borderRadius: '20px',
          fontSize: '15px',
          cursor: 'pointer',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          height: '40px',
          boxSizing: 'border-box',
          fontWeight: '500',
          userSelect: 'none'
        }} onClick={openModal}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="white"/>
            <path d="M17 8.5L7 13.5L10 15.5L13 12.5L11 16.5L14 17.5L17 8.5Z" fill="#3B99FC"/>
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

      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#1c1c1e',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          zIndex: 1000
        }}>
          <h2 style={{ color: '#ffffff' }}>Deposit</h2>
          <p style={{ color: '#ffffff' }}>Enter the amount you want to deposit</p>
          <button onClick={closeModal} style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            fontSize: '20px',
            cursor: 'pointer'
          }}>×</button>
        </div>
      )}
    </div>
  );
} 