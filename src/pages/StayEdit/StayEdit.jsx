import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { stayService } from '../../services/stayService';
import { countryCodes } from '../../services/countryService';
import { saveStay } from '../../store/actions/stayActions';

import { ImageUploader } from '../../cmps/ImageUploader';

import { Input } from '../../cmps/Input';

import './StayEdit.scss';

export const StayEdit = () => {
	const [stay, setStay] = useState(null);
	const [errMsg, setErrMsg] = useState('');

	const [urls, setUrls] = useState([]);

	const dispatch = useDispatch();
	const history = useHistory();
	const params = useParams();

	useEffect(() => {
		const { id } = params;
		(async () => {
			try {
				const stay = id
					? await stayService.getById(id)
					: stayService.getEmptyStay();
				console.log(stay);
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
		return id ? 'Edit Current Stay' : 'Add New Stay';
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
		<React.Fragment>
			<h1>{getTitle()}</h1>
			{!stay && <div>{errMsg || 'Loading'}</div>}
			{stay && (
				<form
					className='stay-edit'
					onSubmit={onSaveStay}
					className='flex-column'
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

					<ImageUploader isMultiple={true} urls={urls} setUrls={setUrls} />

					<p>{errMsg}</p>
					<button>Save Stay</button>
				</form>
			)}
		</React.Fragment>
	);
};
