# ProgressiveWebApplications-PWA-Text-Editor

## Description

This is a web-based text editor that allows users to create notes or code snippets whether they have an internet connection or not. The application's service worker and Cache API ensure that it remains fully functional even when offline. Furthermore, the application enables users to access previously visited pages even if they are offline.


## Table of Contents (Optional)



- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Questions](#questions)

## Installation

To create this text editor, several methods must be implemented to store data in an IndexedDB database.

To install the application, Node.js and various npm packages are required. Node Package Manager (npm) is a software manager and installer that puts modules in place, manages dependencies, and initializes using the "npm init" command, which generates a package.json file containing all the application's details that the user has inputted during initialization.

The following npm packages are necessary for this application:

Express.js: npm install express
Webpack: npm install --save-dev webpack
Webpack-dev-server: npm install webpack-dev-server --save-dev
WebpackPwaManifest: npm install --save-dev webpack-pwa-manifest
Babel: npm install babel
CSS-loader: npm install --save-dev css-loader
Concurrently: npm install concurrently --save (enables running multiple commands concurrently)
IndexedDB: npm install idb

## Usage

GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
This is the deployed link to Heroku to see how it is run :


## License

There is no license to this application 


## Contribute

If you want to Contribute then you can visit my Github here:

## Questions

If you have any questions then you can email me at: anabennett77@gmail.com
