import emailjs from '@emailjs/browser';
import { HR_EMAIL } from '../data/constants';
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_CONTACT_TEMPLATE_ID,
  EMAILJS_HIRE_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from './emailjsConfig';

/**
 * Application Form (Appointment Setting / Cold Calling)
 */
export function sendContactEmail({
  name,
  phone,
  upworkProfile,
  upworkEmail,
  facebookProfile,
  experience,
  tools,
}) {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_CONTACT_TEMPLATE_ID,
    {
      // Recipient
      to_email: HR_EMAIL,

      // Applicant
      name,
      email: upworkEmail,

      // Application Details
      phone: phone || 'N/A',
      upwork_profile: upworkProfile || 'N/A',
      upwork_email: upworkEmail || 'N/A',
      facebook_profile: facebookProfile || 'N/A',
      experience: experience || 'N/A',
      tools: tools || 'N/A',

      // Email Content
      title: 'New Application - Appointment Setter / Cold Caller',
      message: `Contact Number: ${phone || 'N/A'}
Upwork Profile: ${upworkProfile || 'N/A'}
Upwork Email: ${upworkEmail || 'N/A'}
Facebook Profile: ${facebookProfile || 'N/A'}
Years of Experience: ${experience || 'N/A'}
Tools Handled: ${tools || 'N/A'}`,

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

/**
 * General Contact / Inquiry Form (the "Contact Us" modal)
 * Reuses the same EmailJS template as the application form — the "title"
 * field makes it clear in the inbox that this is a general inquiry, not
 * a job application.
 */
export function sendGeneralContactEmail({
  name,
  email,
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

      // Email Content
      title: 'General Inquiry — Contact Us Form',
      message: message || 'N/A',

      // Timestamp
      time: new Date().toLocaleString(),
    },
    {
      publicKey: EMAILJS_PUBLIC_KEY,
    }
  );
}