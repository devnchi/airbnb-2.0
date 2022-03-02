import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard'

type Props = {
  exploreData: any,
  cardsData: any,

}

function Home({ exploreData, cardsData }: Props) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby
          </h2>

          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, distance, location }:{img:string, distance:string, location:string}) => (
              <SmallCard 
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }:{ img:string, title:string }) => (
              <MediumCard
                key={img}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then(
    (res) => res.json()
  );
  
  const cardsData = await fetch('https://links.papareact.com/zp1').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    }
  }
  
}

export default Home;
