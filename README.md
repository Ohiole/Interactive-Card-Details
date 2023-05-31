# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![Screenshot 2023-05-30 at 09-57-58 Frontend Mentor Interactive card details form](https://github.com/Ohiole/Interactive-Card-Details/assets/67792211/7a0858f5-10ba-42c3-a24b-ddce0a73fbb7)


### Links

- Solution URL: (https://github.com/Ohiole/Interactive-Card-Details)
- Live Site URL: (https://ohiole.github.io/Interactive-Card-Details/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
I learnt about the border-imnage property and how to use it, I used it in this project to change the color of the input borders on focus to a linear gradient.

```css
.inputBox{
    width: 100%;
    height: 40px;
    padding: 0 1em;
    border: 1px solid hsl(270, 3%, 87%);
    border-radius: 5px;
    outline: none;
    font-family: 'Space Grotesk', sans-serif;
    color: hsl(278, 68%, 11%);
    position: relative;
    transition: all .3s ease-in-out;
}

input.errorText{
    border-color: hsl(0, 100%, 66%);
}

.inputBox:focus{
    border-image: linear-gradient(hsl(249, 99%, 64%), hsl(278, 94%, 30%)) 1;
}
```

### Continued development

I will like to use the border-iumage property much more often, so i woukld read much more on it.

### Useful resources

- [CSS Tricks](https://css-tricks.com/) - This helped me with the border-image property. I really liked this pattern and will use it going forward.

## Author

- Frontend Mentor - [@Ohiole](https://www.frontendmentor.io/profile/Ohiole)
- Twitter - [@__ojoo](https://www.twitter.com/__ojoo)
