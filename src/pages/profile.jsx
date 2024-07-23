import Freepik from "../components/freepik";
import ProfileIMG from '../assets/profilpage.png';
import ButtonLink from "../components/buttonLink";

export default function Profile() {
    return (
        <div className="flex flex-col lg:justify-center gap-10 p-5">
            <div className="flex flex-col gap-5 mx-auto text-center ">
                <h1 className="font-bold text-lg md:text-5xl">PROFILE</h1>
                <p className="text-lg md:text-3xl">I&apos;m <span className="text-orange-400 font-extrabold">
                    Fullstack Web Development</span>
                </p>
            </div>

            <div className="flex flex-col md:flex-row md:justify-around gap-5">
                <div className="w-full md:w-1/5 flex flex-col gap-5" >
                    <strong className="border-b-2 border-black">About Me</strong>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum mollitia architecto quas odio est numquam perferendis! Odit sunt laudantium ut, dignissimos id ea maiores delectus alias magnam, ipsa asperiores fugit adipisci ipsum illum accusamus cum quasi labore nesciunt nemo voluptate ratione. Aliquam in aliquid quo. Laborum nesciunt quasi dolore?</p>
                    <Freepik />
                </div>

                <div className="w-full md:w-1/3 flex justify-center">
                    <img className="bg-white rounded-full shadow-2xl h-[360px] w-[360px] object-cover " src={ProfileIMG} alt="Place Holder" />
                </div>
                
                <div className="flex flex-col gap-3 border h-full md:h-[400px] bg-white rounded-2xl shadow-2xl p-5">
                    <strong className="border-b-2 border-black">Details</strong>
                    <div className="border-b-2 border-dashed border-silver">
                        <h4 className="font-semibold text-lg">Name :</h4>
                        <p>Nick Norton</p>
                    </div>

                    <div className="border-b-2 border-dashed border-silver">
                        <h4 className="font-semibold text-lg">Age :</h4>
                        <p>33 years</p>
                    </div>

                    <div className="border-b-2 border-dashed border-silver">
                        <h4 className="font-semibold text-lg">Location :</h4>
                        <p>Hertogenbosch, The Netherlands</p>
                    </div>
                    
                    <div className="flex flex-row justify-end">
                        <div className="flex flex-row gap-3">
                            <ButtonLink type={'github'}/>
                            <ButtonLink type={'twitter'}/>
                            <ButtonLink type={'facebook'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}