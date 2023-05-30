import emailjs from "emailjs-com";

const sendEmail1 = (formData) => {
  const serviceId = "service_8zfl0ih"; // Replace with your EmailJS service ID
  const templateId = "template_do22hjk"; // Replace with your EmailJS template ID
  const publicKey = "V145YzFBQPYaq5EUj"; // Replace with your EmailJS user ID

  emailjs.send(serviceId, templateId, formData, publicKey)
    .then((response) => {
      console.log("Email sent successfully!");
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

export default sendEmail1;
