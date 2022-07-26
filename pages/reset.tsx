import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../utils/firebase";
import { useRouter } from "next/router";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/");
  }, [user, loading]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <button onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>

        <div>
          Don't have an account? <Link href="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Reset;
