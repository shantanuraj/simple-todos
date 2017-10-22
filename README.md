# simple-todos

## Working

### Route '/'

* Open homepage [https://todos.sraj.me/](https://todos.sraj.me/).
* The homepage opens the Login component.
* On Login, we get a fake `token` back from the API.
* We dispatch a route change to [/todos](https://todos.sraj.me/todos).

### Route '/todos'

* During render Todos component checks for `token`.
* If token is not found it renders a link to the Login comonent [/login](https://todos.sraj.me/login).
* If token is found and todos are not present we fetch todos from the `componentDidMount` method.
* If token is found and todos are present we render the fetched todos.
* If token is found and `fetching` is set to true a Loading page is rendered.
