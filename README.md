# TutorEDU

## Instructions to run and test application
### Run the backend
1. cd into TutorEDU/backend/TutorEDU
2. source env/bin/activate
3. pip install -r requirements.txt
4. python3 manage.py runserver
5. If error, try:
 * pipenv shell
 * python manage.py runserver
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
* Created Course model with all necessary attributes
* Created Appointment model with all necessary attributes
* Models are linked together with foreign keys
* Can add, modify and delete
* @edu email verification
* Created authentication framework with strong password verification, password reset, sign up and sign in

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
**Noah** - Created the first iteration of the backend and implemented the current version of admin, models, and validator files in the backend.
**Jack** - 
**Jaidha** - Implemented Django rest-framework and rest-authentication into the backend by creating serializers, get, put, delete requests, and url endpoints.

## Attributions
### External libraries/packages
* Axios - HTTP client for GET, POST and PUT requests.
* Styled-components - Package for customizing any React component.
* React-bootstrap - Package for beautifying standard React components.
* Djangorestframework - Serealizing data between backend and frontend
* Django-rest-auth - login/logout authentication

### Helpful Resources
* https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a - Great article about JWT authentication with React and Django.
* https://reactjs.org/docs/ - React documentation
* Stack Overflow - All the time for specific cases and errors.
* https://www.django-rest-framework.org/ Rest-framework documentation
* https://django-rest-auth.readthedocs.io Rest-authentication documentation
