# Multi-step Signup Form

* This project creates a multi-step signup form. Users need to enter their personal details, confirm and submit to finish sign-up. 
* The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* The project is published at [Multi-step Signup Form](https://xinwend.github.io/multi-step-signup-form/).

## Intro

The form contains four steps: 
1️⃣ Enter user's details: First Name, Last Name, Age;
2️⃣ Enter personal details:  Occupation, City, Biography;
3️⃣ Confirm the info the user entered;
4️⃣ Submission success.

Uses latest Material UI library `@mui/material` with components `AppBar`, `TextField`, `Typography`, `List/ListItem`, `Box` and so on.

### React Components

- 1️⃣ UserForm

  - Since this is an SPA, the **Userform** includes all other 4 components. It initialize the state and provides with `nextStep()`, `prevStep()`, `handleChange()` methods.
  - In order to click back and forth among each page, the `step` in state will change and direct to the corresponding page.

- 2️⃣ FormUserDetails

  - Collects user's: First Name, Last Name, Age. 
  - Passes input box's data to `handleChange()`.
  - Defines `continue` to control page flow.

- 3️⃣ FormPersonalDetails

  - Collects user's: Occupation, City, Biography. 
  - Passes input box's data to `handleChange()`.
  - Defines `continue` and `back` to control page flow.

- 4️⃣ Confirm

  - Distructure user's data from props.
  - List these data within Material UI framework.
  - Defines `continue` and `back` to control page flow.

- 5️⃣ Success

  - Thank-you page & other customized reminder information.

![Image of transaction history](https://github.com/XinwenD/expense-tracker/blob/9106d8748e6d32afd670fd18cedc84000a64087d/imgs/transactionlist.PNG)



![Image of addtransaction](https://github.com/XinwenD/expense-tracker/blob/0aae7f37cf1be7331c55cdfb678e2669ce43a960/imgs/addtransaction.PNG)

![Image of header-balance](https://github.com/XinwenD/expense-tracker/blob/9106d8748e6d32afd670fd18cedc84000a64087d/imgs/header-balance.PNG)


### Code Build

Builds the app for production to the `build` folder.\ by [WebPack](https://webpack.js.org/)

Dependencies and loaders:

```
    "@babel/core": "^7.12.3",
    "@babel/plugin-proposal-class-properties": "^7.14.5",
    "@babel/preset-env": "^7.12.1",
    "@babel/preset-react": "^7.12.5",
    "babel-loader": "^8.2.1",
    "css-loader": "^4.3.0",
    "file-loader": "^6.2.0",
    "html-loader": "^1.3.2",
    "html-webpack-plugin": "^4.5.0",
    "url-loader": "^4.1.1",
    "webpack-cli": "^4.8.0"
```
