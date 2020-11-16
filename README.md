# Intro project for Tesonet

This project was created with:
 [Create React App](https://github.com/facebook/create-react-app).

## Live production:

If this project need to be deployed to a live server `.htaccess` file must be adjusted for routes to work:

     RewriteEngine On
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteRule ^ index.html [QSA,L]`

