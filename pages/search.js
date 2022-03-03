import Footer from '../components/Footer';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import { useState } from 'react';

function Search({ searchResults }) {
  const router = useRouter();

  // ES6 allows you to destructure variables and objects
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`
  const formatNoOfGuests = () => {
    if (noOfGuests > 1) {
      return (
        'guests'
      )
    } else {
      return (
        'guest'
      )
    }
  }
  const [searchInput, setSearchInput] = useState('');

  const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection'
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
      setSearchInput('')
  };

  const search = () => {
      router.push({
          pathname: '/search',
          query: {
              location: searchInput,
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
              noOfGuests,
          },
      });
  };

  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} ${formatNoOfGuests()}`} />

        {searchInput && (
            <div className='flex flex-col col-span-3 mx-auto'>
                <DateRangePicker 
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#fd5b61']}
                    onChange={handleSelect}
                />
                <div className='flex items-center border-b mb-4'>
                    <h2 className='text-2xl flex-grow font-semibold'>Number of Guests
                    </h2>
                    <UsersIcon className='h-5' />
                    <input 
                        value={noOfGuests} 
                        onChange={(e) => setNoOfGuests(e.target.value)} type='number' 
                        min={1}
                        className='w-12 pl-2 text-lg outline-none text-red-400' 
                    />
                </div>
                <div className='flex'>
                    <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
                    <button className='flex-grow text-red-400' onClick={search}
                    >Search</button>
                </div>
            </div>
        )}

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays - {range} - {noOfGuests} {formatNoOfGuests()}</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>
                        Cancellation Flexibility
                    </p>
                    <p className='button'>
                        Type of Place
                    </p>
                    <p className='button'>
                        Price
                    </p>
                    <p className='button'>
                        Rooms and Beds
                    </p>
                    <p className='button'>
                        More Filters
                    </p>
                </div>
                <div className='flex flex-col'>
                    {searchResults.map(({ img, location, title, description, star, price, total }) => (
                        <InfoCard
                            key={img}
                            img={img}
                            location={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}
                </div>
            </section>
        </main>

        <Footer />
    </div>
    
  )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json());

    return {
        props: {
            searchResults,
        }
    }
}