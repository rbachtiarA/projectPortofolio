import ReviewCard from "../components/reviewCard";
import profilePlaceholderIMG from '../assets/profilePlaceholder.png'
import Heading from "../components/heading";

export default function Review() {
    const heading = {
        title: 'My Review',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, odio nostrum quis adipisci sunt ad.`
    }

    const reviewData = [
        {
            name: 'Kang Adam',
            occ: 'CEO JNE Express',
            img: profilePlaceholderIMG,
            star: 1,
            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem vel tenetur, fugit nobis, non sit ex minus officiis sapiente, voluptatibus et? Dolor quasi quam aut voluptate illo, possimus soluta?`
        },
        {
            name: 'Kang Budi',
            occ: "Tukang 'Bakso' Keliling",
            img: profilePlaceholderIMG,
            star: 4,
            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem vel tenetur, fugit nobis, non sit ex minus officiis sapiente, voluptatibus et? Dolor quasi quam aut voluptate illo, possimus soluta?`
        },
        {
            name: 'Teh Clarisa',
            occ: 'Istri Tetangga',
            img: profilePlaceholderIMG,
            star: 5,
            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem vel tenetur, fugit nobis, non sit ex minus officiis sapiente, voluptatibus et? Dolor quasi quam aut voluptate illo, possimus soluta?`
        },
        {
            name: 'Diana',
            occ: 'Senior Software Dev Shopee',
            img: profilePlaceholderIMG,
            star: 2,
            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem vel tenetur, fugit nobis, non sit ex minus officiis sapiente, voluptatibus et? Dolor quasi quam aut voluptate illo, possimus soluta?`
        }
    ]

    return (
        <div className="flex flex-col mb-auto mt-10 gap-10 p-5">
            <Heading headingData={heading}/>
            
            <div className="flex flex-row">
                {reviewData.map((obj) => <ReviewCard key={obj.name} data={obj}/>)}
            </div>

            <div>
                Pengen dibuat animation slideshow
            </div>
        </div>
    )
}