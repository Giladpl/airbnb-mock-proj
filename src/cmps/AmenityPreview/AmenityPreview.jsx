import './AmenityPreview.scss'
import cutlerySvg from '../../assets/img/cutlery.svg';
import fireplaceSvg from '../../assets/img/fireplace.svg';
import hangerSvg from '../../assets/img/hanger.svg';
import heatSvg from '../../assets/img/heat.svg';
import parkingSvg from '../../assets/img/parking.svg';
import snowflakeSvg from '../../assets/img/snowflake.svg';
import tvSvg from '../../assets/img/television.svg';
import wifiSvg from '../../assets/img/wifi.svg';
import smokingSvg from '../../assets/img/cigarette.svg';
import petSvg from '../../assets/img/pet.svg';
import bakeSvg from '../../assets/img/bake.svg';

export const AmenityPreview = ({ item }) => {
    const allAmenities = {
		TV: tvSvg,
		Wifi: wifiSvg,
		Kitchen: cutlerySvg,
		Hangers: hangerSvg,
		'Smoking allowed': smokingSvg,
		'Pets allowed': petSvg,
		'Cooking basics': bakeSvg,
		'Free parking on premises': parkingSvg,
		'Indoor fireplace': fireplaceSvg,
		Heating: heatSvg,
		'Air conditioning': snowflakeSvg,
	};

    return (
        <article className="amenity-preview flex">
            <img src={allAmenities[item]} alt='' />
            <p>{item}</p>
        </article>
    )
}

