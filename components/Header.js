import Balance from './Balance';
import ActionButtons from './ActionButtons';

const Header = ({ openModal }) => {
  return (
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
        <Balance />
        <ActionButtons openModal={openModal} />
      </div>
    </div>
  );
};

export default Header; 