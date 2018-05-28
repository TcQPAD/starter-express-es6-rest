**Table of Contents**
- [Starter-REST](#starter-rest)
  * [express-es6](#express-es6)
  * [Installation](#installation)
  * [Technologies](#technologies)
  * [IDE configuration](#ide-configuration)
  * [Starting the server](#starting-the-server)
  * [Functions](#functions)
  * [Troubleshootings](#troubleshootings)
     * [Cors](#cors)
     * [File upload and form parsing](#file-upload-and-form-parsing)
  * [Authors](#authors)
  * [Problems?](#problems)
  * [Version](#version)
  * [License](#license)

# Starter-REST

## express-es6
Sample of express server using ES6

The goal of this project is to have a sample of server using express and the ES6 syntax

Details on the new technologies can be found in the **Technologies** section.

## Installation

In order to install this starter and integrate it to your project,
follow the instructions below:

`1) Create a new repository on Github or any other similar service.` 

`2) Create a new folder (on your machine) where you'll store the project.`

`3) Open a Shell in the newly created folder and enter:`

```
git clone https://github.com/TcQPAD/startert-express-es6-rest.git
cd startert-express-es6-rest
git remote rename origin upstream
git remote add origin URL_TO_GITHUB_REPO_CREATED_AT_STEP_1)
# if you can't push to master, 
# it's because you missed one of the previous CMD and are trying to push to my repository
git push origin master 
```

I will maybe update the project over time, for example, to make it compatible with
new major releases of NodeJS.

I will post a message on the association group if that's the case. You can update the project by issuing the following command:

`git pull upstream master && git push origin master # or whatever branch you're working with`

You **should not issue** this command on your master branch since it may break some code due to version conflicts.

## Technologies

This server runs under [NodeJS v7.8.0](https://nodejs.org/en/). Newer versions may be compatible, but **I didn't test
them and won't**.

If you want to develop under NodeJS, please install the 
NodeJS environment gotten from the link above. 

After you installed it, please restart your computer to make the changes effective 
(ENV_VAR, etc...).

You can use any type of database you need to work with this application.
I recommend using NoSQL databases such as MongoDB, since they store information in a format that
allows JSON conversion, and have a lot of ORM packages available through NPM.

NPM comes with NodeJS and is a package manager similar to Maven for Java. This tool provides
a huge quantity of libraries that you'll definitely want to use for your project.

## IDE configuration ##

If you wish to make NodeJS development much easier,
you can install several plugins into Intellij, like autocompletion,
code highlighting, etc....

To install NodeJS plugin on Intellij, follow these steps :

`File > Settings > Plugins > Browse plugins repositories`

Then type **NodeJS** in the search bar and press **Install**
on the right, to install the NodeJS plugin for Intellij.

You can also try out WebStorm, which is an IDE focused on web languages.

All Jetbrains' IDEs are free for Polytech Students. All you have to do is 
signing up with your student email address.

## Starting the server

Open a terminal in the root folder of the project, and type in:

```
npm install
npm start
```

Then, visit the following URL to see the server running: http://127.0.0.1:3000

If you want to see a sub-route handling, visit: http://127.0.0.1:3000/api/customers

The http://127.0.0.1:3000/api URL is defined in index.js, and is handled by the router imported for that
specific route.
The imported router is the router in the customers/ directory of the project, and this router defines 2
sub-routes that respond to 2 types of requests:

  - GET : http://127.0.0.1:3000/api/customers/
  - POST : http://127.0.0.1:3000/api/customers/

## Functions

The server is already configured to :

  - Use the default IP and PORT for the MongoDB database running in your environment
  - Behave as a REST server (see: https://openclassrooms.com/courses/utilisez-des-api-rest-dans-vos-projets-web/pourquoi-rest)

The advantages of such a code architecture are : 

  - New functionality integration is really fast and easy. You only need to add a new folder with a router file, and a model file.
  - Logic of the application is separated from the behavior of the application.

## Troubleshootings

This section covers some troubleshootings you may encounter, and their solutions.

#### Cors 

When you'll try to connect your frontend with this API, you may encounter an error (on client side) telling something like :

`Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://YOURDOMAIN:PORT' is therefore not allowed access`

This is because you didn't tell your backend API to trust the client even though its origin came from a domain he doesn't know.
To fix this issue, follow the instructions below:

  * Add the CORS dependency to your project:
  
  `npm i cors@^2.8.3 --save` (you can replace 2.8.3 with any version you wish to install)
  
  * In your index.js file, add the following lines along with the middlewares attachments to your server:
  
  ```
  let originsWhitelist = [
    'http://localhost:4200', //this is an example of a front-end url for development
    // add all your domains below, for example : your-domain.com, your-domain.org, etc...
  ];

  let corsOptions = {
    origin: function(origin, callback){
      let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
      callback(null, isWhitelisted);
    },
    credentials:true
  };
  //here is the magic
  app.use(cors(corsOptions));
  ```
  
#### File upload and form parsing

Sometimes, you'll want to allow a given user to upload a file to your backend. For example, one may want to upload a profile picture, that will need to be received by your backend, checked (format, encoding, etc...) for validity, and stored on your server.

It can be really cumbersome to implement by yourself a complete middleware to handle form data forms, this is why I'll show you how to use a third library that will do the job for us.

  * Install formidable:
  
  `npm i formidable@^1.1.1 --save` (you can replace 1.1.1 with version you wish to install)
  
  * Import formidable middleware into index.js file:
  
  ```
  app.use('/endpoint', (req, res, next) => {
    let form = new formidable.IncomingForm({
      encoding: 'utf-8',
      uploadDir: path.join(__dirname, 'uploads'), // change with the directory you wish to upload to (on your server)
      multiples: false,                           // will tell formidable to ignore forms with more than one file
      keepExtensions: true                        // the uploaded files will keep their extensions
    });
    form.once('error', console.log);
    form.parse(req, (err, fields, files) => {
      Object.assign(req, {fields, files});
      next();
    })
  });
  ```
  
  * Then, in your routes that will handle the check of form data you receive, you can access the file(s) and data this way:
  
  ```
  req.fields // equivalent to req.body for multipart/form-data Content-Type
  req.files  // will hold your file(s)
  ```
  
  For example:
  
  ```
  let userId = req.fields.userId;    // gets the user ID in the request
  let userFile = req.files.file   // gets the file the user uploaded
  ```
  
  Below is a sample where I import several middlewares, in an index.js file of one of the backend I wrote:
  
  ```
  // Body parser to be able to read the json in the request
  app.use(bodyParser.json());
  
  // prefixes /assets/ to all paths under public/
  app.use('/assets', express.static('public'));
  
  // middleware for form parsing
  app.use('/some-route', (req, res, next) => {
    let form = new formidable.IncomingForm({
      encoding: 'utf-8',
      uploadDir: path.join(__dirname, '../', 'uploads'),
      multiples: false,
      keepExtensions: true
    });
    form.once('error', console.log);
    form.parse(req, (err, fields, files) => {
      Object.assign(req, {fields, files});
      next();
    })
  });

  let originsWhitelist = [
    'http://localhost:4200', //this is the front-end url for development
    'https://localhost:4200',
    'https://a-domain.fr',
    'https://a-domain.com',
    'http://a-domain.fr',
    'http://a-domain.com',
    'https://www.a-domain.fr',
    'https://www.a-domain.com',
    'http://www.a-domain.fr',
    'http://www.a-domain.com',
  ];

  let corsOptions = {
    origin: function(origin, callback){
      let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
      callback(null, isWhitelisted);
    },
    credentials:true
  };
  //here is the magic
  app.use(cors(corsOptions));
  ```

## Authors

  * [Maxime Flament](mailto:maxime.flament@etu.unice.fr?subject=starter-express-es6-rest)


## Problems

Contact me by clicking the 'Maxime Flament' link in the Authors section.

## Version
1.0

## License

MIT License

Copyright (c) 2017 Maxime Flament

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
