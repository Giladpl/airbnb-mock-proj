import './StayDetails.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getStayById } from '../../store/actions/stayActions';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import { stayService } from '../../services/stayService';
import { CheckModal } from '../../cmps/CheckModal/CheckModal';
import { GenericList } from '../../cmps/GenericList/GenericList';
import { AmenityPreview } from '../../cmps/AmenityPreview/AmenityPreview';
import { RatePreview } from '../../cmps/RatePreview';
import { ReviewPreview } from '../../cmps/ReviewPreview';

export const StayDetails = ({ match }) => {
    const dispatch = useDispatch();
    const [currStay, setCurrStay] = useState(null);
    const [avgRate, setAvgRate] = useState(null);
    const [listAvgRate, setListAvgRate] = useState(null);

    useEffect(() => {
        (async () => {
            const stay = await dispatch(getStayById(match.params.id));
            setCurrStay(stay);
            setAvgRate(stayService.getTotalAvgRate(stay).toFixed(2))
            setListAvgRate(stayService.getListAvgRate(stay))
        })();
    }, [match.params.id, dispatch]);

    function propertyFormatted(property, content) {
        if (!property) return
        content = property === 1 ? content : content + 's'
        return property + ' ' + content
    }

    return (
        currStay && (
            <section className="stay-details main-layout">
                <h1>{currStay.name}</h1>
                <div className="desc">
                    <StarSvg fill='#FF385C' /> {avgRate} ({currStay.reviews.length} reviews) ∙ {currStay.loc.address}
                </div>
                <div className="img-container grid">
                    {currStay.imgUrls.map((imgUrl, idx) => (
                        <img className={"img" + idx} key={idx} src={imgUrl} alt='' />
                    ))}
                </div>
                <div className="main flex">
                    <div className="main-content">
                        <div className="host-container flex-between">
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
                        <div className="summary">{currStay.summary}</div>
                        <GenericList
                            sectionClassName="amenity-list"
                            classNames="clean-list"
                            CmpToRender={AmenityPreview}
                            items={currStay.amenities}
                            headingText="Amenities"
                            headingLevel="3"
                        />
                    </div>
                    <CheckModal stay={currStay} avgRate={avgRate} />
                </div>
                <div className="reviews">
                    <div className="review-title">
                        <StarSvg fill='#FF385C' /> {avgRate} ({currStay.reviews.length} reviews)
				    </div>
                    <div className="rate">
                        <GenericList
                            classNames="rate-list flex clean-list"
                            CmpToRender={RatePreview}
                            items={listAvgRate}
                        />
                    </div>
                    <GenericList
                        classNames="review-list flex clean-list"
                        CmpToRender={ReviewPreview}
                        items={currStay.reviews}
                    />
                </div>
            </section>
        )
    );
};
