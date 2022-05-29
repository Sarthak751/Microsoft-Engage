# Microsoft-Engage
Microsoft Engage 2022 - **"Three-step super secure authentication system"**   
Hosted on github: [Face Recognition WebApp](https://sarthak751.github.io/My-Project/)

## Overview
I made this application as a part of Microsoft Engage Intern 2022 program. I originally wanted to make an attendance monitoring system using facial recognition **in addition to** the facial recognition authentication system, but due to time constraints I had to work solely on the authentication system. But hey, I just improved it to the next level! Check out the content below for more information about the system. 

## Tech Stack
I can't deny that I used the most traditional way of doing things but it did turn out quite well. I used:

* HTML
* CSS
* Javascript
* Google Firebase (Authentication and Storage)
* MXFace API (Kudos to these guys for such a nice and sweet documentation)

## Requirements
* I have configured CORS in such a way that XMLHttpRequests from local hosts can fetch items from firebase storage, so there should not be any CORS related problems running from a local host. 
* This project is just a collection of web pages built using the good old combination of html, css and javascript. All one needs to do is clone the repo and run the project by opening index.html. As easy as that!

## 3-step Authentication
In very simple terms, this is how the authentication procedure flows: 

1. Email and Password login
2. Username login
3. Face login


## File Structuring
Since the project does not have too many pages, I clubbed all the same extension files together, for example, all css files together. The html files sit at the root level of
the file structure. Some people could have a hard time figuring out how the files are linked. For this problem, I have also made a nice diagram given below:

![File Strcuture Explanation](/images/structure_info.jpg)

## User Flow Diagram
I have also made a nice hand-drawn user flowchart which does makes things easy to understand.

![Flowchart](/images/flowchart.jpg)

## Firebase services
Login, registration, image storage and the logout operation are all firebase services which I have integrated in my project. I have provided the logout option both in the dashboard as well as during the face login in case someone gets stuck.

## User Registration
User registration requires one to enter their username, email, password and an image. The username NEEDS to be UNIQUE! The image gets stored on the firebase storage having the same file name as the username. This logic shapes the third step of our authentication process. 

## Face fetch (third step)
During this step, one clicks their realtime picture. This image, along with the image corresponding to their account (file name same as the username) from firebase storage, is fed to MXFace API which compares the two pictures, matches the faces, and returns a response. On a positive response, one finally gets access to the dashboard. 






