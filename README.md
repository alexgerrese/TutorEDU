# E3 Progress Report

# DEMO: https://www.youtube.com/watch?v=jFjIv956_E8&feature=youtu.be

## Instructions to run and test application
### Run the backend
1. cd into TutorEDU/backend/drfx
2. pipenv shell
3. python manage.py runserver
4. If error, try:
 * python manage.py makemigrations
 * python manage.py migrate
 * pipenv install django
 * pipenv shell
 * pipenv install djangorestframework
 * pipenv install django-rest-auth

### Run the frontend
1. cd into the ‘frontend’ folder
2. npm install
3. npm start

## Features we’ve implemented
### Frontend
* Finished replicating homepage design in React
* Can fully test website with mock data or pull dynamic data from Django backend using APIs
* Can conditionally render elements based on certain factors like waiting for API calls to finish loading
* 90% finished replicating appointments page design in React
* 60% finished replicating tutor detail page design in React

### Backend
* Finalized database schema design (view here: https://drive.google.com/file/d/1dgw3ODJIVmd4pjVf5kXjU44KRm5OANSd/view?usp=sharing)
* Created User model with all necessary attributes
* Can add, modify and delete
* @edu email verification
* Created Course model with all necessary attributes
* Created Appointment model with all necessary attributes
* Created (unlinked to React) authentication framework with strong password verification, password reset, sign up and sign in
* Added password update
* Below are links to various pages
  http://127.0.0.1:8000/api/v1/rest-auth/login/
  http://127.0.0.1:8000/api/v1/rest-auth/registration/
  http://127.0.0.1:8000/api/v1/rest-auth/logout/
  http://127.0.0.1:8000/api/v1/users/
  http://127.0.0.1:8000/api/v1/users/1/
  http://127.0.0.1:8000/api/v1/users/appointment/
  http://127.0.0.1:8000/api/v1/users/subject/
  http://127.0.0.1:8000/admin/
  http://127.0.0.1:8000/api/v1/rest-auth/password/reset/

## Estimated completion time
~8 hours each Alex/Jack
~40 hours each Jaidha/Noah
