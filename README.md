# Panna Waitlist Landing Page

A simplified waitlist landing page for the Panna social sports betting app.

## Features

- **Two-State Design**: Landing view and form submission view
- **Supabase Integration**: Email collection with database storage
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, dark theme with Uber Move font
- **Regulatory Compliance**: Footer with required gambling regulatory links

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create a table named `signups` with the following structure:
   ```sql
   CREATE TABLE signups (
     id SERIAL PRIMARY KEY,
     email_address TEXT NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```
3. Get your project URL and anon key from the Supabase dashboard

### 3. Environment Variables

Create a `.env` file in the root directory with your Supabase credentials:

```env
REACT_APP_SUPABASE_URL=your_supabase_project_url_here
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 4. Run the Application

```bash
npm start
```

The app will be available at `http://localhost:3000`

### 5. Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add the environment variables in Vercel dashboard
4. Deploy!

## Design Specifications

### Colors
- **Background**: Black (#000000)
- **Primary Green**: #23AC55
- **Text**: White and light gray (#ccc)

### Font
- **Primary Font**: Uber Move (with system fallbacks)

### Layout
- Fixed header with PANNA logo and "Join Waitlist" button
- Centered main content
- Footer with regulatory links and logos

## File Structure

```
src/
├── components/
│   ├── Navbar.js          # Simplified header
│   ├── Navbar.css
│   ├── Footer.js          # Footer with regulatory links
│   └── Footer.css
├── pages/
│   ├── Home.js            # Main waitlist page
│   ├── Home.css
│   ├── PrivacyPolicy.js   # Placeholder pages
│   ├── TermsConditions.js
│   ├── ComplaintsDisputes.js
│   ├── SaferGambling.js
│   └── PlaceholderPage.css
└── App.js                 # Main app component
```

## Required Assets

You'll need to add the following images to `src/assets/`:
- `newLogo.png` - PANNA logo (or update Navbar.js to use text logo)
- `gambling_commision_logo.png` - Gambling Commission logo
- `gamstop_logo.png` - Gamstop logo  
- `begambleaware_logo.png` - BeGambleAware logo

## Features

### Landing View
- "Introducing Panna >" pill button
- "The newest social sports betting app" heading
- Description text
- "Join Waitlist" CTA button

### Form View
- Thank you message
- Email input form
- Success/error states
- Loading states

### Footer
- Copyright notice
- Privacy Policy, Terms & Conditions, Complaints & Disputes, Safer Gambling links
- Regulatory logos (18+, Gambling Commission, Gamstop, GambleAware)

## Deployment

The app is configured for Vercel deployment with:
- Vercel Analytics
- Speed Insights
- Automatic deployments on GitHub push

## Support

For questions or issues, please contact the development team.
# Force deployment
