import StarGlow from "./starGlow"
import StarNotGlow from "./starNotGlow"

export default function StarReview(star) {
    const indices = []
    for(let i = 0;i < 5;i++) {
        i < star.num ? indices.push(true) : indices.push(false)
    }

    return (
        indices.map((val) => {
            return val ? <StarGlow /> : <StarNotGlow />
        })
    )
}