![visualstudiess](https://user-images.githubusercontent.com/86003701/137584673-6f5e00d7-db7d-4868-99c5-897c09bc0135.jpg)


                          In depth process of request and response-:
![proces](https://user-images.githubusercontent.com/86003701/137584691-871a3f7c-de08-4fb7-a751-4799234b631e.png)



Used rest api for communication between client(react app) and server(express app) by creating api endpoints(functions) in express app(server) and giving them special routes(names). Then made request from client(react app) by using those routes already defined in express app with specific endpoints.
Mongoose schema is used for defining datastructure of the items in doc file (mongodb is schemaless nosql database) 🤍🤍


Used async function for having promises and await(inside async) for waiting till the promise returns something ,either fulfilled or rejected. Used axios inside await [aync(await(axios))] for sending request to server by using routes ,which triggers the api endpoint function correspondent to it in server to perform the specific function in database 🤍🤍

Built an rest api using express app(server) and mongodb which is used by react app(client,frontend)🤍🤍

Used usestate for managing state like bool(videoplayer) when to call play(true)/stop(false)
