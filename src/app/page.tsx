"use client";

import { useState } from "react";
import ReactCrop, { type Crop } from "react-image-crop";
import demo from "./demo.jpg";
import Image from "next/image";
import "react-image-crop/dist/ReactCrop.css";

const data = [
  { name: "instagram", aspect: 1 },
  { name: "youtube", aspect: 16 / 9 },
  { name: "facebook", aspect: 1 },
  { name: "tiktok", aspect: 9 / 16 },
];

export default function Home() {
  const [crop, setCrop] = useState<Crop | undefined>({
    unit: "%",
    width: 50,
    height: 50,
    x: 0,
    y: 0,
  });
  const [aspect, setAspect] = useState(data[0]["aspect"]);

  return (
    <div>
      <ReactCrop
        crop={crop}
        aspect={aspect}
        onChange={(c) => setCrop(c)}
        style={{ border: "1px solid black" }}
      >
        <Image src={demo} alt="demo" width={500} height={500} />
      </ReactCrop>
      <div>
        <select
          onChange={(e) => {
            setAspect(Number.parseFloat(e.target.value));
            setCrop(undefined);
          }}
        >
          {data.map((d) => (
            <option key={d.name} value={d.aspect}>
              {d.name}
            </option>
          ))}
        </select>
        <p>Aspect ratio: {aspect}</p>
      </div>
    </div>
  );
}
