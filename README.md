# She Can Foundation - Internship Task

Modern full-stack internship task project for She Can Foundation built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- Responsive single-page site with gradient background and polished UI
- Contact form with React Hook Form, Zod validation, loading state, and success message
- Toast feedback via Sonner
- Backend API route to store submissions in MongoDB
- Admin page to review submissions and delete entries (newest first)

## Tech Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- React Hook Form + Zod
- Sonner
- MongoDB + Mongoose

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a local environment file:

```bash
cp .env.example .env.local
```

3. Update `MONGODB_URI` in `.env.local` with your MongoDB connection string.

4. Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` for the main site.

## Admin Page

Visit `http://localhost:3000/admin` to view and manage submissions.

## API Routes

- `POST /api/contact` - create a new submission
- `DELETE /api/submissions/:id` - delete a submission

## Scripts

- `npm run dev` - start the development server
- `npm run build` - build for production
- `npm run start` - run the production build
- `npm run lint` - run ESLint
