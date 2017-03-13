# react-bootstrap4-resume

Virtually all of the projects of any significant size that I've worked on over the past six years are not publicly available for viewing, making it impossible for me to point to them as examples of my solution architecting and coding skills. That's a result of both non-disclosure agreements and having developed internal sites and tools for clients in the healthcare and pharmacy domains.

This project is intended to alleviate that problem. It allows me to demonstrate the result--and share the code--of my new (in March 2017) resume website. In it, I employ many of the technologies I most enjoy working with, starting with React.

##Setting up the project

This project was seeded with [Create React App](https://github.com/facebookincubator/create-react-app). That provided a basic React application skeleton, including Babel to transpile ES2015 JavaScript to ES5 and Webpack pre-configured to manage both development and production builds.

With an eye toward using Bootstrap in the project, and following the Create React App documentation for extending the initial seed, I installed node-sass and npm-run-all, then added scripts to the package.json file to watch and build the .scss files.

The Create React App documentation currently (March 2017) provides instructions for adding Bootstrap 3 to a React project, but I wanted to start using Bootstrap 4. To accomplish this, I instead followed the Getting Started instructions for [reactstrap](https://github.com/reactstrap/reactstrap), a package that provides Bootstrap 4 components.

##Third party offerings used the project

The tech stack word cloud seen in the top section was created at tagul.com.
