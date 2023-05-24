![Group 48095678](https://almode.ru/uploads/posts/2021-07/1626428185_23-almode_ru-p-malenkii-uyutnii-dom-25.jpg)


# Eco camping "DOME"
The Ecocamping is choosing an environmentally sustainable holiday, a journey based on respect for nature and the environment.

## Technologies Used

This project was built using the following technologies:

1. **HTML** - A standardized hypertext markup language for documents for viewing web pages in a browser.
2. **CSS** - A formal language for decorating and describing the appearance of a document.
3. **JavaScript** - A multi-paradigm programming language.
4. **GitHub Pages** - A platform for hosting static websites directly from GitHub repositories.

The site is live at https://mamaroisa.github.io/


## Features

- **useState hook:**
  The Age Calculator App utilizes React's useState hook to manage component state, allowing the app to respond to user input and update the user interface accordingly.

- **Custom hook:**
  The app implements a custom hook, useAgeCalculator.js, which encapsulates the age calculation logic and state management. This custom hook makes the code more modular and easier to maintain.

- **Responsive design:**
  The app's layout and styling are optimized for various screen sizes using media queries in SCSS. This ensures a consistent and user-friendly experience across different devices.

- **Form validation:**
  The app includes input validation to ensure that users provide valid date values for their date of birth. Error messages are displayed to guide users in correcting any input mistakes.

- **SCSS structure:**
  The SCSS files are organized in a modular fashion, with separate files for variables and each component. This structure allows for better maintainability and ease of customization.

- **Vite:**
  The project uses Vite as the build tool and development server, providing a fast and efficient development experience.

## Project Setup and Development

To set up the project locally and start the development server, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/<username>/<repository>.git
   cd <repository>

   Install the dependencies:
   ```

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
This will open the application in your default web browser at http://localhost:3000.

Building and Deploying to GitHub Pages
To build the project for production and deploy it to GitHub Pages, follow these steps:

Build the project for production:

bash
Copy code
npm run build
This will generate the production build in the dist folder.

Deploy the build to GitHub Pages:

bash
Copy code
npm run deploy
This command will push the contents of the dist folder to the gh-pages branch of your repository.
