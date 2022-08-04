# Angular
***
## Basic Angular Form

Let's start working with frameworks! Our first one will be Angular, and no I don't think it will go about "angles".
***

## What we'll be building
Since I've been following the full-stack developer course for a good 4 months now I've made a lot of friends in the process.
So we will be making an **Angular** application on which my friends from becode can fill in their data so I can have it in my node.js friend list api.

### Some must-haves
Fields we need for our friend list are:
- [ ] First name
- [ ] Last name
- [ ] Email
- [ ] Phone number
- [ ] Favourite language (HTML, CSS, JS, PHP,...), this will be a select with options

Error reporting:
- [ ] Give visual feedback to the user if they give wrong input

- [ ] Form validation

Friend list:
- [ ] send a GET request to your local node server, get your friends
- [ ] POST request, be able to add a friend to your list

### Nice-to-haves
- [ ] Email and phone number are ***actually*** emails and phone numbers.
- [ ] Make it easy for a user to add a phone number, following phone numbers could all be valid:
  - 0488888888
  - +324888 88888
  - 04 88 88 88 88
  - 0 4 8 8 8888 88
  - It's **okay** to only take Belgian phone numbers into account
- [ ] Make a separate page for adding a friend
- [ ] A separate page for adding a friend list
- [ ] Make a **"best friend"** list by adding a favourite checkbox to the form
  - You can also make a separate page for your  best friends
  - You'll have to make a new app.GET function in your node server
- [ ] Add extra fields, whatever you like
  - Profile picture
  - Signature move
  - Favourite meme
  - yadi yadi ya
- [ ] Think of your own new app.GET function, the possibilities are endless
  - A list of all the people that like a certain programming language
  - An amount of random friends from your list
  - A list of all the people between the age of 30 and 40
  - yadi yadi ya

## Steps to get started
1. - [x] Clone the angular repository from ANT-Lamarr-6.35
2. - [x] Check if you have node.js and npm
3. - [x] Install the Angular [cli](https://en.wikipedia.org/wiki/Command-line_interface) with (in my case) `brew install angular-cli`
4. - [x] Copy the server folder into your working directory
5. - [x] Navigate in your terminal to your working directory and enter `ng new my-friends`. You should now have 2 folders, "server" (your node API), and "my-friends" (my angular map).
6. - [x] In terminal go inside the "my-friends" folder and run `ng serve --port 4500`. Now we can check out our angular app on `localhost:4500`
7. - [x] In our IDE we navigate to `my-friends/src/app`. Here we'll find 2 things:
  - The template, `app.component.html`
  - The component, `app.component.ts`
  - The view we see in the page is produced by the **combination** of that ***template*** and the ***component*** that brings the logic to the template.
  - We should never pay attention to `.spec` files, these are for unit testing which is out of scope for this exercise.
8. - [x] We empty the "AppComponent" class and the template. The template file should be completely empty. Inside of the AppComponent class we'll write our logic and in the template we'll write our HTML.
9. - [ ] In the HTML file, add a form with the required inputs (at least). Take a look at the must-haves above. Don't forget a submit button, make it a **regular** button. NOT AN INPUT TYPE BUTTON!

## What is Angular?
Angular is a development platform, built on **TypeScript**.
Angular includes:
- A component-based framework for building scalable web apps.
- A collection of well-integrated libraries that cover a wide variety of features.
- A suite of developer tools to help you develop, build, test, and update your code.

Angular is a platform that can scale from single-developer projects to enterprise-level applications.

## Angular - Essentials:

### Components:
Components are our building blocks that compose an application. It includes a TypeScript class with an `@Component()` decorator, an HTML template, and styles.
The `@Component()` decorator specifies Angular-specific info:
- A CSS selector (defines how the component is used in a template). HTML elements in your template that match this selector become instances of the component.
- An HTML template that instructs Angular how to render the component.
- An optional set of CSS styles that define the appearance of the template's HTML elements.

### Templates
