# Web explorer app

Technologies used for this project:

  * [Create React App](https://github.com/facebook/create-react-app)
 
  * [PostCss](https://postcss.org/).

  * [Redux-react](https://react-redux.js.org/)
 

Testing done with:
  * [Cypress](https://www.cypress.io/)

 ## Environment variables:
 `.env.example` file which contains local project variables, should be renamed to `.env` and 
 configured with correct endpoints
 
    REACT_APP_TOKENS_API_URL="'YOUR TOKEN API ENDPOINT'"
    REACT_APP_SERVERS_DATA_API_URL="'YOUR SERVER DATA API ENDPOINT'"
    
## Testing with Cypress
  Before running the tests the file `cypress.env.json.example` should be renamed to `cypress.env.json`
  
        {
          "tesonet_username": "username",
          "tesonet_password": "password",
          "tesonet_session_token": "log in session token"
        }

  the variables must contain correct log in information and session token - it is necessary for testing
    
  To run the test UI simply run `npm run test`. An interface will appear giving the choice of which test
  to run.
## Live production:

If this project need to be deployed to a live server `.htaccess` file must be adjusted for routes to work:

     RewriteEngine On
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteRule ^ index.html [QSA,L]`

