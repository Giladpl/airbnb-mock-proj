

import { AmenityPreview } from '../AmenityPreview/AmenityPreview'
import './AmenityList.scss'

export const AmenityList = ({ amenities }) => {

    return (
        <div className="amenity-list">
            {amenities && amenities.map((amenity, idx) => <AmenityPreview key={idx} amenity={amenity} />)}
        </div>
    )
}

