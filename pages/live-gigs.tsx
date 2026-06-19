import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Loading from '../components/Loading'
import { ResponseData } from './index'

export interface LiveGigsProps {
  onMenuToggle: () => void;
  mobileMenuOpen?: boolean;
  SSRdata: ResponseData;
}

export default function LiveGigs({ onMenuToggle, mobileMenuOpen, SSRdata }: LiveGigsProps)
{
  const [events, setEvents] = useState(SSRdata);
  const [venueCloudId, setVenueCloudId] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEvents = async () => {
    setIsLoading(true)
    const response = await fetch(`https://www.venuecloud.net/api/events?venueCloudId=${venueCloudId}`);
    const data = await response.json();
    setEvents(data);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venueCloudId]);


  if (isLoading) return <Loading/>
  if (!events) return <p>No Limelight live shows</p>

  const gigs = events?.events;

  return (
    <div className={styles.container}>
      <Header route='Live Shows' />
      <NavBar onMenuToggle={onMenuToggle} isOpen={mobileMenuOpen} />
      <Breadcrumbs />
      <main className={styles.main}>
        <Layout title='Live Shows' data={gigs}>
          {(!isLoading && gigs instanceof Array) && gigs?.map((gig: any, index: number) => (
            <Card
              key={index}
              gig={{
                time: gig?.doors,
                startDate: gig?.startDate,
                name: gig?.title,
                support: gig?.subTitle,
                location: gig?.venue,
                websiteImage: gig?.websiteImage,
                ticketsUrl: gig?.ticketsUrl,
                status: gig?.isSoldOut
              }}
            />
          ))}
        </Layout>
      </main>
      <Footer />
    </div>
  )
};

  export const getStaticProps = async () =>{
    const res = await fetch(`https://www.venuecloud.net/api/events?venueCloudId=10`);
    const data = await res.json()

    return {
        props: {SSRdata: data}
    }
  }

