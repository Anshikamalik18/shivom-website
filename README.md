# Shivom MBA College Website

A modern, professional Next.js website for Shivom MBA College featuring comprehensive information about programs, facilities, admissions, and research activities.

## Features

### Navigation Structure
- **Home** - Dynamic homepage with hero section and key highlights
- **About Us** - College leadership pages
  - Chairman's Message
  - Director's Message
  - Principal's Message
- **Courses** - Academic programs
  - BBA (Bachelor of Business Administration)
  - MBA (Master of Business Administration)
  - BCA (Bachelor of Computer Applications)
- **Admission** - Admission information
  - Key Dates and Timeline
  - Prospectus and Documents
- **Facilities** - College infrastructure
  - Library
  - Hostel
  - Computer Lab
  - Communication Lab
- **Mandatory Disclosure** - Regulatory compliance
  - Affiliation Letter
  - AICTE Approval
  - University Recognition
- **Research** - Academic research initiatives
  - Conferences
  - Seminars
  - Invited Lectures
- **Contact Us** - Contact information and inquiry form

## Technology Stack

- **Framework**: Next.js 16.2.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd shivom-website
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── about/                  # About pages
│   ├── courses/                # Course pages
│   ├── admission/              # Admission pages
│   ├── facilities/             # Facilities pages
│   ├── disclosure/             # Compliance pages
│   ├── research/               # Research pages
│   └── contact/                # Contact page
└── components/
    ├── Navbar.tsx              # Navigation
    └── Footer.tsx              # Footer
```

## Key Features

- ✅ Fully responsive design
- ✅ Professional UI with Tailwind CSS
- ✅ Mobile-friendly navigation
- ✅ Fast performance with Next.js optimization
- ✅ TypeScript for type safety
- ✅ SEO-friendly structure
- ✅ Accessible markup

## Customization

To update college information:
1. Edit `src/components/Navbar.tsx` - Navigation links
2. Edit `src/components/Footer.tsx` - Contact information
3. Edit individual page files - Content and details

## Deployment

Deploy to Vercel (recommended):
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy

Or deploy to AWS, Azure, Google Cloud with Node.js support.

## Support

For questions or support:
- Email: info@shivomcollege.in
- Phone: +91 XXXXXXXXXX

## License

Proprietary to Shivom MBA College. All rights reserved.

---

Built with Next.js, TypeScript, and Tailwind CSS
