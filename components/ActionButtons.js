const ActionButtons = ({ openModal }) => {
  return (
    <>
      <button style={{
        backgroundColor: '#3B99FC',
        border: 'none',
        color: '#ffffff',
        width: '40px',
        height: '36px',
        borderRadius: '50%',
        fontSize: '22px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 0 1px 0',
        transition: 'background-color 0.2s',
        fontWeight: '600',
        opacity: 0.9,
        userSelect: 'none'
      }} onClick={openModal}>+</button>
      <button style={{
        backgroundColor: '#3B99FC',
        border: 'none',
        color: '#ffffff',
        width: '40px',
        height: '36px',
        borderRadius: '50%',
        fontSize: '22px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 0 1px 0',
        transition: 'background-color 0.2s',
        fontWeight: '600',
        opacity: 0.9,
        userSelect: 'none'
      }}>-</button>
      <button style={{
        backgroundColor: '#3B99FC',
        border: 'none',
        color: '#ffffff',
        padding: '0 20px',
        borderRadius: '20px',
        fontSize: '16px',
        cursor: 'pointer',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        height: '36px',
        boxSizing: 'border-box',
        fontWeight: '600',
        userSelect: 'none'
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="white"/>
          <path d="M17 8.5L7 13.5L10 15.5L13 12.5L11 16.5L14 17.5L17 8.5Z" fill="#3B99FC"/>
        </svg>
        Connect Wallet
      </button>
    </>
  );
};

export default ActionButtons; 