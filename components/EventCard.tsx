import Image from "next/image";
import Link from "next/link";

interface Props {
    title: string;
    image: string;
    location: string;
    slug: string;
    date: string;
    time: string;
}

const EventCard = ({title, image, location, slug, date, time}: Props) => {

    return (
        <Link href={`/events/${slug}`} id='event-card'>
            <Image src={image} alt='event-image' width={410} height={300} className='poster'/>
            <div className='flex flex-row gap-2'>
                <img src='/icons/pin.svg' alt='location' width={14} height={14}/>
                <p id='location'>{location}</p>
            </div>
            <p className='title'>{title}</p>
            <div className='datetime'>
                <div>
                    <Image src='/icons/calendar.svg' alt='date' width={14} height={14}/>
                    <p>{date}</p>
                </div>
                <div>
                    <Image src='/icons/clock.svg' alt='date' width={14} height={14}/>
                    <p>{time}</p>
                </div>

                <p className='time'>{time}</p>
            </div>
        </Link>


    )
}
export default EventCard
