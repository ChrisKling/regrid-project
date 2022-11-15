# ReGrid

1. npm install
2. npm install @mui/material @emotion/react @emotion/styled
3. npm install @mui/icons-material

### You like grids? we'll give you a grid on a grid!

This app will serve as a platform where users withing a community (neighbours for instance) can trade services, commodity and sometimes even contracts with one another. This provides a new supply grid on top of the already existing grid which is your local government.

## Visitors:

Visitors of the website can see all of the activities within the community, nothing is hidden. They however don't have access to making trades through the app.

## Users:

Users are set by applying as a communtiy member. Registering only works when `name`, `email` and `location` are provided. After applying users can configure their profile and engage in trades.

## Navigation:

### Homepage:

- login/ user preferences button
- quick search for terms in listed trades
- mission
- Navigation to:... News, Guidelines, Trade Policies, Ratings, product balances (last 30 days trade balances)
- trades that deserve more attention (for reasons yet to decide e.g. almost spoiled or free pickups)
- a quick tab where you can add a trade listing `user only`

### Login:

- username
- password
- `or` sign up

### search

- after search query provided and list populated:
  - filter by: Age, Location, type (`perishable`, `non-perishable`, `service`, `?contract`)

### Navbar:

- Sign up
- Mission / News
- Guidelines / Codes of Conduct
- Traders
- product balances `last 30 days`
- Listings

### Mission / News:

- a 3 sentence statement of what this is we're doing
- a short paragraph of how it came to be
- a lengthy in-depth explanation of the reasoning behind it
- a short paragraph on future possibilities
- some visitor/user feedback at the bottom

### Listings:

- Trader (name, location, rating)
- link to recent comments regarding trader
- item for trade + stats
- link to other traders with same/similar product
- link to trader's other listings
- preferred exchanged good(s) for item

### Sign up

- `username`
- `email`
- `location`
- `password`

### Guidelines / Codes of Conduct:

-List of rules to adhere to regarding app and trades.
-List of untradable/ not-allowed items/ services
-contact form for reporting misbehaviour

### Traders:

-list of traders, able to sort by: - rating - products - location - last succesful trade date

- list of traders who deserve some attention (for reasons yet to be defined)

### Product Balance

- list of succesful trades, last 30 days showing `ONLY`:
  - traded item + quantity
  - average trader rating (trader 1 + trader 2 / 2)
  - date trade was processed

the ReGrid project is a product by Danni Malka, Adam Ocheri and Chris Klingsporn

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
