import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../utils/firebase";
import { useRouter } from "next/router";
import { Form } from "../components/global/form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Button } from "../components/global/styles";

function Register() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/");
  }, [user, loading]);

  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      setError(undefined);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  const register = () => {
    if (!name) {
      setError("Please enter your name");
      return;
    }
    if (!email) {
      setError("Please enter your email");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <Form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
        style={{ marginBottom: "10px", fontSize: "16px", padding: "10px" }}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        style={{ marginBottom: "10px", fontSize: "16px", padding: "10px" }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ marginBottom: "10px", fontSize: "16px", padding: "10px" }}
      />
      <Button primary onClick={register}>
        Register
      </Button>
      {error && (
        <div style={{ color: "red", fontSize: "16px", marginTop: "5px" }}>
          {error}
        </div>
      )}
      <div style={{ marginTop: "10px" }}>
        Already have an account? <Link href="/login">Login</Link> now.
      </div>
    </Form>
  );
}

export default Register;
