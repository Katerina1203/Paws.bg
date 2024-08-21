"use client";

import { getUserWithCredentials } from "@/lib/action";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './loginform.module.css';

const LoginForm =  ({ toggleForm }) => {
    const router = useRouter();
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);

            const response = await getUserWithCredentials(formData);

            if (!!response.error) {
                console.error(response.error);
                setError(response.error.message);
            } else {
                router.push("/");
            }
        } catch (e) {
            console.error(e);
            setError("Incorrect credentials!");
        }
    }

  return (
    <>
         <div className="text-xl text-red-500">{error}</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </form>
      <p className={styles.footerText}>
        Don't have an account? 
        <button onClick={toggleForm} className={styles.link}>Create one now!</button>
      
      </p>
    </>
  );
};

export default LoginForm;
