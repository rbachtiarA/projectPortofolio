export default function Heading(data) {
    return (
        <div className="mx-auto text-center">
            <h1 className="uppercase text-5xl font-bold">{data.headingData.title}</h1>
            <p>{data.headingData.desc}</p>
        </div>
    )
}