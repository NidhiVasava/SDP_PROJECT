import.meta.env = {
  "VITE_CLOUD_NAME": "nidhivasava",
  "VITE_CLOUD_PRESET": "doctor-booking-system",
  "BASE_URL": "/",
  "MODE": "development",
  "DEV": true,
  "PROD": false,
  "SSR": false
};

const uploadCloudinary = async file => {
  const uploadData = new FormData();
  uploadData.append('file', file);
  uploadData.append('upload_preset', import.meta.env.VITE_CLOUD_PRESET);
  uploadData.append('cloud_name', import.meta.env.VITE_CLOUD_NAME); // Using the environment variable

  const res = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
    method: 'post',
    body: uploadData
  });

  const data = await res.json();

  return data;
}

export default uploadCloudinary;



/*=import.meta.env.VITE_UPLOAD_PRESET
 import.meta.env.VITE_CLOUD_NAME

const uploadCloudinary = async file =>{

    const uploadData = new FormData()

    uploadData.append('file', file)
    uploadData.append('upload_preset', 'doctor-booking-system')
    uploadData.append('cloud_name', nidhivasava)

    const res = await fetch(`https://api.cloudinary.com/v1_1/nidhivasava/image/upload`,{
        method:'post',
        body:uploadData
    })

    const data = await res.json()

    return data
}

export default uploadCloudinary;
*/

/*const uploadCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'doctor-booking-system'); // Specify your upload preset name here

  try {
    const response = await fetch('https://api.cloudinary.com/v1_1/nidhivasava/image/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error uploading image to Cloudinary: ' + (error.message || 'Unknown error'));
  }
};

export default uploadCloudinary;*/


