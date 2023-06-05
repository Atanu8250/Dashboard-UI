import AuthProvider from '@/components/AuthProvider'
import styles from './page.module.css'

export default function Home() {
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
                              <div className={styles["input-grp"]}>
                                   <label htmlFor="email">Email address</label>
                                   <input name='email' type="email" placeholder='Enter your Email' defaultValue='johndoe@gmail.com' />
                              </div>
                              <div className={styles["input-grp"]}>
                                   <label htmlFor="pwd">Password</label>
                                   <input name='pwd' type="password" placeholder='Enter your Password' defaultValue='johndoe' />
                              </div>
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
