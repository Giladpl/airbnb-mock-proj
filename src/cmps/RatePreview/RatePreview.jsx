

import './RatePreview.scss'

export const RatePreview = ({ item }) => {
    const barPercentStyle = {
        width: (100 * item.val / 5) + 'px',
        backgroundColor: '#222222',
        height: '5px',
        borderRadius: '50px'
    };

    return (
        <article className="rate-preview flex-between">
            <div className="left-container">{item.property}</div>
            <div className="right-container flex">
                <div className="bar">
                    <div style={barPercentStyle}></div>
                </div>
                <div>{(item.val).toFixed(1)}</div>
            </div>
        </article>
    )
}

