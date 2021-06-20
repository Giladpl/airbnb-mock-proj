import './ImageUploader.scss';

import React, { useState } from 'react';

export const ImageUploader = () => {
	const [image, setImage] = useState('');
	const [url, setUrl] = useState('');
	const uploadImage = () => {
		const data = new FormData();
		data.append('file', image);
		data.append('upload_preset', 'fmi6iwhx');
		data.append('cloud_name', 'dpurt6mxc');
		fetch('  https://api.cloudinary.com/v1_1/dpurt6mxc/image/upload', {
			method: 'post',
			body: data,
		})
			.then((resp) => resp.json())
			.then((data) => {
				setUrl(data.url);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div>
				<input
					type='file'
					onChange={(e) => setImage(e.target.files[0])}
				></input>
				<button onClick={uploadImage}>Upload</button>
			</div>
			{url && <div>
				<img src={url} alt="user"/>
			</div>}
		</div>
	);
};
