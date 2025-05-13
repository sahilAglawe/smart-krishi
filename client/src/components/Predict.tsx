// src/components/Predict.tsx

import React, { useState } from "react";

const Predict = () => {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handlePredict = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data.prediction);
    } catch (error) {
      console.error("Prediction failed:", error);
      setResult("Error predicting.");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button
        onClick={handlePredict}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4"
      >
        Predict Disease
      </button>
      {result && <p className="mt-4 text-lg text-green-700">Prediction: {result}</p>}
    </div>
  );
};

export default Predict;
