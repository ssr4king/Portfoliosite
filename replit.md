# Portfolio Website

## Overview

This is a modern portfolio website built with React, TypeScript, and Express.js for Shubham Kumar, a Computer Science Engineering student at IES College of Technology Bhopal. The application features a professional single-page scrolling portfolio with dark theme, cyan glow effects, and sections for home, about, skills, portfolio, and contact. It uses a full-stack architecture with a React frontend and Express backend, connected to a PostgreSQL database for storing contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.
Personal Information: Updated with actual details from Shubham's CV including contact info, education, projects, and skills.

## System Architecture

The application follows a monorepo structure with clear separation between client-side and server-side code:

- **Frontend**: React with TypeScript, built with Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component System**: Uses shadcn/ui for consistent UI components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **State Management**: TanStack Query for server state and caching

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Storage**: Abstracted storage interface with in-memory implementation for development
- **Validation**: Zod schemas shared between client and server

### Database Schema
- **Contact Messages**: Stores form submissions with fields for name, email, subject, and message
- **Users**: Basic user table (currently unused but prepared for future features)

## Data Flow

1. **Contact Form Submission**: Client submits form → validation with Zod → API request to `/api/contact` → server validation → database storage → success response
2. **Page Navigation**: Single-page scrolling with smooth scroll functionality handles navigation between portfolio sections
3. **UI Interactions**: Form submissions use TanStack Query mutations for optimistic updates and error handling
4. **Project Details**: Click on portfolio projects opens detailed modal with full project information

## Recent Changes (January 2025)

### Personal Information Integration
- Updated all personal details with authentic information from Shubham's CV:
  - Name: Shubham Kumar
  - Education: B.Tech CSE at IES College of Technology Bhopal (CGPA: 7.60)
  - Contact: +91-6265037768, s.shubham999000@gmail.com
  - Location: Bhopal, Madhya Pradesh, India
  - Skills: HTML/CSS, JavaScript, Java, C++, Basic React, Oracle SQL

### Portfolio Projects Update
- Replaced placeholder projects with actual projects from CV:
  1. **Starbucks Frontend Webpage** (2024) - HTML, CSS, FontAwesome
  2. **Personal Portfolio Website** (2024) - HTML, CSS, JavaScript, Basic React
  3. **E-Commerce Frontend Website** (2024) - HTML, CSS, FontAwesome
- Added project detail modal functionality with full descriptions
- Click on any project card opens detailed modal with comprehensive information

### Single-Page Navigation
- Converted from multi-page routing to single-page scrolling design
- All sections (Home, About, Skills, Portfolio, Contact) load on one page
- Navigation links use smooth scrolling to respective sections
- Footer links updated to scroll within the page
- Active section highlighting in navigation

### Technical Skills Update
- Programming languages: HTML/CSS (95%), JavaScript (85%), Java (90%), C++ (85%), React Basic (70%)
- Tools and technologies aligned with actual experience
- Updated certifications to reflect coursework at IES College

### Education Section Enhancement
- B.Tech Computer Science Engineering (2021-2025) - IES College of Technology Bhopal
- CBSE Class XII (2020) - Holy Kids Intl School, Bihar - 66.6%
- NSS Volunteer (2020) - National Service Scheme participation
- CBSE Class X (2018) - AND Public School, Bihar - 64.6%

## External Dependencies

### UI and Styling
- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Headless UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Backend and Database
- **Drizzle ORM**: Type-safe SQL toolkit
- **Neon Database**: Serverless PostgreSQL (via @neondatabase/serverless)
- **Zod**: Schema validation library

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

The application is configured for deployment with:

- **Build Process**: Vite builds the client-side React application, ESBuild bundles the server
- **Production Setup**: Static files served by Express in production mode
- **Database**: Configured for PostgreSQL with connection via DATABASE_URL environment variable
- **Environment**: Supports both development and production configurations

### Build Commands
- `npm run dev`: Development server with hot reloading
- `npm run build`: Production build for both client and server
- `npm run start`: Production server
- `npm run db:push`: Deploy database schema changes

The architecture supports easy scaling and maintenance with clear separation of concerns, type safety throughout the stack, and modern development practices.