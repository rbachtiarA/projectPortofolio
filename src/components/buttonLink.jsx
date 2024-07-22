import twitterIMG from '../assets/Xtwitter.svg'
import linkIMG from '../assets/link.svg'
import facebookIMG from '../assets/facebook.svg'
import githubIMG from '../assets/github.svg'


export default function ButtonLink(data) {
    const placeholder = {
        img: '',
        anchor: ''
    }
    switch (data.type) {
        case 'twitter':
            placeholder.img = twitterIMG
            placeholder.anchor = 'https://x.com' 
            break;
        case 'facebook':        
            placeholder.img = facebookIMG
            placeholder.anchor = 'https://facebook.com' 
            break;
        case 'github':        
            placeholder.img = githubIMG
            placeholder.anchor = 'https://github.com/rbachtiarA' 
            break;
        default:
            placeholder.img = linkIMG
            placeholder.anchor = 'https://github.com/rbachtiarA/' 
            break;
    }


    return (
        <div className='w-[24px] hover:scale-105 transition'>
            <a href={placeholder.anchor} target='_blank'>
                <img src={placeholder.img} alt={data.type} />
            </a>
        </div>       
    )
}