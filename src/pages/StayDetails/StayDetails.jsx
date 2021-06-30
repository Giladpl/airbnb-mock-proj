import './StayDetails.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStayById, saveStay } from '../../store/actions/stayActions';
import { ReactComponent as StarSvg } from '../../assets/svgs/star.svg';
import { stayService } from '../../services/stayService';
import { CheckModal } from '../../cmps/CheckModal/CheckModal';
import { GenericList } from '../../cmps/GenericList/GenericList';
import { AmenityPreview } from '../../cmps/AmenityPreview/AmenityPreview';
import { RatePreview } from '../../cmps/RatePreview';
import { ReviewPreview } from '../../cmps/ReviewPreview';
import { orderService } from '../../services/orderService';
import { saveOrder } from '../../store/actions/orderActions';
import { AddReview } from '../../cmps/AddReview/AddReview';

export const StayDetails = ({ match }) => {
    const dispatch = useDispatch();
    const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
    const [currStay, setCurrStay] = useState(null);
    const [order, setOrder] = useState(orderService.getEmptyOrder())
    const [avgRate, setAvgRate] = useState(null);
    const [listAvgRate, setListAvgRate] = useState(null);
    const [review, setReview] = useState(stayService.getEmptyReview())
    let [guestNum, setGuestNum] = useState({
        Adults: 1,
        Children: 0,
        Infants: 0,
    });
    let [startDate, setStartDate] = useState(null);
    let [endDate, setEndDate] = useState(null);
    let [diffInDays, setDiffInDays] = useState(null);
    let [isCheck, setIsCheck] = useState(false);
    const guestImg = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png';

    useEffect(() => {
        (async () => {
            const stay = await dispatch(getStayById(match.params.id));
            setCurrStay(stay);
            setAvgRate(stayService.getTotalAvgRate(stay).toFixed(2))
            setListAvgRate(stayService.getListAvgRate(stay))
            if(!loggedinUser) setReview({ ...review, by: { _id: 'guest', fullname: 'Guest', imgUrl: guestImg } });
            else setReview({ ...review, by: { _id: loggedinUser._id, fullname: loggedinUser.fullname, imgUrl: loggedinUser.imgUrl } });
        })();
    }, [match.params.id, dispatch]);

    useEffect(() => {
        if(!currStay) return;
        setAvgRate(stayService.getTotalAvgRate(currStay).toFixed(2))
        setListAvgRate(stayService.getListAvgRate(currStay))
    }, [review])

    useEffect(() => {
        if (loggedinUser && currStay) dispatch(saveOrder(order))
    }, [order])

    const propertyFormatted = (property, content) => {
        if (!property) return
        content = property === 1 ? content : content + 's'
        return property + ' ' + content
    }

    const updateNumOfGuests = (operator, type) => {
        if (operator === '-' && !guestNum[type]) return;
        if (operator === '-' && type === 'Adults' && guestNum.Adults === 1) return;
        if (operator === '-') setGuestNum({ ...guestNum, [type]: --guestNum[type] });
        else setGuestNum({ ...guestNum, [type]: ++guestNum[type] });
    }

    const handleDatesChange = ({ startDate, endDate }) => {
        setStartDate(startDate);
        setEndDate(endDate);
        if (!endDate || !startDate) return;
        setDiffInDays((endDate._d.getTime() - startDate._d.getTime()) / (1000 * 3600 * 24));
    };

    const calcPrice = () => {
        if (!currStay) return;
        let adultsPrice = 0;
        if (guestNum.Adults > 1) adultsPrice = (guestNum.Adults - 1) * 100;
        const childrenPrice = guestNum.Children ? guestNum.Children * 50 : 0;
        return diffInDays * currStay.price + adultsPrice + childrenPrice;
    }

    const onCheckAvailability = () => {
        setIsCheck(!isCheck)
        if (isCheck) {
            setOrder({
                ...order,
                buyer: {
                    _id: loggedinUser._id,
                    fullname: loggedinUser.fullname
                },
                totalPrice: calcPrice() + 27 + 30,
                startDate,
                endDate,
                guests: {
                    adults: guestNum.Adults,
                    children: guestNum.Children,
                    infants: guestNum.Infants
                },
                state: {
                    _id: currStay._id,
                    name: currStay.name,
                    hostId: currStay.host._id
                }
            })
        }
    }

    const onAddReview = async (ev) => {
        ev.preventDefault();
        await setCurrStay({ ...currStay, reviews: [...currStay.reviews, review] })
        await dispatch(saveStay(currStay));
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
                    <CheckModal
                        stay={currStay}
                        avgRate={avgRate}
                        updateNumOfGuests={updateNumOfGuests}
                        guestNum={guestNum}
                        startDate={startDate}
                        endDate={endDate}
                        handleDatesChange={handleDatesChange}
                        diffInDays={diffInDays}
                        calcPrice={calcPrice}
                        isCheck={isCheck}
                        onCheckAvailability={onCheckAvailability}
                    />
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
                    <AddReview
                        review={review}
                        setReview={setReview}
                        loggedinUser={loggedinUser}
                        onAddReview={onAddReview}
                    />
                </div>
            </section>
        )
    );
};
