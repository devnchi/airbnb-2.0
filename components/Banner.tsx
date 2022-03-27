import Image from 'next/image';

type Props = {}

function Banner({}: Props) {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image
            src='https://ultravilla-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2018/12/06110536/Ocean-Mauritius-Villanovo-UltraVilla-1024x828.jpeg'
            layout='fill'
            objectFit='cover'
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='2xl:text-5xl md:text-lg mb-8 font-bold text-white'>Let's find your perfect stay now!</p>

            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 duration-150'>
                I'm flexible
            </button>
        </div>
    </div>
  )
}

export default Banner