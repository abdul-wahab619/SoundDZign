import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";
import { client, urlFor } from "../../client";
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"] [0..2]';
    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
          {testimonials.map((testimonial) => (
            <div className="testimonial">
              <img src={urlFor(testimonial.image)} alt="" />
              <div className="reviewer-details">
                <div className="name">{testimonial.name}</div>
                <div className="company-name">{testimonial.company}</div>
                <div className="review">{testimonial.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
