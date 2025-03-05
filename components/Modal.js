const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
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
      <h2 style={{ color: '#ffffff', margin: '0 0 10px 0' }}>Deposit</h2>
      <p style={{ 
        color: '#ffffff',
        opacity: 0.6,
        margin: '0',
        fontSize: '15px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}>
        Enter the amount you want to deposit
      </p>
      <button onClick={onClose} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#ffffff',
        fontSize: '20px',
        cursor: 'pointer',
        opacity: 0.6,
        padding: '5px'
      }}>×</button>
    </div>
  );
};

export default Modal; 