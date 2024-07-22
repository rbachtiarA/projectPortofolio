import CardProject from "../components/projectCard";
import IconBug from "../assets/bug.svg"
import IconShield from "../assets/shield.svg"
import IconPallete from "../assets/pallete.svg"
import IconKnight from "../assets/knight.svg"
import IconTrolley from "../assets/trolley.svg"
import Svgrepo from "../components/svgrepo";
import Heading from "../components/heading";
const projectCollections = [

    {projectTitle: 'Web & App Design',
     desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis laudantium sint rerum. Cupiditate, repellat.`,
     iconImg: IconPallete,
    },
    {projectTitle: 'Privacy & Secure Data Design',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis laudantium sint rerum. Cupiditate, repellat.`,
    iconImg: IconShield,
    },
    {projectTitle: '4D Chess Browser',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis laudantium sint rerum. Cupiditate, repellat.`,
    iconImg: IconKnight,
    },
    {projectTitle: 'Bug Analyst App',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis laudantium sint rerum. Cupiditate, repellat.`,
    iconImg: IconBug,
    },
    {projectTitle: 'E-commerce Web and App Design',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos facilis laudantium sint rerum. Cupiditate, repellat.`,
    iconImg: IconTrolley,
    },
]
const heading = {
    title: 'My Projects',
    desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nesciunt nobis omnis sit ab laborum beatae aliquid vitae suscipit autem.`
}
export default function Project() {
    return (
        <div className="flex flex-col mb-auto mt-10 gap-10 p-5">

            <Heading headingData={heading}/>

            <div className="flex flex-row flex-wrap my-auto gap-10 justify-center lg:justify-normal">
                {projectCollections.map((obj, idx) => <CardProject key={idx} id={idx} projectData={obj} />)}
            </div>
            
            <div>
                <Svgrepo />
            </div>

        </div>
    )
}