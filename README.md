# Infinite Scroll Products

## 📌 Project Overview

This project demonstrates an Infinite Scroll implementation using React Hooks. Data is fetched from the JSONPlaceholder API and displayed progressively as the user scrolls down the page.

The goal of this project is to practice working with asynchronous data fetching, state management, and the Intersection Observer API.

---

## 🚀 Features

* Fetch data from a REST API
* Display posts dynamically
* Infinite scrolling functionality
* Automatic loading of additional content
* React Hooks (`useState`, `useEffect`, `useRef`)
* Efficient rendering and state updates
* Clean and responsive user experience

---

## 🛠️ Technologies Used

* React
* JavaScript (ES6+)
* Fetch API
* Intersection Observer API
* JSONPlaceholder API

---

## 📂 Project Structure

```bash
src/
│
├── Products.jsx
│
└── App.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd project-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

For Create React App projects:

```bash
npm start
```

---

## 🔗 API Endpoint

```text
https://jsonplaceholder.typicode.com/posts
```

---

## 🧠 How It Works

1. The application fetches posts from the API when the component mounts.
2. The first five posts are displayed initially.
3. An Intersection Observer watches a target element at the bottom of the page.
4. When the target enters the viewport, five more posts are loaded.
5. The process continues until all posts have been displayed.
6. Once all data is loaded, a message is shown indicating that there is no more content to load.

---

## 🎯 Learning Objectives

This project helped practice:

* React Hooks
* State Management
* API Integration
* Infinite Scroll Implementation
* Intersection Observer API
* Performance Optimization
* Component Lifecycle Management

---

## 📸 Expected Result

* Smooth infinite scrolling experience
* Dynamic content loading
* Improved user engagement
* Efficient handling of large datasets

---

## 👨‍💻 Author

Developed as a React practice project to explore modern frontend development concepts, including asynchronous data fetching and infinite scrolling.
