import { uploadImg } from '../../services/imgUploadService';
import './ImageUploader.scss';

import React, { useState } from 'react';

export const ImageUploader = () => {
	const [image, setImage] = useState('');
	const [url, setUrl] = useState('');
	const uploadImage = async () => {
		const data = await uploadImg(image);
		setUrl(data.url);
	};
	return (
		<div className='image-uploader'>
			<div className='btns'>
				<label className='btn' htmlFor='file-upload'>
					Choose
				</label>
				<input
					hidden
					id='file-upload'
					className='btn'
					type='file'
					onChange={(e) => setImage(e.target.files[0])}
				></input>
				{image && <button className='btn' onClick={uploadImage}>
					Upload
				</button>}
			</div>
			{url && (
				<div>
					<img src={url} alt='user' />
				</div>
			)}
		</div>
	);
};
