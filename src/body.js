import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { getStorage, ref } from "firebase/storage";


const fileTypes = ["JPG", "PNG", "GIF","CSV"];

function Dropdown() {

  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    
  };

  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
  // Create a root reference
const storage = getStorage();

// Create a reference to 'mountains.jpg'
const mountainsRef = ref(storage, file);
}







export default Dropdown;
