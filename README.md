# LA Foodie App (Flatiron Phase-2 Project)

### Project Goals & Outcomes

The goal of this project is to apply my knowledge of components, props, state management, and client-side routing  to build a single page application from scratch using React 

The basic requirements of this application are:

1. Make a single page application with only 1 index.html file using create-react-app
2. Contains at least 5 components
3. Makes use of at least 3 client-side routes using React Router
4. Use a json-server to create a RESTful API for the backend
5. Make a GET and POST request to the json server  
6. **Personal Goal** - Make the application as user friendly/intuitive as possible. 

***

### Application

The LA Foodie App is a single page app where users can search for restaurants in the Los Angeles Area. The app contains 3 client-side routes located in the navigation bar that represent 3 different pages to click between. The "Home" page contains a search filter that allows users to search for restaurants based on a few criteria options. The "Restaurants" page allows users to look through a directory of restaurant options to see what places are available in the data. The "Add New Restaurant" Page provides a form for users to add new restaurants to the overall list, that will become searchable from the previous two pages. 
***

### Data

The data was constructed manually and represents real-life restaurants located in the Los Angeles Area. Each restaurant object is constructed with the following key & value pairs (example)

```
{
 "id": 1,
 "name": "Ospi",
 "cuisine": "Italian" ,
 "price": "$$$",
 "location: "West LA,
}
 ```

- Price values range from $ to $$$$
- Locations represented are Downtown, Central LA, West LA, East LA, North LA, and South LA 



***

### Components & Function

1. App - renders child components
2. Header - renders header & NavBar
3. NavBar - renders client-side routes
4. Filter - renders a search form & displays filtered results via restaraunt cards
5. RestaurantPage - renders restaurant list via restaurant cards
6. RestaurantForm - renders a form to add more restaurants
7. RestaurantCard - renders each individual restaurant card

***
### Conclusion 

This react app uses a single page to render multiple components (pages) using react router. It provides functionality giving users the ability to find new places to eat. The technical concepts displayed in this project sum up what I learned in phase-2 of the Flatiron Software Engineering program. 