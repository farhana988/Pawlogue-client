
# Pawlogue (A pet adoption platform)

 Pawlogue is a web platform designed to connect loving individuals with pets in need of homes, while also supporting donation campaigns to help improve the lives of these furry friends. Whether you're looking to adopt a new pet or contribute to the welfare of animals, Pawlogue offers a user-friendly experience to make it easier to find pets for adoption and contribute to charitable causes. In addition to facilitating pet adoption, Pawlogue also hosts donation campaigns dedicated to improving the lives of pets in need. Users can browse ongoing campaigns and choose to support them with their contributions.



 <!-- ![Pawlogue Screenshot](https://i.ibb.co/zh2trScB/pawl.jpg) -->
 <img src="https://i.ibb.co/zh2trScB/pawl.jpg" alt="Pawlogue Screenshot" style="width: 100%; max-width: 800px;"/>


- **Live URL:**  https://pawlogue-51325.web.app

## 🎯 Purpose
The purpose of this project is to create a platform that connects individuals with pets in need of loving homes, while also allowing users to contribute to donation campaigns that support the well-being of these animals. The site aims to provide a user-friendly experience for pet adoption and charitable giving, making it easier for people to help pets in need and improve their lives.

## 🛠️ Main Technologies

- **Frontend**: React.js
- **Backend**: Firebase (for authentication) , MongoDb (for database)
- **Libraries/Packages**:
  - **animate.css** – For animations and transitions
  - **lottie-react** – For adding animations using Lottie files
  - **axios** – For making HTTP requests
  - **react-icons** – For using vector icons in the UI
  - **sweetalert2** – For showing beautiful and customizable alerts

## 🔑 Key Features
- **Pet Listings**: Browse and adopt pets from various categories like cats, dogs, rabbits, and more.
- **CRUD Operations**: Users can add, edit, and delete pets or any donation campaign they have added.
- **Search and Filter**: Efficient searching and filtering system for users to find the pets they want.
- **Donation Campaigns**: Support pets in need through donation campaigns that help fund their care.
- **User Interaction**: Create an account, track adoption history, and manage donations.
- **Secure Payment**: Make donations safely through integrated payment gateways.



## 📦 Dependencies
Here’s a list of key npm packages that have been used in the project:

- **@stripe/react-stripe-js**: React library for integrating Stripe payments.
- **@tanstack/react-query**: Data fetching and caching library for React.
- **@tanstack/react-table**: Headless table library for building flexible and powerful tables.
- **animate.css**: A library for adding animation effects to elements.
- **axios**: Promise-based HTTP client for the browser and Node.js.
- **flowbite**: Tailwind CSS components library.
- **formik**: React form library for handling form submission and validation.
- **react-icons**: Popular icons for React applications.
- **react-intersection-observer**: A React implementation for the Intersection Observer API.
- **react-loading-skeleton**: Skeleton loader components for React.
- **react-quill**: A React component for Quill, a rich text editor.
- **react-select**: A flexible and customizable dropdown library for React.
- **sweetalert2**: A library for beautiful, responsive, customizable popups.

## 🚀 How to Run the Project Locally

Follow these steps to run this project on your local machine:

1. **Clone the repository**:
 ```bash
 git clone https://github.com/farhana988/Pawlogue-client.git
 ```

2. **Install dependencies:** First, make sure you have Node.js installed. Then, run the following command to install all the necessary dependencies:
 ```bash
npm install
 ```
 
3. **Set up Stripe keys:** 
- Go to the Stripe Dashboard to get your Publishable Key and Secret Key.
- Create a .env file in the root directory of the project (if it doesn't exist) and add the following:

 ```bash
VITE_Payment_Gateway_PK=your_publishable_key

 ```

4. **Set up ImageBB key:** 
- Go to ImageBB and sign in or create an account. Then visit the ImageBB API page. Click on Get Your API Key to generate your key.
- Add the following in the .env file
 ```bash
VITE_IMGBB_API_KEY=your_imagebb_api_key


 ```

5. **Start the application:** Now you can start the application by running:

 ```bash
npm run dev
 ```
