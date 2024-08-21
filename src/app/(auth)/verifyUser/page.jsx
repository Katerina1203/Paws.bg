"use client"
import React, { useState } from 'react';
import LoginForm from '@/components/loginForm/LoginForm';
import RegisterForm from '@/components/registerForm/RegisterForm';
import styles from './verifyuser.module.css';
import Image from 'next/image';
import { handleGoogleLogin } from '@/lib/action'
const FormSwitcher = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

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
            <div>
          <LoginForm toggleForm={toggleForm} />
          
          <form action={handleGoogleLogin} className={styles.link}>
          <button>Or Sign in using your Google account</button>
        </form>
            </div>
        ) : (
         
          <RegisterForm toggleForm={toggleForm} />
        
        )}
      </div>
    </div>
  );
};

export default FormSwitcher;
