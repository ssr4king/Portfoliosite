# Portfolio Website

## Overview

This is a modern portfolio website built with React, TypeScript, and Express.js. The application features a professional portfolio design with sections for home, about, skills, services, portfolio, and contact. It uses a full-stack architecture with a React frontend and Express backend, connected to a PostgreSQL database for storing contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

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
2. **Page Navigation**: Client-side routing with Wouter handles navigation between portfolio sections
3. **UI Interactions**: Form submissions use TanStack Query mutations for optimistic updates and error handling

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