"use client"
import styles from './registerform.module.css';
import { useRouter } from "next/navigation";

const RegisterForm = ({ toggleForm }) => {

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const username = formData.get('username');
      const email = formData.get('email');
      const password = formData.get('password');
      const confirmPassword = formData.get('confirmPassword');
      const response = await fetch(`/api/register`, {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword
        })
      });

      response.status === 201 &&   router.push("/");
       } catch (e) {
      console.error(e);
      setError("Incorrect credentials!");
  }
  }
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className={styles.input}
          />
        </div>
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
        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
      <p className={styles.footerText}>
        Already have an account? <button onClick={toggleForm} className={styles.link}>Sign In</button>
      </p>
    </>
  );
};

export default RegisterForm;
