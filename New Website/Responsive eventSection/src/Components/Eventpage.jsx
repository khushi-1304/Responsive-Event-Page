// eslint-disable-next-line no-unused-vars
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.css";

const Eventpage = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(".highlight-bg", {
      width: "100%",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".heroWrap",
        start: "top 70%",
        end: "bottom",
        // markers:true
      },
    });
  });

  return (
    <div data-scroll className="heroWrap">
      <div data-scroll className="event-container">
        <div data-scroll className="left-event-container">
          <div className="eventTitle heroTitle">/Upcoming Event</div>
          <p className="context">
            Immerse yourself in
            <span className="highlight">
              <span className="highlight-bg"></span>
              <span className="highContent">industry </span>
            </span>
            insights through ideations,
            <span className="highlight">
              <span className="highlight-bg"></span>
              <span className="highContent">hackathons</span>
            </span>
            , and expert keynotes. Explore
            <span className="highlight">
              <span className="highlight-bg"></span>
              <span className="highContent"> NLP, MLOps</span>
            </span>
            , Computer Vision, etc. Experience
            <span className="highlight">
              <span className="highlight-bg"></span>
              <span className="highContent">hands-on </span>
            </span>
            workshops.
          </p>

          <button className="register-button">Register Now</button>
        </div>

        <div data-scroll className="right-event-container">
          <h1 className="heading">AI CONCLAVE 4.0</h1>
          <img
            className="event-image-right"
            src="./public\eventBanners\conclave3.png"
            alt="Technology"
          />
          {/* <div className="description">
                        Welcome to AI Conclave 2024, A 3-day thrill ride from February 5th
                        to 7th, hosted by the AI Club at VIT Bhopal University.
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Eventpage;
