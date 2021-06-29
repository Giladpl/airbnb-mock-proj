import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { stayService } from '../../services/stayService';
import { countryCodes } from '../../services/countryService';
import { saveStay } from '../../store/actions/stayActions';
import { ImageUploader } from '../../cmps/ImageUploader';
import { Input } from '../../cmps/Input';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import ListItemText from '@material-ui/core/ListItemText';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
import './StayEdit.scss';

export const StayEdit = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const params = useParams();

	const [stay, setStay] = useState(null);
	const [errMsg, setErrMsg] = useState('');
	const [urls, setUrls] = useState([]);
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
		'Air conditioning'
	]

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
				const stay = id
					? await stayService.getById(id)
					: stayService.getEmptyStay();
				setStay(stay);
			} catch (err) {
				setErrMsg('Stay Not Found');
			}
		})();
	}, []);

	useEffect(() => {
		if (stay) setUrls(stay.imgUrls);
	}, [stay]);

	const handleChange = ({ target }) => {
		const field = target.name;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		if (target.type === 'number') value = +value;

		if (field === 'country') {
			setStay({
				...stay,
				loc: { ...stay.loc, country: value },
			});
			return;
		}

		// if (field === 'country') {
		// 	const loc = stay.loc;
		// 	loc.country = value;
		// 	setStay({ ...stay, loc });
		// }

		setStay({ ...stay, [field]: value });
	};

	const handleChangeSelect = (event) => {
		setAmenities(event.target.value);
	};

	const onClearHandler = async () => {
		const initialState = await stayService.getEmptyStay();
		setStay(initialState);
	};

	const onSaveStay = async (ev) => {
		ev.preventDefault();
		try {
			const res = await dispatch(saveStay(stay));
			if (res) history.push('/stay');
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

	return (
		<section className='stay-edit main-layout'>
			<h1>{getTitle()}</h1>
			{!stay && <div>{errMsg || 'Loading'}</div>}
			{stay && (
				<form
					className='flex-column'
					onSubmit={onSaveStay}
				>
					<Input
						required
						labelText='Name: '
						type='text'
						value={stay.name}
						onChange={handleChange}
						name='name'
					/>
					<Input
						required
						labelText='Description: '
						rows='5'
						type='textarea'
						value={stay.summary}
						onChange={handleChange}
						name='summary'
					/>
					<Input
						required
						labelText='Price: '
						type='number'
						value={stay.price}
						onChange={handleChange}
						name='price'
						min='1'
					/>
					<Input
						onBlur={setCountryCode}
						required
						labelText='Country:'
						type='text'
						value={stay.loc.country}
						onChange={handleChange}
						name='country'
					/>
					<p>Country Code: {stay.loc.countryCode}</p>
					{/* <InputLabel id='amenities-select'>Amenities</InputLabel>
					<Select
						labelId='amenities-select'
						multiple
						value={amenities}
						onChange={handleChangeSelect}
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
					</Select> */}

					<ImageUploader isMultiple={true} urls={urls} setUrls={setUrls} />

					<p>{errMsg}</p>
					<button>Save Stay</button>
				</form>
			)}
		</section>
	);
};
