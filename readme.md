# XLR8Solutions Webpage

## Overview

### What is this webpage for?
 
TThis is a showcase website for the company XLR8Solutions
 
### What does it do?
 
This Website will allow users to find out about the company, see what the company uses through use of modals and see examples of work that the company has done. There will also be a contact form and map for the company

### How does it work
 
The website uses the AngularJs framework and styled with bootstrap. For a smooth scroll the component ngSmoothScroll has also been added to the project
 
## Features

### Existing Features
- User Freature
    - All links working
    - Scroll to part of page
    - Click on font-awesome icons to trigger modal 
    - Click or company logos to see examples of the work XLR8Solutions did with that company
    - Fill out a dummy form to let the user there message has been sent
- Visual Features
    - Responsive for phones
    - Smooth scrolling
    - Changeing opacicy on Scroll
    - Showing and hiding images based on clicks
    - Phone and laptop model css added

 
### Features Left to Implement
- Write up test script using solenium/ jamsmine

 
## Tech Used

### Some the tech used includes:
- [AngularJS](https://angularjs.org/)
    - We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
    - We use **Bootstrap** to give our project a simple, responsive layout
- [npm](https://www.npmjs.com/)
    - We use **npm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
- [ngSmoothScroll](https://github.com/d-oliveros/ngSmoothScroll)
    - **ngSmoothScroll** is used for smooth scrolling when links are clicked
 
## Contributing
 
### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)
7. Make changes to the code and if you think it belongs in here then just submit a pull request.
