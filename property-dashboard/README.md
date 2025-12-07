# Property Rental Dashboard

A **React-based Property Rental Dashboard** built with **React (Vite)** and **Tailwind CSS**, featuring a modern, responsive, and interactive UI. Users can browse properties, filter/search listings, view details, save favorites, and toggle between light and dark mode and grid and list view.

---

## 🌟 Features

### Core Features
- View a list of properties from a local `properties.json` file
- Filter by:
  - Price range (slider)
  - City (dropdown)
  - Property type (buttons)
  - Rating
- Search properties by title or city
- Open property details in a modal 
- Add properties to **Favorites** (persisted using `localStorage`)
- Toggle between **Grid View / List View**
- Light/Dark mode toggle
- Fully **responsive design**
- Reusable components (PropertyCard, FiltersBar, Navbar, etc.)
- Smooth animations
_ Hover

### Optional / Extra Features
- Static map placeholder section for property locations
- Animated property cards 



---

## 🏗️ Project Structure

property-dashboard/
├── public/
│ ├── properties.json
│ └── images/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── FiltersBar.jsx
│ │ ├── PropertyCard.jsx
│ │ └── PropertyDetails.jsx
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ └── FavoritesPage.jsx
│ ├── App.jsx
│ └── main.jsx
├── tailwind.config.js
└── package.json


---

## 💻 Tech Stack

- **Frontend:** React (Vite)  
- **Styling:** Tailwind CSS  
- **Icons:** React Icons  
- **Animations (optional):** GSAP  
- **Data Storage:** `localStorage` for favorites  
- **Data Source:** Local JSON file (`properties.json`)  

---

## 🚀 Installation

 Clone the repository:

git clone <https://github.com/FaizFerozMehmood/Property-Rental-Dashboard>
Navigate to the project folder:

cd property-dashboard
Install dependencies:

npm install
Start the development server:

npm run dev
Open the app in your browser

## Usage

Browse the property listings on the Home Page

Use filters and search to find properties

Click on a property view button to see details

Add properties to Favorites using the ❤️ button

Switch between Grid/List view

Toggle Light/Dark mode from the Navbar

View your Favorites on the Favorites Page

Delete your Favorites on the Favorites Page

---

### Submission Note
Completed as **Task 4th** for the DevBazm Internship. This dashboard demonstrates practical React development skills with a focus on reusable components, responsive UI, and interactive features.

### Author
**Faiz Mahmood**
