#A Simple ToDo App

Stack - React.js, Node.js, MongoDB

App deployed at : https://todo-rivert.herokuapp.com/

- API Features

  - Full CRUD functionality
  - End Points
    - GET, POST - https://todo-rivert.herokuapp.com/api/todos
    - DELETE, PATCH - https://todo-rivert.herokuapp.com/api/todos/:id

- FrontEnd Features

  - Sort functionality to sort by Completed, Incompleted along with sorting by time created.
  - Pagination - currently at 9 todos per page
  - Simple hover and todo status change effects.
  - Modal and Backdrop - for confirmation on delete.
  - Input client side validation with a maximum of 30 characters allowed
  - Simple feedback message on submission of a new Todo.
  - Basic Responsive design (could be improved a lot)

- Bundled using Parcel

  -To use dowloand the code

  1.`cd server`

  2.`npm install`

  3.`npm start`

  -To inclide changes in client side

  1.`cd client`

  2.`npm install`

  3.`npm run dev`

  4.Make necessary changes

  5.`npm run build`

  6.Move (copy/paste) the output files from dist folder (in client) to public folder (in server)

Feel free to use and populate the api. Be gentle!

### Happy Coding!
