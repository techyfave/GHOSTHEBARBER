import axios from 'axios';
import { db } from '../../firebase/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';

import {Container} from "react-bootstrap"

const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = async (e) => {
    if (!image) return;

    // Upload to Cloudinary
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'haircut_upload'); // From Cloudinary settings
    formData.append('folder', 'haircut'); // From Cloudinary settings

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dpsrsij99/image/upload`,
      formData
    );

    const imageUrl = response.data.secure_url;

    // Save the URL to Firestore
    await addDoc(collection(db, "haircuts"), {
      imageUrl: imageUrl,
      title: title,
      description: description,
      createdAt: serverTimestamp(),
    });

    alert("Image uploaded successfully!");


    setFile(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div style={{minHeight:"100vh"}} className='p-5 white-gold'>
      <Container className='border p-3 w-50'>
         <input
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='form-control w-100 mb-4 border'
      />

      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='form-control w-100 mb-4 border'
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} 
      className='form-control w-50 mb-5'
      />
      <button className='btn gold-bg text-white' type='button' onClick={handleUpload}>Upload Image</button>
      </Container>
    </div>
  );
};

export default UploadImage;
