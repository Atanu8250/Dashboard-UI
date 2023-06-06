/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useEffect, useState } from 'react';
import styles from '@/styles/Dashboard.module.css';
import SideNav from '@/components/SideNav';
import ViewCard from '@/components/ViewCard';
import LineChart from '@/components/LineChart';
import PieChart from '@/components/PieChart';
import ScheduleBar from '@/components/ScheduleBar';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';

const navigations = [
     {
          title: "Dashboard",
          icon: "/dashboard_icon.svg"
     },
     {
          title: "Transactions",
          icon: "/transaction_icon.svg"
     },
     {
          title: "Schedules",
          icon: "/schedule_icon.svg"
     },
     {
          title: "Users",
          icon: "/user_icon.svg"
     },
     {
          title: "Settings",
          icon: "/setting_icon.svg"
     },

]

const cardData = [
     {
          title: "Total Revenues",
          amount: 2129430,
          icon: "/revenue_icon.svg",
          isPrice: true,
          bgColor: '#DDEFE0'
     },
     {
          title: "Total Transactions",
          amount: 1520,
          icon: "/total_transaction_icon.svg",
          isPrice: false,
          bgColor: '#F4ECDD'
     },
     {
          title: "Total Likes",
          amount: 9721,
          icon: "/like_icon.svg",
          isPrice: false,
          bgColor: '#EFDADA'

     },
     {
          title: "Total Users",
          amount: 892,
          icon: "/users_icon.svg",
          isPrice: false,
          bgColor: '#DEE0EF'
     },

]

const schedularData = [
     {
          title: "Meeting with suppliers from Kuta Bali",
          dateAndTime: "14.00-15.00",
          location: "at Sunset Road, Kuta, Bali",
          stripeColor: '#9BDD7C',
     },
     {
          title: "Check operation at Giga Factory 1",
          dateAndTime: "18.00-20.00",
          location: "at Central Jakarta",
          stripeColor: '#6972C3',
     }

]

function Dashboard() {
     const router = useRouter();
     const [showUserInfo, setShowUserInfo] = useState<boolean>(false)
     const { data: session, status } = useSession();
     const [isSessionValidated, setIsSessionValidated] = useState<boolean>(false);

     useEffect(() => {
          const checkSession = async () => {
               console.log({ status, session })
               if (status === 'unauthenticated' && session === null) {
                    // Session has expired or is invalid, redirect to login
                    router.push('/login');
               } else if (status === 'authenticated' && session !== null) {
                    // Session is valid
                    setIsSessionValidated(true);
               }
          };

          const timeout = setTimeout(checkSession, 2000); // Check session after 2 sec

          return () => {
               clearTimeout(timeout); // Clean up the interval on component unmount
          };
     }, [session, status, router]);


     return !isSessionValidated ? <Loading /> : (
          <div className={styles.container}>
               <aside className={styles.sidebar}>
                    <h1>Board.</h1>

                    <ul className={styles.navigations}>
                         {
                              navigations.map(el => <li key={el.title}>
                                   <SideNav title={el.title} icon={el.icon} />
                              </li>)
                         }
                    </ul>

                    <ul className={styles.about}>
                         <li>Help</li>
                         <li>Contact Us</li>
                    </ul>
               </aside>

               <section className={styles['main-content']}>
                    {/* Header section */}
                    <section className={styles.header}>
                         <h1>Dashboard</h1>
                         <div>
                              <div className={styles['search-input']}>
                                   <input type="search" placeholder='Search here...' />
                                   <img src='/search_icon.svg' alt="Search icon" />
                              </div>
                              <div className={styles['bell-icon']}>
                                   <img src="/bell_icon.svg" alt="bell-icon" />
                              </div>
                              <div className={styles.profile}>
                                   <div onClick={() => setShowUserInfo(prev => !prev)}>
                                        <img src={session?.user?.image || 'https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50141.jpg'} alt="user-profile" />
                                   </div>
                                   <article 
                                   className={styles['user-info']} 
                                   style={{right: (showUserInfo ? '10px' : '-250px')}}
                                   >
                                        <div>
                                             <img src={session?.user?.image || 'https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50141.jpg'} alt="user-profile" />
                                        </div>
                                        <p>Name: {session?.user?.name || "--"}</p>
                                        <p>{session?.user?.email || "--"}</p>
                                        <button
                                             onClick={() => { signOut() }}
                                        >Sign-out
                                        </button>
                                   </article>
                              </div>
                         </div>
                    </section>

                    {/* View cards */}
                    <section className={styles['view-cards']}>
                         {
                              cardData.map(card => <ViewCard key={card.title} data={card} />)
                         }
                    </section>

                    {/* Line - chart */}
                    <LineChart />


                    <section className={styles['bottom-part']}>
                         <PieChart />

                         <section className={styles['today-schedule']}>
                              <div>
                                   <h3>Today&apos;s schedule</h3>
                                   <a href="#">See All &gt;</a>
                              </div>

                              <div>
                                   {
                                        schedularData.map(el => <ScheduleBar key={el.title} data={el} />)
                                   }
                              </div>
                         </section>
                    </section>
               </section>
          </div>
     )
}

export default Dashboard;

