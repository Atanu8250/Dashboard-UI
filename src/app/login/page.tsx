'use client'
import styles from '@/styles/Login.module.css';
import InputElem from '@/components/InputElem';
import AuthProvider from '@/components/AuthProvider';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function Home() {
     const router = useRouter();
     const { data: session } = useSession();

     if (session) router.push('/');

     return (
          <main className={styles.main}>
               {/* LEFT side bar */}
               <aside className={styles['left-side']}>
                    <h1>Board.</h1>
               </aside>

               {/* Sign-in section */}
               <section className={styles['right-side']}>
                    <section className={styles['main-content']}>
                         <h1>Sign In</h1>
                         <p>Sign in to your account</p>
                         <div className={styles['auth-providers']}>
                              <AuthProvider logo={'/google-icon.svg'} title='Google' />
                              <AuthProvider logo={'/apple-icon.svg'} title='Apple' />
                         </div>

                         <form>
                              <InputElem type='email' label='Email address' defaultValue='johndoe@gmail.com' placeholder='Enter your Email' />
                              <InputElem type='password' label='Password' defaultValue='johndoe' placeholder='Enter your Password' />
                              <a href="#">Forgot Password?</a>
                              <button type="submit">Sign In</button>
                         </form>

                         <p>
                              Don&apos;t have an account? <span>Register here</span>
                         </p>
                    </section>
               </section>
          </main>
     )
}
