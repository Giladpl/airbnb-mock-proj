import axios from 'axios';

export const uploadImg = async (file) => {
    const UPLOAD_PRESET = 'fmi6iwhx' // Insert 
    const CLOUD_NAME = 'dpurt6mxc' // Insert 
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    FORM_DATA.append('file', file)
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    FORM_DATA.append('cloud_name', CLOUD_NAME) //OPTIONAL
    
    try {
        const { data } = await axios.post(UPLOAD_URL, FORM_DATA)
        return data;
    } catch (err) {
        console.error('ERROR!', err)
    }
}