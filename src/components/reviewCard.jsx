import StarReview from './reviewStar'
export default function ReviewCard(reviewData) {
    return (
        <div className='w-1/3'>
            {/* image */}
            <div className='flex flex-col items-center gap-3'>
                <img className="w-[120px] h-[120px] border-orange-400 border-4 rounded-full" src={reviewData.data.img} alt="image placeholder" />

                <div className='w-[16px] h-[16px] flex flex-row justify-center'>
                    {/* star */}
                    <span>~</span>
                    <StarReview num={reviewData.data.star}/>
                    <span>~</span>
                </div>
            </div>

            <div className='text-center'>
                {/* review */}
                <p>{reviewData.data.review}</p>
            </div>

            <div className='text-sm flex flex-col items-end'>
                {/* name & profesion/company */}
                <strong className='uppercase'>{reviewData.data.name}</strong>
                <p className='m-0 text-slate-500 leading-3'>{reviewData.data.occ}</p>
            </div>


        </div>
    )
}