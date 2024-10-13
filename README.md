# Amazon Clone Project

## Overview
This is a front-end project that clones the Amazon e-commerce platform, designed to demonstrate key functionalities such as product browsing, cart management, and a seamless user experience. The application is fully responsive and optimized for both PC and mobile devices. This project was created to practice React, explore e-commerce functionalities, and understand state management.

## Live Demo
You can view the live demo of the project [here](https://bespoke-mandazi-de30f3.netlify.app/).

## Tech Stack
This project showcases the power of modern web development using the following technologies:

- **React**: A popular JavaScript library for building user interfaces. React enables the creation of reusable components, making the codebase more maintainable and scalable.
- **Vite**: A fast and lightweight build tool that enhances the development experience with features like hot module replacement and optimized builds. Vite significantly reduces the time it takes to start and develop applications, leading to increased productivity.
- **JavaScript**: The core programming language for building interactive web applications. JavaScript provides the flexibility and functionality needed for dynamic content and user interactions.

### Benefits
- **Fast Development**: Thanks to Vite's rapid refresh capabilities, developers can see changes instantly, leading to a smoother workflow.
- **Component Reusability**: React's component-based architecture allows for easy reuse of UI components, speeding up development and ensuring consistency across the application.
- **Responsive Design**: Using Tailwind CSS in conjunction with React allows for quick and responsive design implementations, ensuring the application looks great on all devices.

This project serves as a testament to the capabilities of React, Vite, and JavaScript in creating modern web applications that are both performant and user-friendly.

## Features
- **Image Scroll**: Smooth horizontal scrolling for product images to enhance visual engagement.
- **Div Element Scroll**: Horizontal scrolling for product listings, making it easy to browse through multiple items.
- **Currency Change**: Prices are displayed in Indian Rupees (INR) for a localized shopping experience.
- **Add to Cart**: Users can add products to their cart with a simple click.
- **Buy Now**: Quick purchase option for users to streamline the buying process.
- **Cart Functionality**:
  - **Increase Quantity**: Users can increase the quantity of items in the cart with ease.
  - **Delete Quantity**: Users can remove items from the cart, managing their selections effortlessly.
- **Responsive Design**: The application is fully responsive, providing an optimal experience across various devices, including PCs and mobile.
- **User Notifications**: Utilizes toasters for notifications when items are added to the cart or purchased, enhancing user feedback.
- **Search Functionality**: Users can search for products using a search bar, making it easy to find specific items.
- **Product Filtering**: Users can filter products based on categories for better navigation.
- **Dropdown Menu**: Categories have a dropdown menu that expands on hover, revealing subcategories and additional features for easier navigation.
- **Sign In/Sign Out Functionality**: Users can sign in using their email and password and sign out for secure account management.

## Pages
The application includes the following pages:
- **Homepage**: The main landing page showcasing featured products and categories.
- **Electronics**: A dedicated page for electronics products.
- **TV**: A page specifically for television products.
- **Mobiles & Headphones**: A page focused on mobile devices and headphones.
- **Gaming**: A dedicated page for gaming products and accessories.
- **Search**: A page for searching products based on user queries.
- **Target ID**: A specific product or category page based on user selection.
- **Cart**: The shopping cart page where users can review their selected items.
- **Sign In**: A page for users to log in using their email and password.

## Routing
The application uses **React Router** for navigation between pages:
- **/**: Homepage
- **/electronics**: Electronics products page
- **/tvs**: TV products page
- **/mobilesheadphone**: Mobiles & Headphones products page
- **/mobiles**: Mobiles products page
- **/cart**: Cart page for managing selected items
- **/product/:id**: Detailed product view based on the selected item
- **/gaming**: Gaming products page
- **/search**: Search results page
- **/login**: Sign In page for user authentication

## Dependencies
This project utilizes the following libraries and tools:
- **Axios**: For making HTTP requests to the API.
- **Firebase**: For user authentication and data management.
- **Tailwind CSS**: For responsive and utility-first styling.
- **React Router**: For navigation between different pages.
- **React Material-UI Scroll**: For smooth scrolling effects.
- **React Multi Carousel**: For displaying products in a carousel format.
- **Font Awesome**: For icons.
- **React Toaster**: For notifications (toasters) when items are added to the cart or purchased.

## API Used
- **Fake Store API**: The application fetches product data from [Fake Store API](https://fakestoreapi.com).
