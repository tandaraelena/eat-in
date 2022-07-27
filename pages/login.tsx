import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { Banner } from "../components/global/banner";
import { Button } from "../components/global/styles";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const logInWithEmailAndPassword = async (email, password) => {
    try {
      setError(undefined);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/");
  }, [user, loading]);

  return (
    <div style={{ position: "relative", fontSize: "18px" }}>
      <Banner />
      <div
        style={{
          position: "absolute",
          top: "45px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "white",
              padding: "30px",
              borderRadius: "4px",
              width: "400px",
            }}
          >
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
            <Button
              primary
              onClick={() => logInWithEmailAndPassword(email, password)}
              type="submit"
            >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
