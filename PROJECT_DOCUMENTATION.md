# HK Nexus - Project Documentation

## Executive Summary

HK Nexus is a modern, full-stack web application designed to provide a seamless professional experience. It features a robust public-facing website, a comprehensive admin dashboard, and integrated systems for job applications and contact management. Built with a focus on performance, scalability, and modern design, the project delivers a high-quality user experience for both administrators and end-users.

## Technology Stack

The project leverages a modern "MERN-like" stack using Next.js 15+ and MongoDB.

### Frontend

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) for utility-first styling.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth, high-quality transitions and micro-interactions.
- **Icons**: [Lucide React](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/).
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) for toast notifications.

### Backend

- **Framework**: Built-in Next.js API Routes (Serverless functions).
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) for secure user authentication and session management.
- **Email Service**: [Nodemailer](https://nodemailer.com/) for handling contact forms and application notifications.
- **File Handling**: [Multer](https://github.com/expressjs/multer) and [GridFS Stream](https://github.com/aheckmann/gridfs-stream) for handling large file uploads (e.g., resumes) directly into MongoDB.

### Database

- **Database**: [MongoDB](https://www.mongodb.com/) - A NoSQL database for flexible data storage.
- **ODM**: [Mongoose](https://mongoosejs.com/) for robust data modeling and schema validation.
- **Storage**: **GridFS** is used within MongoDB to store and retrieve files that exceed the BSON-document size limit of 16 MB.

---

## Project Structure

The project follows a standard Next.js directory structure within the `src` folder:

- **`src/app/`**: Contains the App Router segments, including:
  - `(website)/`: Public-facing pages (About, Blog, Careers, Contact, Services).
  - `admin/`: Secured admin dashboard and management sections.
  - `api/`: Backend API endpoints.
  - `layout.tsx` & `globals.css`: Root layout and global styles.
- **`src/components/`**: Reusable UI components organized by feature or type.
- **`src/lib/`**: Shared utilities, database connection logic, and helper functions.
- **`src/models/`**: Mongoose schemas defining the data structure (Users, Jobs, Contacts, etc.).
- **`src/types/`**: TypeScript type definitions and interfaces.
- **`src/middleware.ts`**: Handles authentication protection and route redirects.

---

## Key Features

1.  **Professional Public Website**: Fully responsive and animated pages for business presentation.
2.  **Careers & Job Board**: Dynamic job listings with a built-in application system.
3.  **Job Application System**: Integrated resume upload functionality using GridFS for secure and scalable storage.
4.  **Admin Dashboard**: Comprehensive control panel for managing:
    - Job openings and applications.
    - Contact form submissions.
    - User/Subscriber lists.
5.  **Secure Authentication**: Role-based access control for administrative areas.
6.  **Contact & Lead Management**: Automated email notifications and centralized storage for business inquiries.

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (Local or Atlas instance)

### Local Setup

1.  **Clone the repository**.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Environment Variables**: Create a `.env` file in the root directory and configure:
    - `MONGODB_URI`
    - `NEXTAUTH_SECRET`
    - `EMAIL_USER` & `EMAIL_PASS` (for Nodemailer)
4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
5.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

---

## Conclusion

HK Nexus represents a state-of-the-art implementation of Next.js and MongoDB, providing a powerful platform for business operations and user engagement. Its modular architecture and modern tech stack ensure it is easy to maintain and scale as project requirements evolve.
