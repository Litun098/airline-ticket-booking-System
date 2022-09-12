
# Air Ticket Booking API

An api to create delete update schedule of  flight and User.



## API Reference





#### Sign up user

```http
  POST localhost:3000/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email|
| `password` | `string` | **Required**. Password|


#### Login user

```http
  Post localhost:3000/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Email|
| `password` | `string` | **Required**. Password|

```Token
After Login a Token will be generate which will be used for authenticate the user
```
####Access Token for all api

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `TOP_SECRET` | `string` | **Required**. Email|





#### Create airline

```http
  POST localhost:3000/api/v1/airline
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**. Name to create airline |
| `website` | `string` | **Required**. website to create airline |

#### Get all Airlines

```http
  GET localhost:3000/api/v1/airline
```

#### Get airlines by name

```http
  GET localhost:3000/api/v1/airline/:name
```

#### Delete airline

```http
  DELETE localhost:3000/api/v1/airline/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`    | `string` | **Required**. Name to elete airline |






#### Create Flight

```http
  POST localhost:3000/api/v1/flight
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `departureAirport`    | `string` | **Required**. Departure Airport |
| `arrivalAirport` | `string` | **Required**. Arrival Airport |
| `duration` | `string` | **Required**. Flight duration |
| `departureTime` | `string` | **Required**. Departure time |
| `flightNumber` | `integer` | **Required**. Flight number |
| `price` | `integer` | **Required**. Price of ticket |
| `airline` | `integer` | **Required**. Airline Id |


#### GET one flight 

```http
  GET localhost:3000/api/v1/flight/:flightNumber
```

#### GET all flight

```http
  GET localhost:3000/api/v1/flight
```

#### Delete one flight

```http
  DELETE localhost:3000/api/v1/flight
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `flightNumber`    | `integer` | **Required**. Flight Number |


#### Post a review

```http
  POST localhost:3000/api/v1/review
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `comment`    | `string` | **Required**. write comment for review |
| `flight` | `string` | **Required**. flight id |


#### Get a review

```http
  GET localhost:3000/api/v1/review/:flightId/:userId
```

#### Get all review

```http
  GET localhost:3000/api/v1/review
```

#### Delete a review

```http
  GET localhost:3000/api/v1/review/:id
```



#### Booking

```http
  POST localhost:3000/api/v1/booking
```
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `status`    | `string` | **Required**. Booking status Booked] |
| `flightId` | `string` | **Required**. flight id |
| `id` | `string` | **Required**. id|



#### Cancel Booking

```http
  DELETE localhost:3000/api/v1/review/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Booking Id|



#### Show Bookings

```http
  GET localhost:3000/api/v1/review/:id/boardingPass
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Booking Id|
| `boardingPass` | `string` | **Required**. id|


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dibyakanta-nayak-77bab11b9)


## Authors

- [@Litun098](https://github.com/Litun098)

