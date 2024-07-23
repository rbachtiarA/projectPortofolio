export default function Detailsdata(data) {
    return (
        <div className="border-b-2 border-dashed border-silver">
            <h4 className="font-semibold text-lg">{data.detailHandler.title} :</h4>
            <p>{data.detailHandler.detail}</p>
        </div>
    )
}