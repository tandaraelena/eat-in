import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";
import { Form } from "../components/global/form";
import { Button } from "../components/global/styles";
import { sendPasswordResetEmail } from "firebase/auth";

function Reset() {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/");
  }, [user, loading]);

  const sendPasswordReset = async (email) => {
    try {
      setError(undefined);
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      setError(err.message);
    }
  };

  const reset = () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }
    sendPasswordReset(email);
  };

  return (
    <Form>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
        style={{
          marginBottom: "20px",
          padding: "10px",
          fontSize: "16px",
        }}
      />
      <Button primary onClick={reset}>
        Send password reset email
      </Button>
      {error && (
        <div style={{ color: "red", fontSize: "16px", marginTop: "5px" }}>
          {error}
        </div>
      )}
      <div style={{ marginTop: "10px" }}>
        Don't have an account? <Link href="/register">Register</Link> now.
      </div>
    </Form>
  );
}

export default Reset;
