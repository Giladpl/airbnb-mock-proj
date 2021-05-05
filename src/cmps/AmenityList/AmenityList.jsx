

import { AmenityPreview } from '../AmenityPreview/AmenityPreview'
import './AmenityList.scss'

export const AmenityList = ({ amenities }) => {

    return (
        <div className="amenity-list">
            <h3>Amenities</h3>
            {amenities && amenities.map((amenity, idx) => <AmenityPreview key={idx} amenity={amenity} />)}
        </div>
    )
}

