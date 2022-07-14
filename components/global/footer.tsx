import { useRouter } from 'next/router';
import { Button } from './styles';

export const Footer = () => {
  const router = useRouter();
  return (
    <div style={{ height: '77px' }}>
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
        <Button primary onClick={() => router.push('/basket')}>
          View order
        </Button>
      </div>
    </div>
  );
};
