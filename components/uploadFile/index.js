import React from "react";
import { Button } from "@mui/material";
import "./uploadFile.css";

const UploadImage = ({ name, text, handleUploadClick, imageInputRef }) => {
	return (
		<Button variant="contained" component="label" className="upload-file1">
			{text}
			<input
				// accept="image/*"
				name="img"
				type="file"
				multiple
				onChange={(e) => handleUploadClick(e, name)}
				ref={imageInputRef}
				hidden
			/>
		</Button>
	);
};

export default UploadImage;
