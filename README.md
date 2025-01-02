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

I have tried using such services, as Heroku, [https://my-json-server.typicode.com](https://json-server-49w5.onrender.com) and ended up working with Render[https://json-server-49w5.onrender.com](https://json-server-49w5.onrender.com). However, by the time this is checked, the server is likely to be down, so I suggest the method below (I will leave axios with the original localhost address). 

So the simpliest way is just to run my server here via command "npm run server".

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