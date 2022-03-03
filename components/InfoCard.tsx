import Image from 'next/image'

type Props = {
    img: string,
    location: string,
    title: string,
    description: string,
    star: string,
    price: any,
    total: any,
}

function InfoCard({ img, location, title, description, star, price, total }: Props) {
  return (
    <div className='relative h-24 w-40'>
        <Image 
            src={img}
            layout='fill'
            objectFit='cover'
        />
    </div>
  )
}

export default InfoCard