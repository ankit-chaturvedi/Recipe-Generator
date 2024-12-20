# Recipe Generator

## Overview

The Recipe Generator is a web application that allows users to input ingredients they have on hand, and it will suggest recipes using those ingredients. The app leverages the Hugging Face Mistral API to generate recipe suggestions and is built with React, HTML, CSS, and Tailwind CSS for styling.

## Screenshots :
![Home Page1](https://raw.github.com/ankit-chaturvedi/Recipe-Generator/master/images/image2.png)
<div style="display: flex; gap: 10px;">
  <img src="https://raw.github.com/ankit-chaturvedi/Recipe-Generator/master/images/image3.png" alt="Home Page2" width="48%">
  <img src="https://raw.github.com/ankit-chaturvedi/Recipe-Generator/master/images/image4.png" alt="Home Page3" width="48%">
</div>


## Features

- **Ingredient-based Recipe Suggestions**: Users can input a list of ingredients, and the app will suggest relevant recipes based on those ingredients.
- **Responsive Design**: The application is styled using Tailwind CSS, making it fully responsive and user-friendly across devices.
- **Markdown Support**: The app uses the React Markdown plugin to render recipe details in a readable, formatted way.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **HTML & CSS**: For basic structure and styling of the app.
- **Tailwind CSS**: A utility-first CSS framework used to style the application.
- **Hugging Face Mistral API**: Used for generating recipe suggestions based on ingredients provided by the user.
- **React Markdown**: A plugin for rendering Markdown content.

## Installation

Follow these steps to set up the project locally:

### 1. Create a React App using Vite

1. First, create a new React project using Vite by running the following command in your terminal:

```bash
   npm create vite@latest 
   ```

### 2. Install Dependencies

Run the following command to install the required dependencies:
```bash
npm install
```
### 3. Set up Tailwind CSS

Follow these steps to set up Tailwind CSS in your Vite React project:

#### 1. Install Tailwind CSS via npm:
```bash
npm install -D tailwindcss postcss autoprefixer
```
#### 2. Initialize Tailwind CSS by running the following command:
```bash
npx tailwindcss init
```
#### 3. Set up Tailwind in your CSS by adding the following to your `src/index.css` (or create a new CSS file):
```bash
/* src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```
#### 4. Configure Tailwind to purge unused styles in production. Open the `tailwind.config.js` file and add the following:
```bash
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
#### 5. Start the Development Server
```bash
npm run dev
```
