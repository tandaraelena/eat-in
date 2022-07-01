import { Button } from './styles';

export const Footer = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
      }}
    >
      <Button link>Cancel order</Button>
      <Button primary>View order</Button>
    </div>
  );
};
