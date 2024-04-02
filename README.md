# OneMovie
OneMovie is a web application built using React, TypeScript, Tailwind CSS, and Sanity CMS. It allows users to explore a collection of sci-fi movies, view details about each movie, and search for movies based on various criteria.

## Features
View a curated collection of sci-fi movies.
Search for movies by title, genre, or release year.
View detailed information about each movie, including title, release date and poster image.
Navigate between different pages using React Router DOM.
## Technologies Used
1. React: A JavaScript library for building user interfaces.
2. TypeScript: A statically typed superset of JavaScript that adds optional static typing.
3. Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
4. Sanity CMS: A headless CMS (Content Management System) used to manage movie data and provide an API for fetching movie information.

## Setup
#### Clone the repository:
```bash
git clone https://github.com/SK170401/OneMovie
```
Install dependencies:
``` bash
cd OneMovie
npm install
```
#### Set up Sanity CMS:
Sign up for a Sanity account at https://www.sanity.io.
Set up a new Sanity project and configure your schema to manage movie data.
Create an API token for accessing your Sanity project.
Update the Sanity client configuration in your React app to use your project's API token.

#### Start the development server:
```bash
npm start
```
Open http://localhost:3000 in your browser to view the app.

### Usage
#### Conditional Rendering:
Use conditional rendering to display different components based on user interactions, such as showing movie details when a movie card is clicked.

#### Hooks Usage:
Utilize React hooks like useState, useEffect, and useCallback to manage state, perform side effects, and optimize performance within functional components.

#### React Router DOM:
Implement navigation using React Router DOM to handle routing and display different pages based on the URL path.

### Contributing
Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request.

### License
This project is licensed under the MIT License.