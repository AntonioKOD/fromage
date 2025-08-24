
import { FeatureSteps } from './blocks/feature-section'
import wine_flight from '@/public/wine_flight.jpeg'
import lunch_sandwich from '@/public/lunch_sandwich.jpeg'
import appetizer_hour from '@/public/appetizer_hour.jpeg'


const specials = [
    {
        step: 'Step 1',
        title: 'Daily Wine Flights',
        content: 'Explore four pours curated daily from our favorite regions. $25 every day, all day.',
        image: wine_flight.src
    },
    {
        step: 'Step 2',
        title: 'Appetizer Hour',
        content: 'Join us for select small plates only $5. Weekdays from 1-6pm',
        image: appetizer_hour.src
    },
    {
        step: 'Step 3',
        title: 'Lunch Sandwiches',
        content: 'Savor our gourmet sandwiches at a 20% discount, available Tuesday though Saturday, 12:15pm to 2:45pm!',
        image: lunch_sandwich.src
    }
]


export default function Specials(){
    return(
        <div className='-mt-14'>
            <h1 className='font-serif text-3xl md:text-4xl text-center'>Pour Decisions</h1>
            <h3 className='text-center font-serif'>{`(The kind you won't regret tomorrow)`}</h3>
            <FeatureSteps features={specials} />
        </div>
    )
}