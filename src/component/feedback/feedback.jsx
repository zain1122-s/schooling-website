import React from "react";
import "./Feedback.css";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Linkedin,
  Volleyball,
} from "lucide-react";
const Feedback = () => {
  const sociallink = [
    {
      logo: <Facebook />,
    },
    {
      logo: <Twitter />,
    },
    {
      logo: <Instagram />,
    },
    {
      logo: <Volleyball />,
    },
    {
      logo: <Github />,
    },
    {
      logo: <Linkedin />,
    },
  ];
  return (
    <div className="feedback-main">
      <div className="feedback-left">
        <h1>
          Questions? <br />
          Comments? <br />
          We'd love to hear from you.
        </h1>
        <p>
          The school is open 10:00am to 5:00pm Tuesday to Friday and 10:00am to{" "}
          <br />
          3:00pm on Saturday. During July and August Summer Camps, we're open
          from <br />
          Monday to Friday 8:30am to 4:30pm.
        </p>
        <h1 className="heading2">
          Our mailing address is: <br />
          152A Charlotte Street, <br />
          Peterborough ON <br />
          Phone: 705-742-3221
        </h1>

        <div className="links">
          {sociallink.map((item, index) => (
            <div className="account" key={index}>
              <h1>{item.logo}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="feedback-right">
        <input type="text" placeholder="Enter Your Name" className="input1" />
        <input
          type="text"
          placeholder="Enter a Valid email address"
          className="input2"
        />
        <input
          type="text"
          placeholder="Enter your message"
          className="input3"
        />
        <div className="butn">
            <button>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
