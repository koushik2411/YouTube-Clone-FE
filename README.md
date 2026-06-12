# YouTube Clone - Frontend

A modern YouTube-like video streaming frontend built with **React.js**, **React Router**, **Axios**, and **Tailwind CSS**.  
It connects to a Node.js + Express backend API for authentication, video upload, playback, comments, and channel management.

## Features

### Authentication
- User Register & Login
- JWT-based authentication
- Persistent login using LocalStorage
- Protected Routes

### Video System
- Home feed with all videos
- Video player page
- Like / Dislike system
- View count support
- Category filtering
- Search functionality

### Comments System
- Add comments on videos
- View all comments
- Edit / Delete comments (authorized users)

### Channel System
- Create channel
- View your channel dashboard
- Upload videos to channel
- Manage uploaded videos (edit/delete)

### UI/UX
- Responsive layout (mobile + desktop)
- Sidebar navigation with toggle
- Header with search
- Scrollable action buttons on video page
- Clean YouTube-like layout

## Tech Stack
- React.js (Vite)
- React Router DOM
- Axios
- Context API (Auth)
- Tailwind CSS
- React Icons

## Setup Instructions
1. Clone repository (git clone (https://github.com/koushik2411/YouTube-Clone-FE))
2. Install Dependencies (npm install)
3. Setup Environment variables (create .env file)
4. Start development server (npm run dev)

## Authentication Flow
- Token stored in localStorage
- Axios automatically sends JWT in headers
- Protected routes redirect unauthorized users
