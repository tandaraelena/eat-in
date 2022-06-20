import { Wrapper, Actions, Button, Logo } from './styles';
import Image from 'next/image';
export const NavBar = () => {
  return (
    <Wrapper>
      <Logo>
        <Image src="/assets/logo.png" width={54} height={46} />
        <div>RF - Eat-in</div>
      </Logo>
      <Actions>
        <Button>Login</Button>
        <Button primary>Basket</Button>
      </Actions>
    </Wrapper>
  );
};
