## About application

Application using connection with API to collect movies details from external API. Application has data base in cloud. After get data from external API application send it to Data Base. User also could get movies list from data base.

### Install

There is possibility to start this application on three ways:

1. Get application from github and install locally on computer:
    a) https://github.com/grzegorzgebala/movies-api-app.git - from this repository you can use command in terminal: git clone https://github.com/grzegorzgebala/movies-api-app.git
    b) "cd movies-api-app" and lunch "npm install"
    c) After this install there is necessary to go "cd client" and repeat "npm install"
    d) "cd .." to come back to movies-api-app directory and run "npm run start"
2. Docker
    a) after clon repository - from this repository you can use command in terminal: git clone https://github.com/grzegorzgebala/movies-api-app.git
    b) Install docker from: https://www.docker.com/get-started or use command in terminal: "sudo npm install -g docker"
    c) "cd movies-api-app" and lunch "npm install"
    d) After this install there is necessary to go "cd client" and repeat "npm install"
    f) "cd .." to come back to movies-api-app and use command: "docker build -t movie-api-app ." and after it "docker run -it -p 9000:3000 movie-api-app"

3. Simply use link: https://movies-api-app-grzegorz.herokuapp.com/
