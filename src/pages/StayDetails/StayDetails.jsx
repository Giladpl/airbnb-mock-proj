import './StayDetails.scss'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReviewList } from '../../cmps/ReviewList/ReviewList';
import cutlerySvg from '../../assets/img/cutlery.svg';
import fireplaceSvg from '../../assets/img/fireplace.svg';
import hangerSvg from '../../assets/img/hanger.svg';
import heatSvg from '../../assets/img/heat.svg';
import parkingSvg from '../../assets/img/parking.svg';
import snowflakeSvg from '../../assets/img/snowflake.svg';
import tvSvg from '../../assets/img/television.svg';
import wifiSvg from '../../assets/img/wifi.svg';

export const StayDetails = ({match}) => {
    const dispatch = useDispatch();
    const [currStay, setCurrStay] = useState(null);

    const allAmenities = {
        TV: tvSvg,
        Wifi: wifiSvg,
        Kitchen: cutlerySvg,
        Hangers: hangerSvg,
        'Smoking allowed': '',
        'Pets allowed': '',
        'Cooking basics': '',
        'Free parking on premises': parkingSvg,
        'Indoor fireplace': fireplaceSvg,
        Essentials: '',
        Heating: heatSvg,
        'Air conditioning': snowflakeSvg
    }

    useEffect(() => {
        setCurrStay(dispatch(getStayById(match.params.id)));
    }, [match.params.id])

    return (
        currStay && <section className="stay-details">
            <h1>{currStay.name}</h1>
            <div className="img-container">
                {currStay.imgUrls.map(imgUrl => <img src={imgUrl} alt=""/>)}
            </div>
            <div className="host-container">
                <h3>Hosted by {currStay.host.fullname}</h3>
                <img src={currStay.host.imgUrl} alt=""/>
            </div>
            <div>
                {currStay.properties.accommodates} guest 
                {currStay.properties.type} 
                {currStay.properties.bed} bed 
                {currStay.properties.bath} bath 
            </div>
            <p className="summary">
                {currStay.summary}
            </p>
            <div className="amenities">
                <h3>Amenities</h3>
                <div>
                    {currStay.amenities.map(amenity => {
                        <div>
                            <img src={allAmenities[amenity]} alt=""/>
                            <p>{amenity}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className="reviews">
                <h3>Rate</h3>
                <div className="rate-list">

                </div>
                <ReviewList reviews={currStay.reviews} />
            </div>
        </section>
    )
}

