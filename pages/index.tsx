import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import Breadcrumbs from '../components/Breadcrumbs'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Loading from '../components/Loading'


export interface ResponseData
{
  error: string;
  totalCount: number;
  events: {
    id: string;
    title: string;
    startDate: [Object];
    doors: string;
    ticketsUrl: string;
    websiteImage: string;
    venue: string;
  };
}

export interface AllShowsProps {
  onMenuToggle: () => void;
  mobileMenuOpen?: boolean;
  SSRdata: ResponseData;
}

export default function AllShows({ onMenuToggle, mobileMenuOpen, SSRdata }: AllShowsProps)
{
  const [events, setEvents] = useState<ResponseData>(SSRdata);
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
  if (!events) return <p>No Limelight events</p>

  const gigs = events?.events;

  return (
    <div className={styles.container}>
      <Header route='All Shows'/>
      <NavBar onMenuToggle={onMenuToggle} isOpen={mobileMenuOpen}/>
      <Breadcrumbs />
      <main className={styles.main}>
        <Layout title='All Shows' data={gigs} >
          {(!isLoading && gigs instanceof Array) && gigs?.map((event: any, index: number) => (
            <Card
              key={event.id}
              gig={{
                time: event?.doors,
                startDate: event?.startDate,
                name: event?.title,
                support: event?.subTitle,
                location: event?.venue,
                websiteImage: event?.websiteImage,
                ticketsUrl: event?.ticketsUrl,
                status: event?.isSoldOut
              }}
            />
          ))}
        </Layout>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`https://www.venuecloud.net/api/events?venueCloudId=10`);
  const data = await res.json()

  return {
      props: {SSRdata: data}
  }
}
