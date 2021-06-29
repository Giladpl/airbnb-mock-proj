import { uploadImg } from '../../services/imgUploadService';
import './ImageUploader.scss';

import React, { useState } from 'react';

export const ImageUploader = ({ isMultiple, urls, setUrls }) => {
	const [images, setImages] = useState([]);

	const uploadImageHandler = async () => {
		for (let i = 0; i < 5; i++) {
			if (!images[i]) break;
			const data = await uploadImg(images[i]);
			setUrls([...urls, data.url]);
		}
	};

	const setImageHandler = (event) => {
		if(images.length && images[4]) return;
		const imagesToSet = [0, 0, 0, 0, 0];

		if (isMultiple) {
			imagesToSet.forEach((_, i) => (imagesToSet[i] = event.target.files[i]));
			setImages(imagesToSet);
		} else {
			images[0] = event.target.files[0];
			setImages(images);
		}
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
					onChange={setImageHandler}
					// onChange={(e) => setImage(e.target.files[0])}
				></input>
				{images && (
					<button className='btn' onClick={uploadImageHandler}>
						Upload
					</button>
				)}
			</div>
			{urls && (
				<div>
					{urls.map((url, idx) => (
						<img key={idx} src={url} alt='user-img' />
					))}
				</div>
			)}
		</div>
	);
};
