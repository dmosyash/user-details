# User Details
This is a web application for viewing all the Users and their details.

[Click here to see the live App](https://user-details.netlify.app/)

This application is developed in Reactjs. No other library has been used.
APIs are used to fetch data.

## Structure of the App

The App is developed in ReactJs. It is created with the help of **React cli**. Every page of this app is divided into 3 parts

- Header
- Main Part
- Footer

### Header
It always stays on top of every page, this component is called in App component, so need to write only once in the whole app.


### Main Part
As the name suggests it is the main body of the App. This App has 2 main parts or pages.

- Login
- User List

#### Login
This is App's default page. User can login here by providing username and password. This will call a login API to get token, which is then stored in localStorage.

It is a container component. I have used react hooks to avoid creating class.

#### User List
This is for viewing user list and their details like user's accountId, name and age. It has a filter button too to filter the list of users based on a condition.

It is a container component which has a class and also used a dumb component **UserCard** to show the details of a user.


### Footer
It holds the link to its GitHub page and emailId of the creator.


### Services
For wrraping APIs and handling other details like *base URL*.
