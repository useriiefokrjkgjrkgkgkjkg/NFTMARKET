const Balance = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      backgroundColor: '#222327',
      padding: '0 14px',
      borderRadius: '14px',
      height: '36px',
      boxSizing: 'border-box'
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity: 0.7}}>
        <path d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z" fill="#0088CC"/>
        <path d="M17 8.5L7 13.5L10 15.5L13 12.5L11 16.5L14 17.5L17 8.5Z" fill="white"/>
      </svg>
      <span style={{
        color: '#ffffff',
        fontSize: '15px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        display: 'flex',
        alignItems: 'center',
        gap: '2px',
        fontWeight: '500',
        opacity: 0.9,
        paddingTop: '1px'
      }}>
        0
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '2px', opacity: 0.6}}>
          <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
};

export default Balance; 