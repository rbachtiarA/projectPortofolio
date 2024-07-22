import ButtonNav from "../components/buttonNav";
import mainpagesIMG from "../assets/mainpages.png"
import Freepik from "../components/freepik";
export default function Mainpage() {
    const data = {
        id: 'READ MORE >',
        route: '/profile',
        type: 'default'
    }
    return (
        <div className="w-full flex flex-row row gap-6 p-5 flex-wrap lg:flex-nowrap lg:flex-row-reverse">
            
            <div className="flex flex-col gap-6 my-auto m-3 md:min-w-[375px] md:max-w-[1000px]">
                <h1 className="font-extrabold text-5xl">Hey, Welcome to my blog <br />I&apos;m <em><span className="tracking-wide bg-clip-text text-transparent bg-gradient-to-bl from-amber-300 to-orange-500">Nick Norton</span></em></h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cumque, mollitia laudantium commodi officiis quod, aliquam, ratione eius odio esse quaerat vitae in dignissimos recusandae! Inventore necessitatibus impedit nihil laborum accusamus. Quia et iusto rem accusamus corporis ducimus, suscipit, perspiciatis porro deleniti omnis totam perferendis dolore facere ut reprehenderit laboriosam.</p>
                <Freepik />
                <div className="font-semibold">
                    <ButtonNav btnData={data}/>
                </div>
            </div>
            <div className="md:bg-beach bg-contain flex my-auto md:rounded-full md:border-8 md:min-w-[600px] md:border-orange-500">
                <img className="rounded-full" src={mainpagesIMG} alt="photo nick" />
            </div>

        </div>
    )
}