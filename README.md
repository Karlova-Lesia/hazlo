# Hazlo

An application for monitoring the doing of tasks, by dividing the project into tasks,setting the score for each task and the doing status. The user must register or log in,after which he has the opportunity to view their projects or add a project and divide it into tasks. The user also has the ability to assess and manipulate the status of each task.

##Tech stack:

- **React**

- **Redux**

- **json-server**

- **Tailwind CSS**

- **Formik**

- **Joi**

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

###Server start

`json-server db.json -m ./node_modules/json-server-auth --port 3001`


### _For_ _the_ _correct_ _work_ _when_ _starting_ _the_ _server,_ _follow_ _the_ _command_ _name_ `cp db.example.json db.json`.
