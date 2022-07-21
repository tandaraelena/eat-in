import { Wrapper, Actions, Button, Logo } from './styles';
import Image from 'next/image';
import { useRouter } from 'next/router';

export const NavBar = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Logo>
        <Image src="/assets/logo.png" width={54} height={46} />
        <div>RF - Eat-in</div>
      </Logo>
      <Actions>
        <Button primary onClick={() => router.push('/basket')}>
          Basket
        </Button>
      </Actions>
    </Wrapper>
  );
};
