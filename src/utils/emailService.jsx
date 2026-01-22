import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.EMAILJS_USER_ID;

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      USER_ID
    );
    
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
};