This app is an offline movie catalog. You can save movies and actors and relate them.

State is not persisted, so every run starts with a blank store.

You can search movies by their title, cast or genres with the search bar that's always visible at the top of the screen.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Running

- Clone repo
- Run `yarn`
- Run `yarn run start`

Your browser will open the app in `localhost:3001`

# Stories

Some components have stories available. Run `yarn run storybook` and you'll be able to see them at `localhost:9001`.

# Mock mode
There is a mock store at `/src/mock/state.json`. To start the app with this preloaded state, just drop this in an `.env.local` file at the root of the project:

`REACT_APP_MOCK=YES`
