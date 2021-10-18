![visualstudiess](https://user-images.githubusercontent.com/86003701/137584673-6f5e00d7-db7d-4868-99c5-897c09bc0135.jpg)


                          In depth process of request and response-:
![proces](https://user-images.githubusercontent.com/86003701/137584691-871a3f7c-de08-4fb7-a751-4799234b631e.png)


We used material ui for icons.
We used rest api for communication between client(react app) and server(express app).
Mongoose schema is used for defining datastructure of the items in doc file (nosql doc database stores items in doc)


We make url/api endpoint by giving a special name to it (any type of name)and defining what it will request to database when called.(BUT WE CANT MAKE REQUEST FROM BACKEND)
eg-: /user/noofitems.get={fetch data of that user's bucketlist} [In express app]
     axios.user/noofitems.get [it will give the items list]     [in react app]
     
     
     
Api endpoint = URL which makes a special request to database. 
In backend web app api endpoint are named and defined that what request they will make to database on calling. eg-: /newuserKoAddKaro/.post= add new user info in database
In frontend web app we use use that url to make request to express app(server). 
