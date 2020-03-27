# Cryptocurrency
Cryptocurrency is a single-page app for viewing the historical price data for cryptocurrency.

## Getting Started

### Prerequisites:

- NodeJS
- Mongo DB

#### Setup

1. Navigate to the preferred local directory where your project will reside.

2. Clone the following repository:
```
https://github.com/bee-squared/cryptocurrency.git
```

3. Navigate inside the root directory of the project './cryptocurrency/'

4. Create a .env file and set up the following variables:
- REACT_APP_SERVER = localhost:[port of your choice]
- PORT=[port of your choice --> same port # as defined in the above REACT_APP_SERVER above]

5. Create a .gitignore file and include files you do not want to push to your public repo, such as:
- .env
- /node_modules
- /build

6. Run the following commands:
```
$ npm install
$ npm run server-dev
$ npm start
```

## Built With
- ReactJS
- Sass
- Node.js
- Express.js
- Docker - Not required to start app
- Dotenv

## Authors

Brian Bouchard
- [Github Profile](https://github.com/bee-squared)