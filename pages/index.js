import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Modal from '../components/Modal';

export default function Home() {
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

      <Header openModal={openModal} />

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

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
} 