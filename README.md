# Lesson-13-Project

#### Instructions:

Open a terminal or command line.
Navigate to your local project folder.
Clone the following repository: https://github.com/DevMountain-QA/home-loan-wizard

Execute the following commands using a terminal/bash session:
```
cd home-loan-wizard
```
(The following step was already taken care of and the files are included in the Lesson 13 Project automation)
Install necessary dependencies with the command:
```
npm i
```
Start the application with the command:
```
npm start
```
A browser window will open at http://localhost:3000 

displaying the "Home Loan Wizard" app.

Once the "Home Loan Wizard" is running in a browser, in another terminal window, execute the Lesson 13 Project automation:
```
nightwatch /tests/homeLoanWizard.js
```
