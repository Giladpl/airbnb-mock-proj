

import './RatePreview.scss'

export const RatePreview = ({ rate }) => {

    return (
        <article className="rate-preview flex">
            <div>{rate.property}</div>
            <div className="bar"></div>
            <div>{rate.val}</div>
        </article>
    )
}

