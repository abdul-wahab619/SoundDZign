import React from "react";
import "./Testimonial.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";

const Testimonial = () => {
  return (
    <section id="testimonials" className="dark-gray">
      <div className="wrapper">
        <h2>What our students say?</h2>

        <div className="content-container">
          <div className="testimonial">
            <img src={testimonial1} alt="" />
            <div className="reviewer-details">
              <div className="name">Peter Adams</div>
              <div className="company-name">Google</div>
              <div className="review">
                This is a great course. I got to learn a lot.
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial2} alt="" />
            <div className="reviewer-details">
              <div className="name">Robert Fox</div>
              <div className="company-name">Microsoft</div>
              <div className="review">
                I got to learn a lot about Music Production with this course.
                Thanks :)
              </div>
            </div>
          </div>

          <div className="testimonial">
            <img src={testimonial3} alt="" />
            <div className="reviewer-details">
              <div className="name">Emily Smith</div>
              <div className="company-name">Amazon</div>
              <div className="review">Awesome! Great Job!!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
