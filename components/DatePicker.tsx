import { useState } from 'react';
import { useRouter } from 'next/router';
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'
import { UsersIcon } from '@heroicons/react/solid'

type Props = {}

function DatePicker({}: Props) {
  const [searchInput, setSearchInput] = useState<any>('');
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  const [noOfGuests, setNoOfGuests] = useState<any>(1);
  const router = useRouter();   


  const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection'
  };

  const handleSelect = (ranges:any) => {
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
                    <button className='flex-grow text-red-400' onClick={() => {search(); resetInput()}}>
                    Search</button>
                </div>
            </div>
        )}        
    </div>
  )
}

export default DatePicker