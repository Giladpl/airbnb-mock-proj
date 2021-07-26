import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { stayService } from '../../services/stayService';
import { countryCodes } from '../../services/countryService';
import { saveStay } from '../../store/actions/stayActions';
import { ImageUploader } from '../../cmps/ImageUploader';
import { StayMap } from '../../cmps/StayMap';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import './StayEdit.scss';

export const StayEdit = ({ loggedInUser }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const params = useParams();

	const loggedinUser = useSelector((state) => state.userReducer.loggedinUser);
	const [stay, setStay] = useState(null);
	const [errMsg, setErrMsg] = useState('');
	const [urls, setUrls] = useState([]);
	const [coords, setCoords] = useState(null);
	const [amenities, setAmenities] = useState([]);
	const allAmenities = [
		'TV',
		'Wifi',
		'Kitchen',
		'Hangers',
		'Smoking allowed',
		'Pets allowed',
		'Cooking basics',
		'Free parking on premises',
		'Indoor fireplace',
		'Heating',
		'Air conditioning',
	];

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	useEffect(() => {
		const { id } = params;
		(async () => {
			try {
				let stay;
				if (id) {
					stay = await stayService.getById(id);
				} else {
					stay = stayService.getEmptyStay();
					stay.host = {
						_id: loggedinUser._id,
						fullname: loggedinUser.fullname,
						imgUrl: loggedinUser.imgUrl,
					};
				}
				setStay(stay);
			} catch (err) {
				setErrMsg('Stay Not Found');
			}
		})();
	}, []);

	useEffect(() => {
		if (stay) {
			setUrls(stay.imgUrls);
			setAmenities(stay.amenities);
		}
	}, [stay]);

	useEffect(() => {
		const { id } = params;
		if (id && stay) {
			setCoords([
				{
					lat: stay.loc.lat,
					lng: stay.loc.lng,
					price: null,
				},
			]);
		} else {
			setCoords([
				{
					lat: 32.0852997,
					lng: 34.7818064,
					price: null,
				},
			]);
		}
	}, []);

	useEffect(() => {
		if (!stay) return;
		(async () => {
			try {
				const { data } = await axios.get(
					`https://nominatim.openstreetmap.org/reverse.php?lat=${stay.loc.lat}&lon=${stay.loc.lng}&zoom=18&format=jsonv2`
				);
				const city =
					data.address.city || data.address.village || data.address.town;
				const subdistrict = data.address.state_district || data.address.county;
				const address = `${data.address.country}, ${subdistrict}, ${city}`;
				setStay({
					...stay,
					loc: { ...stay.loc, address, country: data.address.country },
				});
			} catch (error) {
				console.log(error);
			}
		})();
	}, [coords]);

	const handleChange = ({ target }) => {
		const field = target.name;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		if (target.type === 'number') value = +value;

		if (field === 'country') {
			setStay({ ...stay, loc: { ...stay.loc, country: value } });
		} else if (
			field === 'accommodates' ||
			field === 'bad' ||
			field === 'bath' ||
			field === 'type'
		) {
			setStay({ ...stay, properties: { ...stay.properties, [field]: value } });
		} else if (field === 'amenities') {
			setStay({ ...stay, amenities: [...value] });
			setAmenities(value);
		} else setStay({ ...stay, [field]: value });
	};

	const onClearHandler = async () => {
		const initialState = await stayService.getEmptyStay();
		setStay(initialState);
	};

	const onSaveStay = async (ev) => {
		ev.preventDefault();
		try {
			await dispatch(saveStay(stay));
			history.push('/');
		} catch (err) {
			console.log(err);
		}
	};

	const getTitle = () => {
		const { id } = params;
		return id ? 'Edit Stay' : 'Add New Stay';
	};

	const setCountryCode = () => {
		const countryCode =
			countryCodes.find(
				(country) =>
					country.name.toLowerCase() === stay.loc.country.toLowerCase()
			)?.code || 'Invalid Country Name';

		setStay({ ...stay, loc: { ...stay.loc, countryCode } });
	};

	const setStayCoords = ({ lat, lng }) => {
		setCoords([
			{
				lat,
				lng,
				price: null,
			},
		]);
		setStay({ ...stay, loc: { ...stay.loc, lat, lng } });
	};

	return (
		<section className='stay-edit main-layout'>
			<h1>{getTitle()}</h1>
			{!stay && <div>{errMsg || 'Loading'}</div>}
			{stay && (
				<form className='flex-column' onSubmit={onSaveStay}>
					<TextField
						required
						label='Name'
						type='text'
						value={stay.name}
						onChange={handleChange}
						name='name'
					/>
					<TextField
						required
						label='Description'
						multiline
						rowsMax={8}
						value={stay.summary}
						onChange={handleChange}
						name='summary'
						// variant='outlined'
					/>
					<TextField
						required
						inputProps={{ min: 0 }}
						label='Price per night'
						value={stay.price}
						onChange={handleChange}
						name='price'
						type='number'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>$</InputAdornment>
							),
						}}
					/>

					<InputLabel className='input-label' id='amenities-select'>
						Amenities
					</InputLabel>
					<Select
						labelId='amenities-select'
						multiple
						value={amenities}
						onChange={handleChange}
						name='amenities'
						input={<Input />}
						renderValue={(selected) => selected.join(', ')}
						MenuProps={MenuProps}
					>
						{allAmenities.map((amenity) => (
							<MenuItem key={amenity} value={amenity}>
								<Checkbox checked={amenities.indexOf(amenity) > -1} />
								<ListItemText primary={amenity} />
							</MenuItem>
						))}
					</Select>
					<TextField
						required
						inputProps={{ min: 0 }}
						label='Accommodates'
						value={stay.properties.accommodates}
						onChange={handleChange}
						name='accommodates'
						type='number'
					/>
					<TextField
						required
						inputProps={{ min: 0 }}
						label='Number of bads'
						value={stay.properties.bad}
						onChange={handleChange}
						name='bad'
						type='number'
					/>
					<TextField
						required
						inputProps={{ min: 0 }}
						label='Number of baths'
						value={stay.properties.bath}
						onChange={handleChange}
						name='bath'
						type='number'
					/>
					<TextField
						required
						label="Apartment's type:"
						value={stay.properties.type}
						onChange={handleChange}
						name='type'
						type='text'
					/>
					<TextField
						required
						label='Country'
						type='text'
						value={stay.loc.country}
						onChange={handleChange}
						onBlur={setCountryCode}
						name='country'
					/>
					<TextField
						disabled
						label='Country Code'
						value={stay.loc.countryCode}
					/>
					<TextField disabled label='Address' value={stay.loc.address} />

					{coords && (
						<StayMap
							staysForMap={coords}
							isEdit={true}
							setStayCoords={setStayCoords}
						/>
					)}

					<button onClick={onClearHandler} className='btn'>
						Clear Form
					</button>
					<ImageUploader isMultiple={true} urls={urls} setUrls={setUrls} />
					<p>{errMsg}</p>
					<button className='btn'>Save Stay</button>
				</form>
			)}
		</section>
	);
};
