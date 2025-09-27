# Overview

Snipmorph is a premium international web design agency website showcasing high-end web development services. The application demonstrates modern web design capabilities through an interactive portfolio featuring embedded sample websites for business consulting, e-commerce, and SaaS platforms. Built as a full-stack React application with Express.js backend, it serves as both a marketing website and a showcase of technical expertise in creating sophisticated web solutions for international clients.

## Recent Updates (September 2025)

The UrbanWear e-commerce demo has been updated to feature a more inclusive shopping experience:

- **Consolidated Product Experience**: Replaced separate Women's and Men's product sections with a unified "Our Products" page that displays all items together
- **Enhanced Navigation**: Streamlined navigation from dropdown menus to a single "Our Products" link for improved user experience  
- **Comprehensive Filtering**: Added robust search functionality across product names, descriptions, categories, materials, and sustainability features
- **Professional Image Handling**: Implemented error handling that automatically hides products with broken images to maintain demo quality
- **Inclusive Design**: Removed gender-based categorization in favor of product-type categories (Hoodies, T-Shirts, Activewear, etc.)

These changes demonstrate modern e-commerce best practices and create a more welcoming shopping experience for all customers, making it an excellent showcase for Shopify store development capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React 18** with **TypeScript** and follows a component-based architecture pattern:

- **Component Structure**: Modular components organized by functionality (hero, services, portfolio, testimonials, contact)
- **UI Framework**: Utilizes shadcn/ui component library with Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming, following a dark-mode design system
- **State Management**: React Query (TanStack Query) for server state management with local component state for UI interactions
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture

The backend follows a **RESTful API** pattern using Express.js:

- **Server Framework**: Express.js with TypeScript for type safety
- **API Structure**: Modular route registration with centralized error handling
- **Validation**: Zod schemas for request validation and type inference
- **Storage Layer**: Abstracted storage interface with in-memory implementation (prepared for database integration)
- **Development Tools**: Vite integration for hot module replacement in development

## Data Storage Solutions

- **Current**: In-memory storage using Map data structures for development/demo purposes
- **Database Ready**: Drizzle ORM configured for PostgreSQL with schema definitions
- **Schema Management**: Shared schema definitions between frontend and backend using Drizzle-Zod integration

## Authentication and Authorization

- **Prepared Infrastructure**: User schema and storage interfaces defined but not actively implemented
- **Session Management**: Session handling capabilities prepared with connect-pg-simple for PostgreSQL sessions
- **Security**: CORS and security headers configured through Express middleware

## External Dependencies

- **Database**: Neon Database (PostgreSQL) configured via Drizzle ORM
- **UI Components**: Radix UI primitives for accessible component foundations
- **Icons**: Lucide React for consistent iconography, React Icons for social media icons
- **Styling**: Tailwind CSS with PostCSS for processing
- **Development**: Vite for build tooling and development server
- **Deployment**: Replit-specific plugins for development environment integration
- **Forms**: React Hook Form with Hookform Resolvers for validation integration
- **Utilities**: Class Variance Authority for component variant management, clsx for conditional styling