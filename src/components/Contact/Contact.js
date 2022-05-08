import "./Contact.css";
import Phone from "../../icons/telefon-icon.png";
import Email from "../../icons/email-icon.jpg";
import Address from "../../icons/address-icon.png";
import Linkedin from "../../icons/linkedin-icon.png";
import Github from "../../icons/github-icon.png";
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xjekraj",
        "template_u4cdz0p",
        formRef.current,
        "qfvmhSfcf-Aw2ztzv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +4917642056557
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              ali.amidpour.eng@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Düsseldorf, 
              Germany
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Linkedin} alt="" />
              <a href="https://www.linkedin.com/in/ali-amidpour/" >https://www.linkedin.com/in/ali-amidpour/</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Github} alt="" />
              <a href="https://github.com/ali-nthtosay" style={{}} > https://github.com/ali-nthtosay</a> 
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#353"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#353"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#353"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#353" }} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Email has been sent"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;