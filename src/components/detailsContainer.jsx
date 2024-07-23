import ButtonLink from "./buttonLink";
import Detailsdata from "./details";

export default function DetailsContainer() {
    const data = [
        {
            title: 'Name', 
            detail: 'Nick Norton'
        },
        {
            title: 'Age', 
            detail: '33 years'
        },
        {
            title: 'Location', 
            detail: 'Hertogenbosch, The Netherlands'
        },
    ]
    return (
        <div className="flex flex-col gap-3 border h-full lg:h-[400px] bg-white rounded-2xl shadow-2xl p-5">
            <strong className="border-b-2 border-black">Details</strong>

            {data.map((obj) => <Detailsdata key={obj.title} detailHandler={obj}/>)}
        
            <div className="flex flex-row justify-end">
                <div className="flex flex-row gap-3">
                    <ButtonLink type={'github'}/>
                    <ButtonLink type={'twitter'}/>
                    <ButtonLink type={'facebook'}/>
                </div>
            </div>
        </div>
    )
}