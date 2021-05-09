import './StayDetails.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReviewList } from '../../cmps/ReviewList/ReviewList';
import { getStayById } from '../../store/actions/stayActions';
import { AmenityList } from '../../cmps/AmenityList/AmenityList';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import { stayService } from '../../services/stayService';

export const StayDetails = ({ match }) => {
    const dispatch = useDispatch();
    const [currStay, setCurrStay] = useState(null);
    const [avrgRate, setAvrgRate] = useState(null);

    useEffect(() => {
        (async () => {
            const stay = await dispatch(getStayById(match.params.id));
            setCurrStay(stay);
            setAvrgRate(stayService.getTotalAvgRate(stay))
        })();
    }, [match.params.id, dispatch]);

    function propertyFormatted(property, content) {
        if (!property) return
        content = property === 1 ? content : content + 's'
        return property + ' ' + content
    }

    return (
        currStay && (
            <section className='stay-details main-layout'>
                <h1>{currStay.name}</h1>
                <div className='img-container grid'>
                    {currStay.imgUrls.map((imgUrl, idx) => (
                        <img className={'img' + idx} key={idx} src={imgUrl} alt='' />
                    ))}
                </div>
                <div className='host-container flex-between'>
                    <div>
                        <h3>Hosted by {currStay.host.fullname}</h3>
                        <div className="property-container flex">
                            <div>{propertyFormatted(currStay.properties.accommodates, 'guest')} ∙</div>
                            <div>{currStay.properties.type} ∙</div>
                            <div>{propertyFormatted(currStay.properties.bad, 'bad')} ∙</div>
                            <div>{propertyFormatted(currStay.properties.bath, 'bath')}</div>
                        </div>
                    </div>
                    <img src={currStay.host.imgUrl} alt='' />
                </div>
                <div className='summary'>{currStay.summary}</div>
                <AmenityList amenities={currStay.amenities} />
                <div className='reviews'>
                    <div>
                        <StarSvg fill='#FF385C' /> {avrgRate} ({currStay.reviews.length} reviews)
				    </div>
                    <div className='rate-list'></div>
                    <ReviewList reviews={currStay.reviews} />
                </div>
            </section>
        )
    );
};
