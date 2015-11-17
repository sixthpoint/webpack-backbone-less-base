# Preface
The project is to be used as a starter template for designing a site using BackboneJS, LESS, and Webpack as a modular bundler.

#Installation / Requirements
You must have NPM installed and Webpack.

On CentOS:
```Text
yum install -y nodejs
```

To install Webpack globally
```Text
npm install webpack -g
```

#Usage
Checkout the project and navigate using your terminal to the base folder of this projects contents.

Once in the base directory run the following command to install all the nodule_modules defined in the package.json
```Text
npm install
```

After the downloads complete webpack can be ran to create the "build" folder which will have all resources compacted as defined in the webpack.config.js

For production (optimized)
```Text
webpack -p
```

For development leave off the -p param
```Text
webpack
```

Webpack comes with a default development server. To see the example project functioning, run the project in watch mode and navigate to http://localhost:8080/webpack-dev-server/

Run in watch mode (scans for resouce changes)
```Text
webpack-dev-server --inline
```
