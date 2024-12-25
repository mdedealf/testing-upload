"use client";

import Image from "next/image";
import React, { ChangeEvent, FC, useState } from "react";

const ProfilePage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
      console.log(event.target.files);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      alert("Please select an image first");
      return;
    }

    setLoading(true);

    try {
      const apiUrl = "https://api.sepasangselamanya.tech/api/v1/public/upload";

      const formData = new FormData();
      formData.append("file", image); // File to upload
      formData.append("uploadContext", "public-images"); // Default value

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const res = await response.json();
        console.log(res);
        setUploadedImageUrl(res.data);
        alert("Image uploaded successfully");
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen p-20 w-full bg-white text-black">
      <div className="flex flex-col justify-center w-full mx-auto items-center gap-4 h-full">
        <span className="text-lg font-bold">Upload user picture</span>
        <input
          type="file"
          placeholder="Select file"
          onChange={handleImageChange}
        />
        <button
          className="bg-blue-400 px-4 py-2 rounded-lg"
          onClick={uploadImage}
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {uploadedImageUrl && (
          <Image
            src={uploadedImageUrl}
            height={300}
            width={300}
            alt="Uploaded Image"
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
