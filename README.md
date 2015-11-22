# Preface
This project is to be used as a starter template for designing a site using Webpack modular bundler. It includes BackboneJS using commonJS.

To add additional features the following webpack plugins have been included.

- extract-text-webpack-plugin - used to generate a single separate CSS file to include
- url-loader - allows for loading of resources such as otf|eot|png|svg|ttf|woff|woff2 depending on file size
- css-loader - load .css files
- less-loader - used to parse less files (bootstrap / font-awesome included)
- autoprefixer-loader - write your CSS rules without vendor prefixes 
- ejs-loader - EJS (Underscore/LoDash Templates) loader for webpack. Uses lodash template function to compile templates.

The following libraries have been included to design the site

- BackboneJS 1.2.x
- Bootstrap CSS (LESS) / Javascript
- Font-Awesome (LESS)

Installation / Requirements
----------------------------

You must have NPM installed and Webpack.

On CentOS:

    $ yum install -y nodejs


To install Webpack globally

    $ npm install webpack -g

Usage
------

Checkout the project and navigate using your terminal to the base folder of this projects contents.

Once in the base directory run the following command to install all the nodule_modules defined in the package.json

    $ npm install


After the downloads complete webpack can be ran to create the "build" folder which will have all resources compacted as defined in the webpack.config.js

For production (optimized)

    $ webpack -p


For development leave off the -p param

    $ webpack


Webpack comes with a default development server. To see the example project functioning, run the project in watch mode and navigate to http://localhost:8080/webpack-dev-server/

Run in watch mode (scans for resources changes)

    $ webpack-dev-server --inline
