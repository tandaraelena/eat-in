import { Wrapper, Actions, Button, ButtonWithColor, Logo } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../utils/firebase";
import { useEffect } from "react";

export const NavBar = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
  }, []);

  if (error)
    return (
      <div>
        "Oops, we couldn't load the data thise time. Please try again later."
      </div>
    );

  return (
    <Wrapper>
      <Logo onClick={() => router.push("/")}>
        <Image src="/assets/logo.png" width={64} height={56} title="Homepage" />
        <div>RF - Eat-in</div>
      </Logo>
      <Actions>
        {user ? (
          <div>
            Logged in as {user.email}:{" "}
            <ButtonWithColor
              onClick={() => {
                logout();
              }}
            >
              Logout
            </ButtonWithColor>
          </div>
        ) : (
          <Button link onClick={() => router.push("/login")}>
            Login
          </Button>
        )}
      </Actions>
    </Wrapper>
  );
};
