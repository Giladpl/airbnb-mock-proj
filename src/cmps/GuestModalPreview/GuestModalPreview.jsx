import { useState } from 'react';
import './GuestModalPreview.scss'

export const GuestModalPreview = ({title, desc, num = 0}) => {
    let [currNum, setCurrNum] = useState(num);

    function updateNum(operator) {
        if (operator === '-' && currNum === 0) return;
        if (operator === '-') setCurrNum(--currNum);
        else setCurrNum(++currNum);
    }

    return (
        <article className="guest-modal-preview flex-between">
            <div className="flex-column">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
            <div className="add-guest flex">
                <div className="minus flex-center" onClick={()=> updateNum('-')}>-</div>
                <div>{currNum}</div>
                <div className="plus flex-center" onClick={()=> updateNum('+')}>+</div>
            </div>
        </article>
    )
}

