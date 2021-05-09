

import './RatePreview.scss'

export const RatePreview = ({ rate }) => {
    const barPercentStyle = {
        width: (100 * rate.val / 5) + 'px',
        backgroundColor: '#222222',
        height: '5px',
        borderRadius: '50px'
    };

    return (
        <article className="rate-preview flex-between">
            <div className="left-container">{rate.property}</div>
            <div className="right-container flex">
                <div className="bar">
                    <div style={barPercentStyle}></div>
                </div>
                <div>{(rate.val).toFixed(1)}</div>
            </div>
        </article>
    )
}

