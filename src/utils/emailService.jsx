import emailjs from 'emailjs-com';

// Replace with your EmailJS service ID, template ID, and user ID
const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const USER_ID = process.env.USER_ID;

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