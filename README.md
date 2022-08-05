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
- [x] First name
- [x] Last name
- [x] Email
- [x] Phone number
- [x] Favourite language (HTML, CSS, JS, PHP,...), this will be a select with options

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
1) - [x] Clone the angular repository from ANT-Lamarr-6.35
2) - [x] Check if you have node.js and npm
3) - [x] Install the Angular [cli](https://en.wikipedia.org/wiki/Command-line_interface) with (in my case) `brew install angular-cli`
4) - [x] Copy the server folder into your working directory
5) - [x] Navigate in your terminal to your working directory and enter `ng new my-friends`. You should now have 2 folders, "server" (your node API), and "my-friends" (my angular map).
6) - [x] In terminal go inside the "my-friends" folder and run `ng serve --port 4500`. Now we can check out our angular app on `localhost:4500`
7) - [x] In our IDE we navigate to `my-friends/src/app`. Here we'll find 2 things:
- The template, `app.component.html` 
- The component, `app.component.ts`
- The view we see in the page is produced by the **combination** of that ***template*** and the ***component*** that brings the logic to the template.
- We should never pay attention to `.spec` files, these are for unit testing which is out of scope for this exercise.
8) - [x] We empty the "AppComponent" class and the template. The template file should be completely empty. Inside of the AppComponent class we'll write our logic and in the template we'll write our HTML.
9) - [x] In the HTML file, add a form with the required inputs (at least). Take a look at the must-haves above. Don't forget a submit button, make it a **regular** button. NOT AN INPUT TYPE BUTTON!
10) - [x] Put the names of the languages inside an array in the component class. Use the ngFor loop to generate all the options, which is way more efficient.
11) - [x] Bind the data to your form
  - In app.module.ts, import the `FormsModule` form @angular/forms. Also add it to the imports array.
  - Add `#formName="ngForm` to your form, I called it `#formFriends`. This will make it a variable which contains all the data of the form in realtime.
  - Also add `#inputName="ngModel` to every input tag. You will have several; #firstName, #lastName,... Make sure all your inputs have a name attribute
  - Put `ngModel` inside of each input, also your select tag
  - Test if it works, to do this add `{{ formFriends.value | json }}` at the top of your html file. Once you fill in values, you'll see them update live.
12) - [x] The ngModel that's added to the inputs is not complete yet. It's supposed to be used to bind the data to a model.
  - Add a new "friend" model to our project, in the root of our app run `ng generate class Friend` in your terminal.
  - Open the generated friend.ts file, add a constructor to the class. Add the corresponding properties. Don't forget about typehinting!
  - In your component form class, instantiate the friendModel through the friend class with all properties set to null. To do this you'll also need to import the friend class.
  - In your HTML change the ngModel of your inputs to `[(ngModel)]="friendModel.firstName"` and so on.
  - Test if it works! Go to the top of your HTML and change `{{ formFriends.value | json }}` to `{{ friendModel | json }}`. Nothing seems to really change, now your data is bound to the friend model.
13) - [x] Display when a field is invalid to the user:
I did this one a little differently, I was looking at the documents of angular itself and did it in the way they do it for template-driven forms.
You can add the same validation attributes as you would with native HTML form validation. Angular uses directives to match these attributes with validator functions in the framework.
Every time the value of a form control changes, Angular runs validation and generates either a list of validation errors that results in an `INVALID` status, or null, which results in a `VALID` status.

You can inspect the control's stat by exporting `ngModel` to a local template variable. Let's look at the first name example:
```angular2html
    <input type="text" name="first name" id="firstName" class="form-control" #firstName="ngModel" [(ngModel)]="friendModel.firstName" required>
    <div *ngIf="firstName.invalid && (firstName.dirty || firstName.touched)" class="alert alert-danger">
      <div *ngIf="firstName.errors?.['required']">
        Your given name is required.
      </div>
    </div>
```
- The `<input>` element carries the HTML validation attribute `required`.
- `#firstName="ngModel"` exports `ngModel` into a local variable called `firstName`. `ngModel` mirrors many of the properties of its underlying `FormControl` instance, so you can just use this in the template to check for control states such as `valid` (a control is valid when its status is VALID) and `dirty` (a control is dirty if the user has changed the value in the UI). You can find the full list of control properties at the [AbstractControl](https://angular.io/api/forms/AbstractControl) API reference.
  - The *[ngIf](https://angular.io/api/common/NgIf) on the `<div>` element reveals a nested message `<div>` but only if the `firstName` is invalid and the control is either `dirty` or `touched`.
  - Each nested `<div>` can present a custom message for one of the possible validation errors.
- Add the pattern property to the input field and as a value add the regular expression that it would have to suffice.
- Regex is hard and you don't have to do it perfectly, however it is manageable to:
  - [x] Have no numbers in names
  - [x] Have no letters in phone numbers
  - [x] Have no special code characters allowed anywhere if they're not needed.
14) - [ ]

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

![Components visual](https://www.simplilearn.com/ice9/free_resources_article_thumb/Components_Heirarchy-Angular_Components.PNG)

The `@Component()` decorator specifies Angular-specific info:
- A CSS selector (defines how the component is used in a template). HTML elements in your template that match this selector become instances of the component.
- An HTML template that instructs Angular how to render the component.
- An optional set of CSS styles that define the appearance of the template's HTML elements.

### Templates
Every component has an HTML template that declares how that component renders. You define this template either inline or by file path.

Angular extends HTML with additional syntax that lets you insert dynamic values from your component.
Angular automatically updates the rendered DOM when your component's state changes. One application of this feature is inserting dynamic text.

In my `app.component.html` I have:
```html
  <h2>{{title}}</h2>
```
Notice the use of **"double"** curly braces - they instruct Angular to interpolate the contents within them.

The value from title comes from the component class:
```typescript
  import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
    
    export class AppComponent {
        title = 'myFriendspace';
    }
```

When the app loads the component and its template, the user sees the following:
```html
  <h2>myFriendspace</h2>
```