import { Button } from "@material-ui/core";
import { useState } from "react";

const ImageUpload = () => {
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {};

  return (
    <div>
      <input
        type="text"
        placeholder="Enter caption..."
        onChange={(event) => setCaption(event.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default ImageUpload;
