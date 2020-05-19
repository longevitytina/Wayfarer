# Wayfarer

[Wayfarer Website](https://sheltered-thicket-24218.herokuapp.com/)

A travel community for users to share tips (AKA posts) about their favorite locations around the world. The team simulated a commisioned client contract to build, based on the client's wireframe and user stories. The client contract consists of three core sprints and four bonus sprints.

## Index

- [Authors](#The-Team)
- [Scope](#scope)
- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Data Models](#data-models)
- [Future Updates](#future-updates)

## Getting Started

- Register or sign-in with prepopulated data - login: tt@gmail.com PW: 1234
- Select a city from the sidebar,
  - Browse through list of post teasers, or create a post for the city
  - Click on a post to read more
    - View an author's profile by clicking their name near the post title
    - Edit/delete post if the post was created by current user
- View personal profile by clicking the link in the navbar
  - Edit profile information
  - View index of posts made and click them to view more

## The-Team (of kick-ass women)

- **Anya Pichugina** - [Github](https://github.com/anya-pich) - [Linkedin](https://www.linkedin.com/in/anna-pich/)
- **Elizabeth Patton** - [Github](https://github.com/eapatton) - [Linkedin](https://www.linkedin.com/in/elizabeth-a-patton/)
- **Tina Taylor** - [Github](https://github.com/longevitytina) - [Linkedin](https://www.linkedin.com/in/tina-taylor-codes/)

## Scope

##### Technologies used: The MERN Javascript stack

- [MongoDB](https://www.mongodb.com/) - Database
- [Express](https://expressjs.com/) - Web framework
- [React](https://reactjs.org/) - Frontend interactive UI
- [Node](https://getbootstrap.com) - JavaScript runtime environment
- [Bootstrap](https://getbootstrap.com) - Styling

## Wireframes

##### Profile Page

![Wireframe3](/wasteland//main_app/img/ss3.png)

<img src="/main_app/static/Images/profile.png" width="200" height="200">

##### Playlist Page

<img src="/main_app/static/Images/playlist_view.png" width="200" height="200">

##### Create Playlist Page

<img src="/main_app/static/Images/playlist_create.png" width="200" height="200">

##### Technique Index Page

<img src="/main_app/static/Images/tech_index.png" width="200" height="200">

##### Technique Detail Page

<img src="/main_app/static/Images/technique_detail.png" width="200" height="200">

## Data Models

<img src="/main_app/static/Images/Datamodels.png" width="200" height="200">

## Future Updates

##### Technologies

- Add Spotify playlist API
- Relaunch with React frontend
- Mobile app version - React Native

##### Features

- Edit profile
- Instructions
- Various styling changes
  - Techniques in global database will display message that you've added them.
  - More transitions and icons
- Timer settings: User will be able to customize time intervals with alerts
- Submit techniques to the community
  - Users can upload photos and videos
    - Self made content
      - Connect IG, tiktok, etc..
- View other user's playlist and add them to your own profile
- Follow other users
- Find massage therapist/trainers in your area
  - connect an external search api like yelp, nextdoor
  - Provide a site index of therapist in the website community
    - Provide profile pages for professionals
- Forums
  - Post skill-trade inquiries
  - Post discussions about pain, stories, guidance
- Injury tracker
  - Collect data that shows if methodologies/techniques are working
    - Display graphs to visually represent data
    - Share data with community, tags techniques used

## References

- [Django admin panel customization](https://data-flair.training/blogs/django-admin-customization/)
- [Datamodel builder](https://www.lucidchart.com/)
- [Create super user in script](https://stackoverflow.com/questions/6244382/how-to-automate-createsuperuser-on-django)
- [Split models.py into several files](https://stackoverflow.com/questions/6336664/split-models-py-into-several-files)
- [Extra fields on many-to-many relationships](https://docs.djangoproject.com/en/dev/topics/db/models/#extra-fields-on-many-to-many-relationships)
- [Random pic generator](https://source.unsplash.com/)
- [ManyToMany convert queryset iteration ](https://stackoverflow.com/questions/45768190/typeerror-manyrelatedmanager-object-is-not-iterable)
- [is_authenticated](https://docs.djangoproject.com/en/2.0/topics/auth/default/#limiting-access-to-logged-in-users)

- [Bootstrap profile page starter](https://bootstrapious.com/p/bootstrap-profile-page)
- [Sortable list library](https://github.com/SortableJS/Sortable)
- [Collectstatic error](https://stackoverflow.com/questions/36665889/collectstatic-error-while-deploying-django-app-to-heroku)
- [Display Timer](https://www.freecodecamp.org/forum/t/return-in-setinterval/186389/8)

- [Align buttons](https://stackoverflow.com/questions/20962483/how-do-i-make-two-bootstrap-buttons-side-by-side/20962556)
- [Modeling playlists](https://stackoverflow.com/questions/4799378/best-way-to-make-a-simple-orderable-playlist-in-django)
