import React, { useEffect, useState } from "react";
import { auth, logInWithEmailAndPassword } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/");
  }, [user, loading]);

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => logInWithEmailAndPassword(email, password)}>
        Login
      </button>
      <div>
        <Link href="/reset">Forgot Password</Link>
      </div>
      <div>
        Don't have an account? <Link href="/register">Register</Link> now.
      </div>
    </div>
  );
};

export default Login;
