import './RateList.scss'
import { RatePreview } from '../RatePreview';
export const RateList = ({ rates }) => {

    return (
        <div className="rate-list flex">
            {rates && rates.map((rate, idx) => <RatePreview key={idx} rate={rate} />)}
        </div>
    )
}

