export const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About SIHM',
    path: '/about',
    children: [
      { label: 'Overview', path: '/about/overview' },
      { label: "Director's Message", path: '/about/directors-message' },
      { label: 'Vision & Mission', path: '/about#vision-mission' },
      { label: 'Infrastructure', path: '/facilities' }
    ]
  },
  {
    label: 'Academic Programs',
    path: '/academic-and-programs',
    children: [
      { label: 'Degree Programs', path: '/academic-and-programs#degree-programs' },
      { label: 'Diploma Programs', path: '/academic-and-programs#diploma-programs' },
      { label: 'Short Term & Certificate Courses', path: '/academic-and-programs#short-term-certificate-courses' }
    ]
  },
  { label: 'Campus Life', path: '/gallery' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Placements', path: '/placements' },
  { label: 'Students', path: '/students' },
  { label: 'News & Events', path: '/news-events' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Contact', path: '/contact-us' }
];

export const contact = {
  phone: '+91 9233895656',
  alternatePhone: '+91 38622 91117',
  email: 'contact@sihmdimapur.com',
  headOffice: 'Flat No.9 & 9A, Second floor, Atma Ram Mansion, Connaught Circus, New-Delhi -110001',
  campus: 'Purana Bazar B Village Block 5, New Naga Cemetery Road, Dimapur, Nagaland - 797116',
  whatsapp: '919233895656'
};

export const heroBanners = [
  {
    eyebrow: 'Admissions Open 2026',
    title: 'Getting Your Hospitality Career Started',
    description: 'A premium hospitality institute experience shaped around practical learning, professional grooming, and placement-led outcomes.',
    cta: 'Apply Now',
    image: '/campus/students-front-campus.jpg'
  },
  {
    eyebrow: 'B.Sc. HHA and Diploma Programs',
    title: 'Learn in Real Hotel Environments',
    description: 'Train in kitchens, front office labs, restaurant service spaces, classrooms, and campus facilities built for hospitality practice.',
    cta: 'Explore Courses',
    image: '/campus/campus-front-wide.jpg'
  }
];

export const stats = [
  { value: 60, suffix: '+', label: 'Annual B.Sc. Intake' },
  { value: 3, suffix: '', label: 'NCHMCT Programs' },
  { value: 16, suffix: '+', label: 'Recruiter Partners' },
  { value: 70, suffix: '%', label: 'Practical Emphasis' }
];

export const courses = [
  {
    title: '3 Years B.Sc. in Hospitality and Hotel Administration',
    type: 'Degree Program',
    duration: '3 Years',
    eligibility: '12th passed from any recognized board in any stream',
    affiliation: 'National Council for Hotel Management and Catering Technology (NCHMCT)',
    award: 'Recognised and awarded by Jawaharlal Nehru University, New Delhi',
    fee: 'Total Rs 3,47,415 for 3 years, payable semester-wise',
    image: '/campus/restaurant-training.png',
    benefits: ['State of art infrastructure', 'Qualified faculties', 'Hospitality industry linkages', 'Placement assistance in India and abroad'],
    careers: ['Hotels', 'Resort management', 'Kitchen management', 'Cruise lines', 'Institutional catering', 'Tourism corporations']
  },
  {
    title: 'Diploma in Food Production',
    type: 'Diploma Course',
    duration: '1.5 Years',
    eligibility: '12th pass from any recognized board',
    affiliation: 'National Council for Hotel Management Catering Technology (NCHMCT)',
    award: 'Diploma issued by NCHMCT',
    fee: 'Rs 77,800',
    image: '/campus/kitchen-training.png',
    benefits: ['State of art kitchen and restaurant', '70% emphasis on practical training', 'Exposure to leading hotel chains'],
    careers: ['Food production', 'Hotel kitchens', 'Restaurants', 'Cruises', 'Industrial catering']
  },
  {
    title: 'Diploma in Food & Beverage Service',
    type: 'Diploma Course',
    duration: '1.5 Years',
    eligibility: '12th pass from any recognized board',
    affiliation: 'Under approval of NCHMCT',
    award: 'Certificate issued by NCHMCT',
    fee: 'Rs 33,200',
    image: '/campus/mock-bar-training.png',
    benefits: ['Restaurant and mock bar training', 'Hands-on service exposure', 'Industry internship orientation'],
    careers: ['Food and beverage service', 'Frontline hospitality', 'Restaurants', 'Hotels', 'Cruise hospitality']
  },
  {
    title: 'Front Office Operations',
    type: 'Certificate Program',
    duration: '6 Months',
    eligibility: '10th or 12th pass candidates with interest in guest relations',
    affiliation: 'SIHM Dimapur professional training pathway',
    award: 'Certificate issued by SIHM Dimapur',
    fee: 'Contact admissions office',
    image: '/campus/front-office-training.png',
    benefits: ['Reservation practice', 'Guest handling', 'Billing and reception training', 'Communication confidence'],
    careers: ['Front office associate', 'Guest relations', 'Reservations', 'Hotel reception']
  },
  {
    title: 'Accommodation Operations',
    type: 'Certificate Program',
    duration: '6 Months',
    eligibility: '10th or 12th pass candidates',
    affiliation: 'SIHM Dimapur professional training pathway',
    award: 'Certificate issued by SIHM Dimapur',
    fee: 'Contact admissions office',
    image: '/campus/housekeeping-training.png',
    benefits: ['Housekeeping standards', 'Room presentation', 'Linen handling', 'Back-of-house discipline'],
    careers: ['Housekeeping associate', 'Room division', 'Facility service', 'Hotel operations']
  },
  {
    title: 'Bakery & Confectionery',
    type: 'Short Term Course',
    duration: '3 Months',
    eligibility: 'Open to eligible hospitality aspirants',
    affiliation: 'SIHM Dimapur skill development pathway',
    award: 'Certificate issued by SIHM Dimapur',
    fee: 'Contact admissions office',
    image: '/campus/kitchen-training.png',
    benefits: ['Bakery fundamentals', 'Dessert preparation', 'Production discipline', 'Entrepreneurial skill'],
    careers: ['Bakery assistant', 'Pastry kitchen', 'Cafe operations', 'Entrepreneurship']
  }
];

export const facilities = [
  ['Multi-Cuisine Kitchen', 'Get hands-on experience with the latest equipment and techniques in a professional kitchen environment.', '/campus/kitchen-training.png'],
  ['Housekeeping Lab', 'Practice room care, presentation standards, housekeeping discipline, and operational attention to detail.', '/campus/housekeeping-training.png'],
  ['Front Office', 'Learn guest relations, billing, reservations, and hotel desk operations in a simulated environment.', '/campus/front-office-training.png'],
  ['Restaurant & Mock Bar', 'Practice restaurant and bar operations with a focus on service, etiquette, and guest experience.', '/campus/mock-bar-training.png'],
  ['Classrooms', 'Modern classrooms equipped for interactive teaching, presentations, and academic mentoring.', '/campus/restaurant-training.png'],
  ['Laundry', 'Learn garment care, linen handling, pressing, and back-of-house service support through practical exposure.', '/campus/laundry-training.png']
];

export const news = [
  { date: 'Jan 7, 2026', title: 'National Council For Hotel Management Joint Entrance Examination (NCHM JEE) 2026', category: 'Circulars' },
  { date: 'Sep 15, 2025', title: 'Mid-Term Examination 2025-2026 (Semester-I)', category: 'Notices' },
  { date: 'Aug 25, 2025', title: '6 Months Craftsmanship Certification Course', category: 'Admission' },
  { date: 'Mar 21, 2024', title: 'End semester examination of 3-years B.Sc. in Hospitality & Hotel Administration', category: 'Examination' }
];

export const gallery = [
  '/campus/students-front-campus.jpg',
  '/campus/campus-front-wide.jpg',
  '/campus/front-office-training.png',
  '/campus/mock-bar-training.png',
  '/campus/kitchen-training.png',
  '/campus/restaurant-training.png',
  '/campus/laundry-training.png',
  '/campus/restaurant-training.png',
  '/campus/housekeeping-training.png',
  '/campus/campus-front-rain.jpg'
];

export const recruiters = ['Taj', 'Oberoi', 'ITC Hotels', 'Marriott', 'Hyatt', 'Radisson', 'Lemon Tree', 'The Park', 'Holiday Inn', 'Accor', 'Hilton', 'Domino’s', 'KFC', 'Barbeque Nation', 'Cruise Lines', 'Resort Brands'];

export const testimonials = [
  { name: 'Alumni Voice', role: 'Hospitality Graduate', quote: 'SIHM Dimapur gave me practical confidence and the discipline to enter the hospitality industry with clarity.' },
  { name: 'Industry Mentor', role: 'Hotel Operations', quote: 'The strongest students combine grooming, hands-on skill, and service attitude. SIHM trains for exactly that blend.' },
  { name: 'Current Student', role: 'B.Sc. HHA', quote: 'The campus labs make learning feel real. Every practical class adds something useful for placements.' }
];

export const faculty = [
  { name: 'Indranil Roy Choudhury', title: 'Principal I/C', subject: 'Hospitality Leadership', image: '/campus/optimized/classroom-md.jpg' },
  { name: 'Senior Culinary Faculty', title: 'Faculty', subject: 'Food Production', image: '/campus/optimized/kitchen-md.jpg' },
  { name: 'Food & Beverage Mentor', title: 'Faculty', subject: 'Restaurant Service', image: '/campus/optimized/restaurant-md.jpg' }
];

export const faqs = [
  ['Who can apply for B.Sc. HHA?', 'Candidates who have passed Class 12 from a recognized board in any stream can apply.'],
  ['Is hostel available?', 'Limited hostel facilities are available with separate arrangements for boys and girls.'],
  ['Are placements supported?', 'Yes. The institute supports placement preparation and connects students with hotel, restaurant, cruise, and hospitality recruiters.']
];

export const notes = [
  {
    heading: 'Student Notes Will Appear Here',
    subHeading: 'Admins can publish class notes from Strapi with a heading, sub heading, and PDF or Word attachment.',
    file: null
  }
];
