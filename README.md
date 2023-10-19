# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is my solution to the age calculator app challenge. It was built entirely with HTML, CSS and JavaScript.

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

**Desktop Solution:**

<div align="center">

  ![](/assets/images/solution-desktop.png)

</div>

**Mobile Solution:**

<div align="center">

  ![](/assets/images/solution-mobile.png)

</div>

**Error States:**

*Empty field:* what the users see if they leave any field empty

<div align="center">

  ![](/assets/images/solution-desktop-error-empty.png)

</div>

*Invalid date:* what the users see if they entry an invalid date like *31/04/1997* (april doesn't have 31 days)

<div align="center">

  ![](/assets/images/solution-desktop-error-day.png)

</div>

*All invalid:* what the users see if all the entries are invalid

<div align="center">

  ![](/assets/images/solution-desktop-error-all.png)

</div>

*All valid:* finally, this is what the users see if all the entries are valid

<div align="center">

  ![](/assets/images/solution-desktop-results.png)

</div>

### Links

- Solution URL: [My solution on Frontend Mentor](https://www.frontendmentor.io/solutions/age-calculator-app-solution-1_nCjn-kMK)
- Live Site URL: [Live App with Github Pages](https://itsale-o.github.io/age-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

This project showed me a whole new set os things with JavaScript

I've learned how to deal with dates with JavaScript. I was familiarized with that on Python and the `datetime()` function, it was very nice to learn how to do it with JS. Here is a line as an example of how I used the `new` `Date()` function on my solution:

```js
var userDate = new Date(`${month}-${day}-${year}`)
```

### Useful resources

- [Stack Overflow](https://pt.stackoverflow.com/) - As a lot of the things were new to me, I used Stack Overflow a lot. A lot of people there to help

## Author

- LinkedIn - [Alessandra Oliveira](https://www.linkedin.com/in/alessandra-santos-oliveira/)
- Frontend Mentor - [@itsale-o](https://www.frontendmentor.io/profile/itsale-o)
- Twitter - [@itsale_o](https://www.twitter.com/itsale_o)
