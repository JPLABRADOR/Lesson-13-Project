# Lesson-13-Project
Automated testing for the "Home Loan Wizard" web application. Browser automation created using Nightwatch.js.

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
A browser window will open at http://localhost:3000 running the "Home Loan Wizard" app. 

#### Now clone the Lesson-13-Project:

In another terminal window, navigate back to your local project folder.
Clone the following repository: 
```
git clone https://github.com/JPLABRADOR/Lesson-13-Project.git
```
Navigate to the newly cloned directory:
```
cd Lesson-13-Project
```
While the "Home Loan Wizard" app is still running in A browser window, execute the "Lesson 13 Project" automation:
```
nightwatch /tests/homeLoanWizard.js
```
