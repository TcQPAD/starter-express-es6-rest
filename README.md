**Table of Contents**
- [Starter-REST](#starter-rest)
  * [express-es6](#express-es6)
  * [Technologies](#technologies)
  * [IDE configuration](#ide-configuration)
  * [Starting the server](#starting-the-server)
  * [Functions](#functions)
  * [Authors](#authors)
  * [Problems?](#problems)
  * [Version](#version)
  * [License](#license)

# Starter-REST

## express-es6
Sample of express server using ES6

The goal of this project is to have a sample of server using express and the ES6 syntax

Details on the new technologies can be found in the **Technologies** section.

## Technologies

This server runs under [NodeJS v6.10.3](https://nodejs.org/en/).

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
