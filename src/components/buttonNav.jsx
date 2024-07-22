import { Link } from "react-router-dom"
import arrowRight from "../assets/arrowRight.svg"
export default function ButtonNav(props) {
    let styleType = '';
    switch (props.btnData.type) {
        case `nav`:
            styleType = `bg-[#758694] rounded-full hover:bg-[#455D72] 
            hover:scale-110 w-full px-2 py-6 rounded-full transition
            shadow-2xl hover:shadow-inner`
            break;
    
        default:
            styleType = "shadow-md rounded-full px-6 py-2 bg-white text-black hover:bg-black hover:text-white transition"
            break;  
    }
    return (
        // eslint-disable-next-line react/jsx-key
            <Link to={props.btnData.route}>
                <button className= {styleType}>
                    {/* <img src={data.icon} alt={data.id} /> */}
                    {props.btnData.id}
                </button>
            </Link>
            // <button className="hover:bg-cyan-600">{props.btnData.id}</button>
            
        
    )
}