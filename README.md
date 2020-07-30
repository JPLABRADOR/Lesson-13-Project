# Lesson-13-Project

#### Instructions:
Install NodeJS (includes npm): https://nodejs.org/en/download/

Open a terminal or command line and install nightwatch globally on your machine:
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
Install necessary dependencies with the command:
```
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
