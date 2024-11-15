import React from "react";

// Manually import all images for states
// import andamanImage from "../assets/images/image-inside/AndamanandNicobar.jpeg";
import andhrapradeshImage from "../assets/images/image-inside/AndhraPradesh.jpeg";
// import arunachalpradeshImage from "../assets/images/image-inside/ArunachalPradesh.jpeg";
import assamImage from "../assets/images/image-inside/Assam.jpeg";
import biharImage from "../assets/images/image-inside/Bihar.jpeg";
// import chandigarhImage from "../assets/images/image-inside/Chandigarh.jpeg";
import chattisgarhImage from "../assets/images/image-inside/Chattisgarh.jpeg";
// import dadraandnagarImage from "../assets/images/image-inside/DadraandNagar.jpeg";
import delhiImage from "../assets/images/image-inside/Delhi.jpeg";
import goaImage from "../assets/images/image-inside/Goa.jpeg";
import gujaratImage from "../assets/images/image-inside/Gujarat.jpeg";
import haryanaImage from "../assets/images/image-inside/Haryana.jpeg";
import himachalImage from "../assets/images/image-inside/HimachalPradesh.jpeg";
import jkImage from "../assets/images/image-inside/JammuandKashmir.jpeg";
import jharkhandImage from "../assets/images/image-inside/Jharkhand.jpeg";
import KarnatakaImage from "../assets/images/image-inside/Karnataka.jpeg";
import keralaImage from "../assets/images/image-inside/Kerala.jpeg";
// import lakshdweepImage from "../assets/images/image-inside/Lakshdweep.jpeg";
import mpImage from "../assets/images/image-inside/MadhyaPradesh.jpeg";
import maharashtraImage from "../assets/images/image-inside/Maharashtra.jpeg";
// import manipurImage from "../assets/images/image-inside/Manipur.jpeg";
// import meghalayaImage from "../assets/images/image-inside/Meghalaya.jpeg";
// import mizoramImage from "../assets/images/image-inside/Mizoram.jpeg";
// import nagalandImage from "../assets/images/image-inside/Nagaland.jpeg";
import orissaImage from "../assets/images/image-inside/Orissa.jpeg";
// import puducheryImage from "../assets/images/image-inside/Puducherry.jpeg";
import punjabImage from "../assets/images/image-inside/Punjab.jpeg";
import rajasthanImage from "../assets/images/image-inside/Rajasthan.jpeg";
// import sikkimImage from "../assets/images/image-inside/Sikkim.jpeg";
import tamilnaduImage from "../assets/images/image-inside/TamilNadu.jpeg";
// import tripuraImage from "../assets/images/image-inside/Tripura.jpeg";
import uttarakhandImage from "../assets/images/image-inside/Uttarakhand.jpeg";
import upImage from "../assets/images/image-inside/UttarPradesh.jpeg";
import westbengalImage from "../assets/images/image-inside/WestBengal.jpeg";

const imageMapping = {
  // andaman: andamanImage,
  andhrapradesh: andhrapradeshImage,
  // arunachalpradesh: arunachalpradeshImage,
  assam: assamImage,
  bihar: biharImage,
  // chandigarh: chandigarhImage,
  chattisgarh: chattisgarhImage,
  // dadraandnagar: dadraandnagarImage,
  delhi: delhiImage,
  goa: goaImage,
  gujarat: gujaratImage,
  haryana: haryanaImage,
  himachal: himachalImage,
  jharkhand: jharkhandImage,
  jk: jkImage,
  Karnataka: KarnatakaImage,
  kerala: keralaImage,
  // lakshdweep: lakshdweepImage,
  mp: mpImage,
  maharashtra: maharashtraImage,
  // manipur: manipurImage,
  // meghalaya: meghalayaImage,
  // mizoram: mizoramImage,
  // nagaland: nagalandImage,
  orissa: orissaImage,
  // puduchery: puducheryImage,
  punjab: punjabImage,
  rajasthan: rajasthanImage,
  // sikkim: sikkimImage,
  tamilnadu: tamilnaduImage,
  // tripura: tripuraImage,
  uttarakhand: uttarakhandImage,
  up: upImage,
  westbengal: westbengalImage,
};

const StateMap = ({ stateName }) => {
  const imageUrl = imageMapping[stateName.toLowerCase()] || null;

  return (
    <div className="flex flex-col items-center p-5">
      <h2 className="text-3xl font-bold mb-4 text-[#6b4226]">{stateName} Map</h2>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={`${stateName} map`}
          className="w-3/4 h-auto rounded-lg border-4 border-[#8c6239]"
          style={{ objectFit: "cover" }}
        />
      ) : (
        <p className="text-lg text-[#8c6239]">No map image available for {stateName}</p>
      )}
      <div className="text-center mt-4">
        <p className="text-lg text-[#8c6239] leading-relaxed">
          {stateName} is one of India's beautiful states, known for its unique cultural heritage.
        </p>
      </div>
    </div>
  );
};

export default StateMap;
