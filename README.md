# Lesson-13-Project

#### Instructions:

Open a terminal or command line.

Install nightwatch globally on your machine:
```
npm i -g nightwatch
```

Navigate to your local project folder.
Clone the following repository: 
```
git clone https://github.com/DevMountain-QA/home-loan-wizard
```
Navigate to the newly cloned directory:
```
cd home-loan-wizard
```
(The following two steps were already taken care of and the files are included in the "Lesson 13 Project" automation. If this version of ChromeDriver needs to be updated, execute "npm i chromedriver" or if dependencies need to be updated, execute "npm i".)
```
Install chromedriver for the project:
npm i chromedriver

Install necessary dependencies with the command:
npm i
```
Start the application with the command:
```
npm start
```
A browser window will open at http://localhost:3000 running the "Home Loan Wizard" app. Once the "Home Loan Wizard" app is running, in another terminal window, execute the "Lesson 13 Project" automation:
```
nightwatch /tests/homeLoanWizard.js
```
