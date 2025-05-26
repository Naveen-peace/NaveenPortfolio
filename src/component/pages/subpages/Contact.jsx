import Header from "../header/Header"
import emailjs from 'emailjs-com';
import PdfFile from '../../../assets/naveen_resume.pdf';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from "@iconify/react";
import Footer from "../footer/Footer";


function Contact() {
  function downloadResume() {
    var link = document.createElement('a');
    link.href = PdfFile;
    link.download = 'Naveen-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    document.getElementById('email-submit').innerText = 'Sending...';

    if (formData.name !== '' && formData.email !== '' && formData.message !== '') {
      const serviceID = 'service_3sfgxgr';
      const templateID = 'template_98tqc99';

      emailjs.init('xmXfFAkt0lvm8ew0v');

      try {
        await emailjs.send(serviceID, templateID, formData);

        setFormData({
          name: '',
          email: '',
          message: '',
        });

        document.getElementById('email-submit').innerHTML = `
          Send message
          <i class="uil uil-message button__icon"></i>`;

        toast.success('Your message sent successfully!', {
          position: 'top-center',
        });
      } catch (error) {
        document.getElementById('email-submit').innerHTML = `
          Send message
          <i class="uil uil-message button__icon"></i>`;
        console.error('Error sending email:', error);

        toast.error('An error occurred while sending the email!');
      }
    } else {
      toast.error('Please fill out all the fields!', {
        position: 'top-center',
      });
    }
  };
  return (
    <div className="total-wrapper">
       <Header />
      <div className='contact-background'>
        <div className="lol-container ">
          <div className="contact-naveen">
            <h2>Contact Me</h2>
            <h3>Get in touch</h3>
          </div>
          <div className="naveen-contactbroder">
            <div className="naveen-contact">
              <div className="naveen-contact-1">
                <a href="https://www.linkedin.com/in/naveen-kumar-b6b1a6247/">
                  <Icon icon="basil:linkedin-solid" width="30" height="30" />
                  <h3>Linkedin</h3>
                </a>
                <a href="https://github.com/Naveen-peace">
                  <Icon icon="mingcute:github-line" width="30" height="30" />
                  <h3>GitHub</h3>
                </a>
                <a href="tel:+91 9841601822">
                  <Icon icon="ph:phone-light" width="30" height="30" />
                  <span>
                    <h3>Call Me</h3>
                    <h4>+91 9841601822</h4>
                  </span>
                </a>
                <a href="mailto:naveenshark49@gmail.com">
                  <Icon icon="humbleicons:mail" width="30" height="30" />
                  <span>
                    <h3>E-mail</h3>
                    <h4>naveenshark49@gmail.com</h4>
                  </span>
                </a>
              </div>
              <div className="naveen-contact-2">
                <h3>Contact In Mail</h3>
                <form onSubmit={handleSubmit} className="naveen-allform">
                  <div className="naveen-contact-sub">
                    <div className="naveen-form-main">
                      <div className="naveen-form">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          className="naveen-input"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="naveen-form-1">
                        <label htmlFor="email">Email:</label>
                        <input
                          type="email"
                          id="email"
                          className="naveen-input"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="naveen-form-2">
                      <label htmlFor="message">Message:</label>
                      <textarea
                        id="message"
                        name="message"
                        className="naveen-input"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <h5>*You will get a confirmation mail after sending the message.</h5>
                  <div className="naveen-download-form">
                    <button type="submit" id="email-submit">
                      Submit Details
                      <Icon icon="iconoir:send" width="20" height="20" />
                    </button>
                    <button className="naveen-resume-button-2" onClick={downloadResume}>
                      <Icon icon="uil:download-alt" width="20" height="20" /> Resume
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact