Daywise — Habit & Todo Tracking SaaS

Daywise is a productivity-focused SaaS application designed to help users build consistent habits and manage daily todos through a calm, minimal interface.

This project is built as a real-world frontend architecture exercise, focusing on state management strategy, scalable structure, and product-driven UX decisions.

Core Features

User authentication (signup & login)

Habit tracking with progress and streaks

Todo management

Guided onboarding experience

Responsive, mobile-first UI

Architecture Overview

The application intentionally uses multiple state management approaches, each applied where it fits best.

React Context
Used for authentication and session state. Lightweight, global, and lifecycle-driven.

Redux Toolkit
Used for habits and todos. Handles complex, domain-specific state and async data flows.

This separation reflects common production-grade frontend architecture patterns.

Backend & Data

Firebase Authentication for secure user management

Firestore for storing user-scoped habits and todos

Data modeled per user to ensure isolation and scalability

Design Principles

Minimal, distraction-free UI

Clear visual hierarchy

Conversion-focused signup flow

Thoughtful empty states (no blank dashboards)

Tech Stack

React

Tailwind CSS

React Router

React Context API

Redux Toolkit

Firebase (Auth + Firestore)

Netlify

Deployment

Deployed on Netlify with continuous deployment and proper SPA routing configuration.

Purpose

This project is intended to demonstrate:

Frontend system design decisions

Realistic SaaS architecture

State management trade-offs

Clean, maintainable React structure
