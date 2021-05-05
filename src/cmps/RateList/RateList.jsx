import './RateList.scss'
import { RatePreview } from '../ReviewPreview';
export const RateList = ({ rates }) => {

    return (
        <div className="rate-list">
            {rates && rates.map((rate, idx) => <RatePreview key={idx} rate={rate} />)}
        </div>
    )
}

