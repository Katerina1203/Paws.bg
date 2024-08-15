"use client";

import { useState } from 'react';
import styles from './loginregister.module.css';
import Image from 'next/image';

export default function LoginRegister() {
    const [isLogin, setIsLogin] = useState(true);
  
    const toggleForm = () => setIsLogin(!isLogin);
  
    return (
      <div className={styles.container}>
        <div className={`${styles.imgContainer} ${isLogin ? styles.photoLogin : styles.photoRegister}`}>
          <Image
            src={isLogin ? "/family-with-dog.jpg" : "/girl-with-cat.jpg"}
            alt={isLogin ? "Family with dog" : "Girl with cat"}
            fill
            className={styles.img}
          />
        </div>
        <div className={`${styles.formContainer} ${isLogin ? styles.loginActive : styles.registerActive}`}>
          {isLogin ? (
            <>
              <h2 className={styles.title}>Sign In</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
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
                Don't have an account? <button onClick={toggleForm} className={styles.link}>Register</button>
              </p>
            </>
          ) : (
            <>
              <h2 className={styles.title}>Register</h2>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="confirmPassword">Confirm Password</label>
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
          )}
        </div>
      </div>
    );
  }