const data = [
  {
    "id": "1",
    "title": "EverUse",
    "tech": ["React", "SASS", "GraphQL", "Cypress"],
    "skills": ["Collaboration", "Communication with Clients", "Full Stack Experience", "Slack", "Zoom", "UI/UX Design"],
    "summary": "EverUse is a company based out of San Diego that upcycles and repurposes discarded climbing ropes into jewelry and accessories. We aim to enhance the company's exposure and functionality by providing them with a full-stack web application. In order to meet the business needs of this small company, we created a front end application focused on streamlining the user experience by beautifully displaying products and allowing buyers to easily place orders. After an order is submitted, the customer receives a detailed confirmation email, and the sellers receive an emailed order form containing the customer's contact information and requested items. Payment is handled externally, in line with the businesses current practices. This application was built with scalability and longevity in mind, and we are proud to have created a website tailored to the company's specific needs.",
    "links": [
      {
        "type": "FE Repo",
        "link": "https://github.com/EverUse/EverUse-FE",
      },
      {
        "type": "BE Repo",
        "link": "https://github.com/EverUse/EverUse-BE"
      },
      // {
      //   "type": "Visit Site",
      //   "link": "https://everuse-fe-c2ebec288f10.herokuapp.com/"
      // }
    ],
    "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXBndjhpbmpwdG4xZnpwOGs1MXd3NndmM2J0ejl1OWo3cjVzZmk2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XI2yOOOzQq01U4AcaA/giphy.gif"
  }, 
  {
    "id": "2",
    "title": "Humor Me",
    "tech": ["React", "Express", "Knex", "PostgreSQL", "CSS", "HTML", "Cypress"],
    "skills": ["Collaboration", "Project Management", "Project Board", "Slack", "Zoom", "UI/UX Design"],
    "summary": "Humor Me is a web application designed to entertain users with random motivational and humourous posters. The user may choose to add their favorite quote posters to a collection, or create their own. This project was completed during Mod 3 of Turing School of Software and Design. The primary goal was to learn and implement a new technology. We chose to build a backend infrastructure, creating a robust database and server with functional endpoints to provide our quotes and images, as well as save any user favorited posters. We completed this project over the course of 12 days, including planning, research and excecution phases. ",
    "links": [
      {
        "type": "FE Repo",
        "link": "https://github.com/JamieCaudill/humor-me-ui",
      },
      {
        "type": "BE Repo",
        "link": "https://github.com/JamieCaudill/humor-me-be"
      },
      // {
      //   "type": "Visit Site",
      //   "link": "https://humor-me-ui-iota.vercel.app/"
      // }
    ],
    "gif": "https://user-images.githubusercontent.com/125763236/257078195-71761667-8d86-4f28-85bb-6da4fac1a7f4.gif"
  }, 
  {
    "id": "3",
    "title": "Zen and the Art of Tacos",
    "tech": ["React", "CSS", "HTML", "Cypress"],
    "skills": ["UI/UX Design", "Accessibility", "Workflow"],
    "summary": "Zen and the Art of Tacos is a web application for anxious taco lovers. Users are able to generate random inspirational and relaxing quotes by clicking on the taco. Quotes are able to be saved, seen on the favorites page, and/or removed from favorites. This project was the final solo project for MOD 3 of Turing School of Software and Design, wrapping up all that we've learned about React, Cypress, Router, user stories, projects, and UI/UX design.",
    "links": [
      {
        "type": "Repo",
        "link": "https://github.com/JamieCaudill/zen-and-tacos",
      },
      // {
      //   "type": "Visit Site",
      //   "link": "https://zen-and-tacos.vercel.app/"
      // }
    ],
    "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHY2ZTFqODV0MTFucG9nZjVsbm8yczl1eXoxem1keWMxMzh0dTVnayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/egiGyelUCMxjMaPbHO/giphy.gif"
  },
  {
    "id": "4",
    "title": "Overlook",
    "tech": ["JavaScript", "SCSS", "HTML", "Mocha", "Chai"],
    "skills": ["UI/UX Design", "Network Requests", "Accessibility", "Workflow"],
    "summary": "Overlook is a web-based hotel-booking application that allows users to login with a username and password. After login, users are taken to a dashboard where they are able to view their past bookings, their upcoming bookings, the total amount they have spent, or search for and make new bookings. The search function takes in a date with the option to filter by room type. Once the search results are displayed, the user is able to view room details, and book an available room. Once booked, the room is added to their bookings and the total spent is updated. The users bookings will be available even after page refresh. This project was the final solo project for MOD 2, wrapping up all that we've learned about accessibility, iterators, apis, scope, webpack, and how the internet works.",
    "links": [
      {
        "type": "Repo",
        "link": "https://github.com/JamieCaudill/Overlook"
      },
      // {
      //   "type": "Visit Site",
      //   "link": "https://overlook-steel.vercel.app/"
      // }
    ],
    "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNThhYmJkZTRjY2IzMTQzNWI5NGFkNjk4ZDQ0NTQyY2Q0YWE1NmYwNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/FUQ9wpu90OVzACbbb9/giphy.gif"
  },
  {
    "id": "5",
    "title": "What's Cookin",
    "tech": ["JavaScript", "CSS", "HTML", "Mocha", "Chai"],
    "skills": ["Collaboration", "Project Management", "TDD", "Project Board", "Slack", "Zoom", "UI/UX Design"],
    "summary": "What's Cookin'? is a group project completed as a part of Module 2 at Turing School of Software Design's Front-End curriculum. The application hosts a variety of recipes that can be viewed as a whole, by course (salads, hor d'oevres, main courses, sides), or searched by a tag or recipe name to show relevent recipes. When looking at a recipe's page that recipe can be saved to the users saved recipes page. When looking at the saved recipe collection the user may search through their recipes and delete recipes of their choosing.",
    "links": [
      {
        "type": "Repo",
        "link": "https://github.com/JamieCaudill/whats-cookin-group-project",
      },
      // {
      //   "type": "Visit Site",
      //   "link": "https://whats-cookin-group-project.vercel.app/"
      // }

    ],
    "gif": "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemJvNHhleWJscWdvYndyOGtnejl2bHRiN3R0M3d0NTFyb293NmN5MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rv9CrKhOAyLhn70YYh/giphy.gif"
  }
]

export default data;