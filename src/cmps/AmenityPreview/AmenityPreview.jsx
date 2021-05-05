import './AmenityPreview.scss'
import cutlerySvg from '../../assets/img/cutlery.svg';
import fireplaceSvg from '../../assets/img/fireplace.svg';
import hangerSvg from '../../assets/img/hanger.svg';
import heatSvg from '../../assets/img/heat.svg';
import parkingSvg from '../../assets/img/parking.svg';
import snowflakeSvg from '../../assets/img/snowflake.svg';
import tvSvg from '../../assets/img/television.svg';
import wifiSvg from '../../assets/img/wifi.svg';

export const AmenityPreview = ({ amenity }) => {
    const allAmenities = {
		TV: tvSvg,
		Wifi: wifiSvg,
		Kitchen: cutlerySvg,
		Hangers: hangerSvg,
		'Smoking allowed': '',
		'Pets allowed': '',
		'Cooking basics': '',
		'Free parking on premises': parkingSvg,
		'Indoor fireplace': fireplaceSvg,
		Essentials: '',
		Heating: heatSvg,
		'Air conditioning': snowflakeSvg,
	};

    return (
        <article className="amenity-preview">
            <img src={allAmenities[amenity]} alt='' />
            <p>{amenity}</p>
        </article>
    )
}

