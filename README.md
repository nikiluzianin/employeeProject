# HR application (React + Vite)

This is the app that mimics the advenced employee management system.

Framework: React

-   Frontend packages:
    -   axios
-   Backend packages:
    -   json-server

## Core Features

After the login app allows to see the list of employees. Each of them can be edited, can be examined more closely (more information available) and promoted / demoted. Also, in the list there are noifications of anniversarries of work and necessity of reviews. Employee can be added via a form.

## Custom Hooks

### useAxios

A custom hook to make requests to the server via axios. 

### useEmployeeStatus

custom hook to check how much time the employee is working in the company

## Deployment

The front-end is on Netlify and can be found here [https://lighthearted-kangaroo-c78584.netlify.app/](https://lighthearted-kangaroo-c78584.netlify.app/)

The back-end is quite tricky, if not taking into account re-writing the server fully. Basically, the possibility  is either free and quite limited or paid. 

I have tried using such services, as Heroku, [https://my-json-server.typicode.com](https://json-server-49w5.onrender.com) and ended up working with Render[https://json-server-49w5.onrender.com](https://json-server-49w5.onrender.com).However, by the time this is checked, the server is likely to be down, so there is a backup option below. 
Currently, the server is at https://json-server-49w5.onrender.com, and it is used in the code. If it stops working, you can just get my code from Git https://github.com/nikiluzianin/employeeProject, run the server on local machine using "npm run server". In order for the HR App to start working with local, in the file DBLink.js comment the first DBLINK and uncomment the second one – it will start using localhost server.


## Future Improvements

- backend has to be much better;
- actualy authentification;
- add try / catches and validations throughout the code;
- possibility to remove the employee;
- notifications about the editing / adding / removing / deleteing employees
- better style in general;

## Reflection

Since it is basically my first app in React I was surprised with most of the stuff. 

I see that custom hooks and componenets are really nice things to use, to simplify the work and make the code really reusable. 

UseState and useEffect still do not feel too familiar, but I guess it just needs time.

What surprised me, deployment was not that complicated - Netlify bascially does everything by itself. I have had a couple of minor issues, but fixed them quite quickly.

As for backend, that is even more simple with widely available guides.