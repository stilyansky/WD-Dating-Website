# Project Title

WireDelta - Assignment 2 - Dating Website


## Project Description

###Assignment specifications:
A startup company wishes to build a website for their online dating business. They have employed a designer who has produced the following design using desktop publishing software. The software used by the designer only produces an image, and does not produce HTML.

## Built With

The website has been build with:
* HTML5
* CSS3(Sass)
* JavaScript ES6

### HTML

The website is designed in two main sections:
* Welcome Screen - Form that requires the users input
* Input Preview

**NOTE** - the .js file has been added to the bottom of the page in order to speed up the loading time
(so that the HTML can load first and the functionality afterwards)

#### Welcome Screen

The user is required to enter the his/hers information that will be used to 'create' a profile
on the dating website's. Upon clicking the submit button the users input is displayed before sending
the data.

#### Input Preview

A window pops up with showing the users input before sending the information.


### Style (CSS)

Normalize ver.8.0.0 has been used in order to reset all the default setting from the browsers,
in order to ensure a cross browsers compatibility

The website has been designed for a optimal resolution of 1366x768, since it is the most
popular resolution currently(https://www.w3schools.com/browsers/browsers_display.asp).

Currently the website is NOT responsive, as the requirements were quite strict on the size of the elements.

The styling has been done with SASS, located in the stylesheet/master.scss

####SCSS
* In the first part are stored all the values of all colours used through the stylesheet
* Then there is the styling of the Welcome Screen
* Last there is the style for the Input Preview pop-up

### JavaScript

ES6 has been used throughout this project.

The .js file has been ordered like so:
* 1. Image preview upon upload
* 2. Function that stores displays the pop-up upon submitting
  * 2.1 Variable with all the values from the form
  * 2.2 Rendering of the results
* 3. Close button of the pop-up window


## Authors

* **Stilyan Rusev** - *Initial work* - [stilyansky](https://github.com/stilyansky)
