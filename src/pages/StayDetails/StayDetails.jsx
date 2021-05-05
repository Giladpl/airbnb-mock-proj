import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './StayDetails.scss'

export const StayDetails = (props) => {
    const dispatch = useDispatch();
    const [currStay, updateCurrStay] = useState(null)

    useEffect(() => {
        currStay = dispatch(getStayById(props.match.params.id));
    }, [props.match.params.id])

    return (
        currStay && <section className="stay-details">
            <h1>{currStay.name}</h1>
            <div className="img-container">
                {currStay.imgUrls.map(imgUrl => <img src={imgUrl} alt=""/>)}
            </div>
            
        </section>
    )
}

