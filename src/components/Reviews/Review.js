import React, { useState } from "react";
import people from "./data";
import './style.css'


const Review = () => {
  const [index] = useState(1);
  const { name, job, image, text, stars } = people[index];
  return (
    <article className="review">
      <div className="box">
      
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{stars}</p>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container"></div>
      </div>

      <div className="box">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{stars}</p>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container"></div>
      </div>

      <div className="box">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{stars}</p>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container"></div>
      </div>

      <div className="box">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{stars}</p>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container"></div>
      </div>

    </article>
  );
};

export default Review;
