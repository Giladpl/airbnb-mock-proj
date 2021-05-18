

import { GuestModalPreview } from '../GuestModalPreview/GuestModalPreview'
import './GuestModal.scss'

export const GuestModal = (props) => {

    return (
        <section className="guest-modal">
            <GuestModalPreview title="Adults" desc="Ages 13 or above" />
            <GuestModalPreview title="Children" desc="Ages 2-12" />
            <GuestModalPreview title="Infants" desc="Under 2" />
        </section>
    )
}

