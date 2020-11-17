# Web explorer app

Technologies used for this project:

  * [Create React App](https://github.com/facebook/create-react-app)
 
  * [PostCss](https://postcss.org/).

  * [Redux-react](https://react-redux.js.org/)
 

Testing done with:
  * [Cypress](https://www.cypress.io/)

 
## Live production:

If this project need to be deployed to a live server `.htaccess` file must be adjusted for routes to work:

     RewriteEngine On
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteRule ^ index.html [QSA,L]`

