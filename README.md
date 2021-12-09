# Timely
Project for YTSP0300 - Application Frameworks

## What it does
Allows user to add and remove reservations to a service. 

## Video of app in use
https://youtu.be/89UGSS-zzaE

## Link to app instance
https://jsatuaho.github.io/timely-angular

## App development history
The app took somewhere around 32 hours to develop. I started with an outdated course, which I followed for a few hours. Afterwards I moved on to a more up-to-date crash course, and adapted that to my project.

Some setbacks I faced: forgetting to set values on load, forgetting to bind fields to variables, and flailing some with subscriptions and emitters. Pretty much all involved figuring out a minute detail that was either missing, or misplaced.

A valuable lesson in creating something with Angular is: create a mock-up, and design with care before implementation. This should lay out clearly the logic of the connections between the components, and save you headache in the future. Be mindful of your html element-variable bindings.

With the amount left to do, I figure a 3 is a reasonable grade for this. I would grade it a 4 with 2 of the following implemented: webtoken authentication, reservation updating, new account registration, admin functions; a 5 with all.


## TODO
- Implement possibility to update reservations
- Implement sercure login with json webtoken
- Implement new account registration
- Create interface for admin users to add/remove services
- Implement time tracking calendar, to show possible reservation conflicts