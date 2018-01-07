# React/Redux To-dos
A simple to-do application utilitizing localStorage for persistent data and built via React/Redux. All actions for the [FSA](https://github.com/acdlite/flux-standard-action) pattern.

# MVP
 1. As a user I can add an item to a list of "to-dos".
 2. As a user I can see a list of "to-do" items.
 3. As a user I can complete an item on the "to-do" list.

# Running Locally
  1. First, you will need to be sure that you have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed. At the time of this build, I am running node@v8.9.3 and npm@v5.6.0.
  2. Clone down the repositiory to your local machine ```git clone https://github.com/bbleds/wi-chal.git```.
  3. Navigate into project directory and install dependencies ```cd wi-chal && npm install```
  4. Spin up the app ```npm run start```. 
  5. You can now navigate to ```localhost:4000``` in your favorite browser and manage your to-dos as needed!
  
  # Online Demo
  Feel free to take a test drive [here](http://bbledsoe.io/react-redux-todos)!
  
  # Additional Notes
  If you want to play around with the code, you can run ```npm run start-dev``` which will watch for file changes and rebuild the app on both server and client side as needed via nodemon and webpack.
  
