import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../components/global/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../components/global/form";

const Login = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/");
  }, [user, loading]);

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      setError(undefined);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  const login = () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    logInWithEmailAndPassword(email, password);
  };

  return (
    <Form>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        style={{
          marginBottom: "20px",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{
          marginBottom: "20px",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <Button primary onClick={login} type="submit">
        Login
      </Button>
      {error && (
        <div style={{ color: "red", fontSize: "16px", marginTop: "5px" }}>
          {error}
        </div>
      )}
      <div style={{ marginTop: "10px" }}>
        <Link href="/reset">Forgot Password</Link>
      </div>
      <div style={{ marginTop: "10px" }}>
        Don't have an account? <Link href="/register">Register</Link> now.
      </div>
    </Form>
  );
};

export default Login;
