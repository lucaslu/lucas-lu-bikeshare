import React, { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState(null);

  // Event handler for when the user selects a file
  const handleChange = (event) => {
    // Update the state with the selected file
    setFile(() => event.target.files[0]);
  };

  // Event handler for when the user clicks the upload button
  const handleUpload = () => {
    // Create a new FormData object
    const formData = new FormData();

    // Add the selected file to the FormData object
    formData.append("image", file);

    // Send a POST request to the server with the FormData object
    fetch("https://lucas-lu-bikeshare-api.herokuapp.com/image", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
