# Temperature list 

We need you to create a Web application that allows to follow-up the temperatures. You have to:
- obtain a list of temperatures from an external API (Open Weather Map, Yahoo Weather API, or a local server)
- allow a user to enter new temperatures,
- Display the median, average, max and min temperatures from the list of temperatures fetched and added manually.

Consider the API as a "back-end" database. In other words, the list of temperatures manually added and the one fetched from the API are part of the same list.

Spend between 2 and 4 hours on this exercise.

You'll find a jpg file of the design that you need to replicate, as well as the logo in svg format that you need to use.

## User stories

- As a user, I want to see a list of temperatures in Celcius (source: API).
- As a user, I want to be able to add a temperature to that list (non persistant when the page get refreshed).
- As a user, I want to see the median of temperatures displayed and updated each time the list of temperatures changes.
- As a user, I want to see the average of temperatures displayed and updated each time the list of temperatures changes.
- As a user, I want to see the min and max of temperatures displayed and updated each time the list of temperatures changes.


## Rules/Constraints

- Use Angular 2+ (If you can't or don't know Angular, use another framework or Javascript and jQuery)
- BONUS: Create your CSS using SASS/SCSS

## API

Setting up an account to use an external API may take some time, so we'll provide a JSON file that can be used as a mock source of data if you prefer.

If you don't know how, or can't use neither an external API nor the mock JSON for some reason, read the JSON directly from Javascript or hardcode the content as a JS object somewhere in your code. Additionally, write a small report explaining why you think it didn't work and what were your steps to try to fix the issue.

### Using the mock JSON

To serve the JSON file as a fake API, install the *json-server* npm module globally (https://www.npmjs.com/package/json-server):
`npm i -g json-server`

Launch server:
go to mock_weather location and run `json-server mock_weather.json`

Open *http://localhost:3000/data* to check if the server is running:
It should return a json object with the weather information

From your angular application make get requests to *http://localhost:3000/data* to get the data.

Take the `max` temperature (currently in Kelvin) from the objects inside the `list` array.

## What needs to be demonstrated:

In your code, you'll be judge on:

- The reusability, portability, modularity and scalability of your code and CSS (that demonstrate ideally an object oriented approach)
- An eye for visual details (Respect of the design)

## How to submit your work

Once your work is done, create a *private* Github (or Bitbucket) repo and send us the access and credentials so we can download and view the project.

Don't forget to include a guide on how to launch your application.

## Questions

1. If you had more time, how you would have improved the project?
2. If you had the choice, what would be your ideal development environment? (IDE' stack, technology, etc.)

