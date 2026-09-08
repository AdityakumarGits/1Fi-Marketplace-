1Fi Marketplace Assignment

A beginner-friendly, modular React/Vite frontend implementation of the 1Fi Marketplace, built according to the provided assignment requirements and reference screens.

Features

Shop page with:

Top Brands
Nearby Stores
1Fi Marketplace
1Fi-inspired light/purple visual theme
Marketplace hero section
Featured Products
Best Sellers
Best Deals
Product listing
Product details
Product variant selection
EMI plan selection
Proceed CTA
Mock API/data service
Loading and error states
Responsive design

Tech Stack

React
Vite
React Router
Lucide React
CSS


Getting Started
Install dependencies

npm install
Start the development server
npm run dev

The application will be available at the local URL provided by Vite.

Production Build
npm run build
Project Structure

src/
├── components/     # Reusable UI components
├── data/           # Mock product and EMI data
├── pages/          # Application pages/routes
├── services/       # Mock API/data service
├── styles/         # Global and responsive CSS
├── App.jsx
└── main.jsx

Data & API

Product and EMI data are separated from the UI components and accessed through a service layer.

The current implementation uses mock data/API responses because backend integration was not available. The service layer is structured so that a real backend API can replace the mock implementation later without requiring major changes to the UI components.

Marketplace Flow

Shop
  ↓
1Fi Marketplace
  ↓
Product Listing
  ↓
Product Details
  ↓
Select Variant
  ↓
Select EMI Plan
  ↓
Proceed

Responsive Design
The marketplace is designed to work across:
Desktop
Tablet
Mobile
Assignment Scope

The implementation focuses specifically on the 1Fi Marketplace experience within the Shop section.
Top Brands and Nearby Stores are included as placeholder sections as specified in the assignment.

Notes

This project focuses on:
Reusable components
Separation of UI and data
Maintainable project structure
Loading and error handling
Responsive user experience
A consistent 1Fi-inspired visual experience