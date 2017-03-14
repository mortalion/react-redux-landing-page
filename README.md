# react-bootstrap4-resume

Virtually all of the projects of any significant size that I've worked on over the past six years are not publicly available for viewing, making it impossible for me to point to them as examples of my solution architecting and coding skills. That's a result of both non-disclosure agreements and having developed internal sites and tools for clients in the healthcare and pharmacy domains.

This project is intended to alleviate that problem a bit. It allows me to demonstrate the result--and share the code--of my new (in March 2017) resume website. In it, I employ some of the technologies I most enjoy working with, beginning with JavaScript ES2015 and React.

##Setting up the project

This project was seeded with [Create React App](https://github.com/facebookincubator/create-react-app). That provided a basic React application skeleton, including Babel to transpile ES2015 JavaScript to ES5 and Webpack pre-configured to manage both development and production builds. Also available in this seed project are a number of packages that the Facebook Team has found useful. I'm not sure how I ever lived without [Autoprefixer](https://github.com/postcss/autoprefixer). It allows me to write my CSS rules without worrying about vendor prefixes, then--when Webpack builds the project--the appropriate vendor prefixes are automatically inserted into the minified CSS. Very cool!

With an eye toward using Bootstrap in this project, and following the Create React App documentation for extending the initial seed, I installed node-sass and npm-run-all, then added scripts to the package.json file to watch and build the SCSS files.

The Create React App documentation currently (March 2017) provides instructions for adding Bootstrap 3 to a React project, but I wanted to start using Bootstrap 4. To accomplish this, I instead followed the Getting Started instructions for [reactstrap](https://github.com/reactstrap/reactstrap), a package that provides Bootstrap 4 components and styles.

With Bootstrap at Alpha 6, I wouldn't yet use it on a client project, but I'm very excited about its new features. I especially wanted to become familiar with the new Card component, and to check out Bootstrap's move to SASS and positioning with Flexbox.

Font Awesome is awesome. With React, I like the [react-fontawsome](https://github.com/danawoodman/react-fontawesome) package. It provides the Font Awesome icons as React components, making them very easy to use. The package does not include the Font Awesome CSS or fonts themselves; they needed to be downloaded and included in the project.

##Third party offerings and code used the project

The tech stack word cloud seen in the top section was created at tagul.com.

Any images used that were not my own were licensed from Adobe Stock.

For the bouncing arrow, I modified code found at http://codepen.io/anon/pen/ByZRyX.

##Tricks and Tips

There's a great description of Isomorphic JavaScript at http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/.

There's a useful article about responsive font sizing at http://codeitdown.com/responsive-font-size-css/.

I vertically positioned the client logo images by increasing or shrinking their canvas height in Adobe Photoshop. With Webpack automatically rebuilding on saves, I could rapidly visually tweak the logo positions in their rows. That method also saved the time and lines of styling code that doing it in CSS would have cost.

Here's a fix for a case where transform: scale doesn't work in Chrome and Safari: http://stackoverflow.com/questions/25372315/transform-scale-property-not-working-in-chrome-safari.
