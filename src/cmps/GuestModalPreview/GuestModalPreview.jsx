import './GuestModalPreview.scss'

export const GuestModalPreview = ({title, desc, num = 0, updateNumOfGuests}) => {
    return (
        <article className="guest-modal-preview flex-between">
            <div className="flex-column">
                <h4>{title}</h4>
                <p>{desc}</p>
            </div>
            <div className="add-guest flex">
                <div className="minus flex-center" onClick={()=> updateNumOfGuests('-', title)}>-</div>
                <div>{num}</div>
                <div className="plus flex-center" onClick={()=> updateNumOfGuests('+', title)}>+</div>
            </div>
        </article>
    )
}

