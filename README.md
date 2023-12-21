
# Contact List Manager

This is Contact List Manager app, build it using html, scss, javascript, reactjs.


## Demo

https://contact-list-react-app-cn.netlify.app/


## API Reference

#### Get all Contact

```http
GET     https://jsonplaceholder.typicode.com/users
```

| Parameter |Res Type | Description                |
| :-------- | :------- | :------------------------- |
| `NA` | `Array` | Just do get request with url  |

#### Add Contact

```http
POST     https://jsonplaceholder.typicode.com/users
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `NA`      | `Object` | **Required**. Body as the contacts details|

#### Update Contact

```http
PUT     https://jsonplaceholder.typicode.com/users/:${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Object` | **Required**. id of the contact and new details of contact 

#### Delete Contact

```http
DELETE    https://jsonplaceholder.typicode.com/users/:${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `` | **Required**. id of the contact 

## Features

- List of Contacts
- Add Contact
- Update Contact
- Delete Contact


## Run Locally

Clone the project

```bash
  git clone https://github.com/chaturvedi-anil/contact-list-react.git
```

Go to the project directory

```bash
  cd contact-list-react
```

Install dependencies

```bash
  npm install
```

Start the react app

```bash
  npm run dev
```


## Tech Stack

* Html
* Scss
* Javascript
* ReactJs

### Aditonal Libraries
* react-tostify (for notifications)
* react-router-dom


## Authors

- [@chaturvedi-anil](https://github.com/chaturvedi-anil)

