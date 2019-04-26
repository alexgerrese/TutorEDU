# TutorEDU

### DEMO: https://www.youtube.com/watch?v=jFjIv956_E8&feature=youtu.be

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

## API Endpoints
* http://127.0.0.1:8000/rest-auth/login/
* http://127.0.0.1:8000/rest-auth/logout/
* http://127.0.0.1:8000/rest-auth/password/reset/
* http://127.0.0.1:8000/rest-auth/registration
* http://127.0.0.1:8000/users/
* http://127.0.0.1:8000/users/1/
* http://127.0.0.1:8000/appointments/
* http://127.0.0.1:8000/appointments/1/
* http://127.0.0.1:8000/subjects/
* http://127.0.0.1:8000/subjects/1/
* http://127.0.0.1:8000/admin/

## Contributions
**Alexander** - Team Leader. Designed the UI/UX of the website and implemented the majority of the frontend as well as some of the backend.
**Noah** - 
**Jack** - 
**Jaidha** - 

## Attributions
### External libraries/packages
* Axios - HTTP client for GET, POST and PUT requests.
* Styled-components - Package for customizing any React component.
* React-bootstrap - Package for beautifying standard React components.

### Helpful Resources
* https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a - Great article about JWT authentication with React and Django.
* https://reactjs.org/docs/ - React documentation
* Stack Overflow - All the time for specific cases and errors.
