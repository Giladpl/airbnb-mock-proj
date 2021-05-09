

import './RatePreview.scss'

export const RatePreview = ({ rate }) => {
    const barPercentStyle = {
        width: (100 * rate.val / 5) + 'px',
        backgroundColor: '#222222',
        height: '5px',
        borderRadius: '50px'
    };

    return (
        <article className="rate-preview flex">
            <div>{rate.property}</div>
            <div className="bar">
                <div style={barPercentStyle}></div>
            </div>
            <div>{rate.val}</div>
        </article>
    )
}

