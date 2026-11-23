// Static content used across the site's sections

export const ABOUT_LIST = [
  'Digital marketing & lead generation',
  'Cold calling & appointment setting',
  'Virtual assistance & admin support',
  'ESL teaching support',
  'Web development & graphic design',
];

export const WHY_LIST = [
  'Skilled and reliable workforce',
  'Cost-effective outsourcing solutions',
  'Professional training and support',
  'Flexible staffing options',
  'Client-focused approach',
  'Based in Iligan City, Philippines',
  '5.0 Google rating',
  'Dedicated account management',
];

export const TALENT_ITEMS = [
  { title: 'Virtual Assistants', desc: 'Calendar, inbox, and administrative support for founders and busy teams.' },
  { title: 'Lead Generators', desc: 'Sourcing and qualifying prospects to keep your pipeline full.' },
  { title: 'Cold Callers', desc: 'Confident, script-trained callers who represent your brand well.' },
  { title: 'ESL Teachers', desc: 'Experienced instructors for online English language programs.' },
  { title: 'Digital Marketers', desc: 'Campaign execution across social, search, and content channels.' },
  { title: 'Graphic Designers', desc: 'Brand, marketing, and social creative built to your guidelines.' },
  { title: 'Web Developers', desc: 'Building and maintaining websites and web applications.' },
  { title: 'Customer Support Reps', desc: 'Responsive, professional front-line service for your customers.' },
];

// icon keys map to small inline SVG paths rendered by the Services component
export const SERVICES_ITEMS = [
  { title: 'Virtual Assistance', desc: 'Day-to-day admin, scheduling, and inbox support so nothing slips through.', icon: 'inbox' },
  { title: 'Lead Generation', desc: 'Research and outreach that keeps qualified prospects flowing in.', icon: 'clock' },
  { title: 'Cold Calling', desc: 'Trained, professional callers who open doors and set appointments.', icon: 'phone' },
  { title: 'ESL Teaching Support', desc: 'Qualified instructors for online English learning programs.', icon: 'lines' },
  { title: 'Digital Marketing', desc: 'Social, search, and content campaigns built to hit growth targets.', icon: 'trend' },
  { title: 'Graphic Design', desc: 'Brand assets, marketing collateral, and social creative on schedule.', icon: 'design' },
  { title: 'Web Development', desc: 'Websites and web apps, built, maintained, and kept up to date.', icon: 'code' },
  { title: 'Customer Support', desc: 'Responsive front-line service that protects your customer relationships.', icon: 'chat' },
  { title: 'Administrative Support', desc: 'Data entry, document prep, and back-office work handled reliably.', icon: 'doc' },
];

export const SERVICE_OPTIONS = [
  'Virtual Assistance',
  'Lead Generation',
  'Cold Calling',
  'ESL Teaching Support',
  'Digital Marketing',
  'Graphic Design',
  'Web Development',
  'Customer Support',
  'Administrative Support',
  'Not sure yet',
];

export const ROLE_OPTIONS = [
  'Virtual Assistant',
  'Lead Generator',
  'Cold Caller',
  'ESL Teacher',
  'Digital Marketer',
  'Graphic Designer',
  'Web Developer',
  'Customer Support Rep',
  'Not sure yet',
];

export const TEAM_SIZE_OPTIONS = ['Just one', '2 to 5', '6 to 20', '20+'];

export const APPLICATION_BENEFITS = [
  'Long-term opportunities',
  'Multiple US campaigns',
  'Professional management team',
  'Performance-based growth opportunities',
  'Work with clients across different industries',
  'Be matched with campaigns that fit your experience',
];

export const CONTACT_INFO = {
  address: '2nd Floor, MEA Prime Building, Benito Labao St, Iligan City, 9200 Lanao del Norte',
  phone: '0915 672 1879',
  phoneHref: 'tel:+639156721879',
  facebook: 'https://www.facebook.com/TriangleOutsourcingCorp',
  facebookLabel: 'facebook.com/TriangleOutsourcingCorp',
  mapEmbedUrl:
    'https://www.google.com/maps?q=MEA+Prime+Building+Benito+Labao+St+Iligan+City+9200+Lanao+del+Norte&output=embed',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=MEA+Prime+Building%2C+Benito+Labao+St%2C+Iligan+City%2C+9200+Lanao+del+Norte',
};

export const HR_EMAIL = 'triangle.humanresources@gmail.com';

// Used by "Contact Us" buttons site-wide — opens the visitor's email client for
// general inquiries, kept deliberately separate from the "Apply Now" application form.
export const GENERAL_CONTACT_MAILTO = `mailto:${HR_EMAIL}?subject=${encodeURIComponent('General Inquiry — Triangle Outsourcing')}`;
