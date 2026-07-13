# Triangle Outsourcing Corporation — Website

A React + Vite rebuild of the original single-file HTML site.

## Structure

```
src/
  components/
    sections/   One component per page section (Header, Hero, About, CEOMessage,
                 Team, Talent, Services, WhyUs, Reviews, Careers, Location,
                 Contact, HireModal, Footer)
    ui/         Small reusable pieces (Button, Eyebrow, SectionHead, Tri,
                 Field, Dropdown, Counter)
  data/         Static content — constants.js (nav/links/lists), team.js
                 (leadership + management bios), images.js (base64 photos
                 extracted from the original page)
  lib/          mailer.js — builds the mailto: links used by the Contact
                 and Hire Talent forms (no backend, same as the original)
  styles/       global.css — all the original CSS, combined
  App.jsx       Assembles the sections and owns the Hire modal's open state
  main.jsx      React entry point
```

## Running it

```
npm install
npm run dev
```

## Notes on what changed from the original HTML file

- The vanilla-JS custom dropdown, hamburger menu, scrollspy, and stat
  counters were reimplemented as small React components/hooks.
- The GSAP scroll-reveal animations were left out to avoid an extra
  dependency; the content is visible immediately. `Counter` still animates
  the hero stats in with a simple `requestAnimationFrame` loop.
- Both forms send straight to `triangle.humanresources@gmail.com` in the
  background via EmailJS — the visitor never has to open their own email
  app or click send themselves.

## Setting up EmailJS (required for the forms to actually send)

The forms won't send anything until you plug in your own EmailJS IDs. It's
free for low volume and takes about 5 minutes:

1. **Create an account** at https://www.emailjs.com and log in.
2. **Add an email service** (Email Services → Add New Service). Gmail is
   the simplest — connect `triangle.humanresources@gmail.com` and note the
   **Service ID** it gives you.
3. **Create two email templates** (Email Templates → Create New Template),
   one for each form. In the template body, use these variables so the
   email actually shows what the visitor typed:

   **Contact template** — use `{{from_name}}`, `{{from_email}}`,
   `{{phone}}`, `{{service}}`, `{{message}}`. Set "To email" to
   `{{to_email}}`. Example body:
   ```
   New inquiry from the website

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Service Needed: {{service}}
   Message: {{message}}
   ```

   **Hire Talent template** — use `{{from_name}}`, `{{from_email}}`,
   `{{role}}`, `{{team_size}}`, `{{message}}`. Set "To email" to
   `{{to_email}}`. Example body:
   ```
   New Hire Talent request from the website

   Name: {{from_name}}
   Email: {{from_email}}
   Role Needed: {{role}}
   Team Size Needed: {{team_size}}
   Notes: {{message}}
   ```

   Note the **Template ID** for each.
4. **Get your Public Key**: Account → General → Public Key.
5. **Fill in `src/lib/emailjsConfig.js`** with the four values from steps
   2–4:
   ```js
   export const EMAILJS_SERVICE_ID = 'service_xxxxxxx';
   export const EMAILJS_CONTACT_TEMPLATE_ID = 'template_xxxxxxx';
   export const EMAILJS_HIRE_TEMPLATE_ID = 'template_xxxxxxx';
   export const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx';
   ```
6. Restart `npm run dev` (or rebuild) and test both forms — the email
   should land in `triangle.humanresources@gmail.com` within a few
   seconds, with everything the visitor entered.

If a send fails (bad IDs, offline, etc.), the form shows an inline error
instead of the success message, so it fails visibly rather than silently.
