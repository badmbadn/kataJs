https://badmbadn.github.io/kataJs/





-------------------------------------------- 4.4.9 -----------------------------------------------------


1.Регистрация

{
    "user": {
        "username": "badm",
        "email": "korn@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDAwZWU2NmY4YmVlMWIwMDU1NWE2MCIsInVzZXJuYW1lIjoiYmFkbSIsImV4cCI6MTY4MjkwOTQxNCwiaWF0IjoxNjc3NzI1NDE0fQ.UZWIRwv9EUyvGkM7R0nMepDLfdwHSjK_PDrtrh5EbsA"
    }
}

curl --location 'https://blog.kata.academy/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
  "user": {
    "username": "badm",
    "email": "korn@gmail.com",
    "password": "123456"
  }
}'

--------------------------------------------------------------------------------------------------

2.Аутентификация 

{
    "user": {
        "username": "badm",
        "email": "korn@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDAwZWU2NmY4YmVlMWIwMDU1NWE2MCIsInVzZXJuYW1lIjoiYmFkbSIsImV4cCI6MTY4MjkwOTYyMSwiaWF0IjoxNjc3NzI1NjIxfQ.sD4-QhyBmYjqhKWKUyqRO-lt1yWyJX0O6FM4sJW7Uts"
    }
}

curl --location 'https://blog.kata.academy/api/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "user": {
    "email": "korn@gmail.com",
    "password": "123456"
  }
}'

---------------------------------------------------------------------------------------------------

3. Get запрос

{
    "user": {
        "username": "badm",
        "email": "korn@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDAwZWU2NmY4YmVlMWIwMDU1NWE2MCIsInVzZXJuYW1lIjoiYmFkbSIsImV4cCI6MTY4MjkwOTk3NSwiaWF0IjoxNjc3NzI1OTc1fQ.h9fP5cF4Az8YwwnBIMDEf1zw7l8TeoYSOs7QRnk9mxI"
    }
}

curl --location --request GET 'https://blog.kata.academy/api/user' \
--header 'Accept: application/json' \
--header 'Authorization: Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDAwZWU2NmY4YmVlMWIwMDU1NWE2MCIsInVzZXJuYW1lIjoiYmFkbSIsImV4cCI6MTY4MjkwOTYyMSwiaWF0IjoxNjc3NzI1NjIxfQ.sD4-QhyBmYjqhKWKUyqRO-lt1yWyJX0O6FM4sJW7Uts' \
--header 'Content-Type: application/json' \
--data-raw '{
  "user": {
    "username": "badm",
    "email": "korn@gmail.com",
    "password": "123456"
  }
}'

