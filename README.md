# VibeMatch Frontend/Client

Frontend application for VibeMatch - a modern social networking and matchmaking platform built with React, Vite, Redux Toolkit, TailwindCSS, DaisyUI, Axios, and Socket.IO.

The frontend delivers a responsive and engaging user experience, enabling users to discover new connections, manage profiles, chat in real-time, purchase premium memberships, and interact seamlessly across the platform.

---

# Overview

VibeMatch provides a modern social experience focused on meaningful connections and real-time interactions.

The frontend is designed with performance, responsiveness, and scalability in mind while maintaining a clean and intuitive user interface.

### Key Highlights

- Modern React Architecture
- State Management with Redux Toolkit
- Real-Time Messaging
- Responsive Mobile-Friendly Design
- Premium Membership Dashboard
- Secure Authentication Flows
- Dynamic User Discovery Feed
- AWS Deployed Backend Integration
- Production Ready UI Components

---

# Core Features

## Authentication & User Access

A complete authentication experience focused on usability and security.

### Features

- User Registration
- Login
- Logout
- Email Verification
- Forgot Password
- Password Reset
- Protected Routes
- Session Persistence
- Authentication State Management
- Secure Cookie-Based Authentication

---

## User Profile Experience

Users can personalize their profile and showcase their interests.

### Features

- Profile Viewing
- Profile Editing
- Profile Picture Support
- About Section
- Interest Management
- Age & Gender Information
- City & Country Information
- Premium Badge Display
- Live Profile Preview

---

## Smart User Discovery Feed

Users can explore and discover new profiles based on availability and connection status.

### Features

- Dynamic Feed Generation
- User Cards
- Profile Preview
- Send Connection Requests
- Ignore Users
- Real-Time Feed Updates
- Premium Badge Visibility

---

## Connection Management System

A complete relationship workflow built around user interaction.

### Features

- Send Requests
- Accept Requests
- Reject Requests
- View Incoming Requests
- View Accepted Connections
- Connection Status Management
- Connected User Discovery

---

## Real-Time Chat Experience

Instant messaging powered by Socket.IO.

### Features

- One-to-One Messaging
- Live Message Delivery
- Persistent Chat History
- Real-Time Updates
- Responsive Chat Interface
- Conversation Synchronization

---

## Premium Membership Experience

Integrated premium membership system powered by Razorpay.

### Silver Membership

- Premium Badge
- Increased Profile Visibility
- Priority Customer Support
- 3 Months Access

### Gold Membership

- Premium Badge
- Maximum Profile Visibility
- Better Match Discovery
- Featured Profile Placement
- Fast-Track Customer Support
- 6 Months Access

### Premium Features

- Razorpay Checkout
- Membership Dashboard
- Active Membership Status
- Membership Expiry Tracking
- Premium Badge Visibility
- Dynamic UI Updates

---

## Legal & Information Pages

Built-in informational pages for transparency and compliance.

### Pages

- About Us
- Contact Us
- Privacy Policy
- Refund Policy
- Terms & Conditions
- Custom 404 Page

---

## Responsive User Interface

Designed for a seamless experience across devices.

### Features

- Mobile Responsive Layout
- Tablet Friendly Design
- Desktop Optimized Experience
- Modern UI Components
- Smooth User Navigation
- Loading States & Feedback

---

# Technology Stack

## Frontend Framework

- React 19
- Vite

## State Management

- Redux Toolkit
- React Redux

## Styling

- TailwindCSS
- DaisyUI

## HTTP Client

- Axios

## Routing

- React Router

## Real-Time Communication

- Socket.IO Client

## Payment Integration

- Razorpay

---

# Project Structure

```txt
vibematch-frontend/
│
├── public/
│   └── favicon.svg
│
├── src/
│
│   ├── components/
│   │
│   │   ├── Body.jsx
│   │   ├── Chat.jsx
│   │   ├── Connections.jsx
│   │   ├── DeleteAccount.jsx
│   │   ├── EditProfile.jsx
│   │   ├── Feed.jsx
│   │   ├── Footer.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Premium.jsx
│   │   ├── Profile.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── Requests.jsx
│   │   ├── ResetPassword.jsx
│   │   ├── UserCard.jsx
│   │   └── Verify.jsx
│   │
│   ├── pages/
│   │
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── RefundPolicy.jsx
│   │   └── TermsConditions.jsx
│   │
│   ├── store/
│   │
│   │   ├── appStore.js
│   │   └── slices/
│   │       ├── connectionSlice.js
│   │       ├── feedSlice.js
│   │       ├── requestSlice.js
│   │       └── userSlice.js
│   │
│   ├── utils/
│   │
│   │   ├── constants.js
│   │   └── socket.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

# State Management Architecture

Redux Toolkit is used for centralized application state.

### User Slice

Handles:

- Logged In User
- Authentication State
- Premium Status
- Badge Status
- Profile Information

### Feed Slice

Handles:

- User Feed Data
- Feed Updates
- Feed Refresh Logic

### Request Slice

Handles:

- Pending Requests
- Accept / Reject Updates

### Connection Slice

Handles:

- User Connections
- Connection Management

---

# Major Components

## Navbar

Provides:

- Authentication Navigation
- Profile Access
- Premium Access
- Request Notifications
- Logout Functionality

---

## Feed

Responsible for:

- User Discovery
- Connection Requests
- Profile Exploration

---

## Profile

Responsible for:

- User Profile Display
- Premium Badge Display
- Membership Status

---

## Chat

Responsible for:

- Real-Time Communication
- Message Rendering
- Socket Events

---

## Premium

Responsible for:

- Membership Selection
- Razorpay Checkout
- Premium Dashboard
- Membership Expiry Display

---

# Getting Started

## Clone Repository

```bash
git clone <repository-url>

cd vibematch-frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

---

# Application General Flow

```txt
User Registration
        ↓
Email Verification
        ↓
Login
        ↓
User Feed
        ↓
Send Connection Request
        ↓
Accept Connection
        ↓
Start Chatting
        ↓
Purchase Premium Membership
        ↓
Receive Premium Benefits
```

---

# User Experience Highlights

### Modern Authentication Flow

Users can securely create accounts, verify their email addresses, recover forgotten passwords, and manage account security seamlessly.

### Social Networking Workflow

Users discover profiles, send requests, build connections, and communicate through real-time messaging.

### Premium Membership Journey

Users can upgrade their account using Razorpay and instantly unlock premium features with membership tracking and premium badges.

### Real-Time Engagement

Socket.IO enables instant communication between connected users without requiring page refreshes.

---

# Performance & Scalability

The frontend is designed for:

- Fast Initial Load Times
- Efficient State Management
- Reusable Component Architecture
- Scalable Feature Expansion
- Responsive Rendering
- Optimized API Communication

---

# Future Enhancements

- Dark / Light Theme Toggle
- Online User Presence
- Message Read Receipts
- Push Notifications
- Media Sharing in Chat
- User Blocking & Reporting

---

# Conclusion

VibeMatch Frontend showcases modern frontend engineering practices including responsive UI design, state management, real-time communication, payment integration, and scalable React architecture.
