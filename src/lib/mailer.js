import emailjs from '@emailjs/browser';
import { HR_EMAIL } from '../data/constants';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_CONTACT_TEMPLATE_ID,
  EMAILJS_HIRE_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from './emailjsConfig';

/**
 * Contact Form
 */
export function sendContactEmail({
  name,
  email,
  phone,
  service,
  message,
}) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_CONTACT_TEMPLATE_ID,
    {
      // Recipient
      to_email: HR_EMAIL,

      // Sender
      name,
      email,

      // Contact Details
      phone: phone || 'N/A',
      service: service || 'General Inquiry',

      // Email Content
      title: service || 'General Inquiry',
      message: message || 'N/A',

      // Timestamp
      time: new Date().toLocaleString(),
    },
    {
      publicKey: EMAILJS_PUBLIC_KEY,
    }
  );
}

/**
 * Hire Talent Form
 */
export function sendHireEmail({
  name,
  email,
  role,
  size,
  message,
}) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_HIRE_TEMPLATE_ID,
    {
      // Recipient
      to_email: HR_EMAIL,

      // Applicant
      name,
      email,

      // Hiring Details
      role,
      team_size: size,

      // Email Content
      title: `Hire Talent - ${role}`,
      message: message || 'N/A',

      // Timestamp
      time: new Date().toLocaleString(),
    },
    {
      publicKey: EMAILJS_PUBLIC_KEY,
    }
  );
}