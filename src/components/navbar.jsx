import ButtonNav from "./buttonNav";
import BrandLogo from "../assets/react.svg"

export default function Navbar() {
    const data = [
    {id: "Main", icon: "", route: "/", type:'nav'},
    {id: "Profile", icon: "", route: "/Profile", type:'nav'},
    {id: "About Me", icon: "", route: "/About", type:'nav'},
    {id: "My Project", icon: "", route: "/Projects",type:'nav'},
    {id: "My Review", icon: "", route: "/Review", type:'nav'},
    {id: "My Contact", icon: "", route: "/Contact", type: 'nav'}
    ]
    return (
        <div className="flex flex-col text-[#F7E7DC] font-semibold w-[100px] my-auto">
            <div className="font-bold self-center mb-5 animate-spin">
                <img src={BrandLogo} alt="Brand Logo" />
            </div>
            
            <div className="bg-[#405D72] rounded-full flex flex-col gap-2 p-2">

                {data.map((obj) => <ButtonNav key={obj.id} btnData={obj} />)}
                
                {/* <button>Main</button>
                <button>Profile</button>
                <button>About Me</button>
                <button>My Project</button>
                <button>My Review</button>
                <button>Contact Me</button> */}
            </div>
        </div>
    )
}