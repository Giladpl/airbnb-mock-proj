import React from 'react';
import GoogleMapReact from 'google-map-react';
import './StayMap.scss';

export const StayMap = ({ staysForMap, isEdit, setStayCoords }) => {
	const MapPointer = ({ text }) => (
		<div className='map-pointer flex-center'>{isEdit ? '🏡' : text + '$'}</div>
	);

	// const setStayCoords = ({ lat, lng }) => setStayCoords(lat, lng);

	return (
		<div className={isEdit ? 'stay-map-edit' : 'stay-map'}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyBsbWW_j5vN7MzBo8lfGNvBXo4u4l_VGMw',
					language: 'en',
					region: 'US',
				}}
				// yesIWantToUseGoogleMapApiInternals={true}
				defaultCenter={{ lat: staysForMap[0].lat, lng: staysForMap[0].lng }}
				defaultZoom={12}
				onClick={setStayCoords}
			>
				{staysForMap.map((stay, idx) => (
					<MapPointer
						key={idx}
						lat={stay.lat}
						lng={stay.lng}
						text={stay.price}
					/>
				))}
			</GoogleMapReact>
		</div>
	);
};
