## ![favicon-32x32](https://github.com/shokerm/EBook-App-Project/assets/96984377/656085e9-1a4c-4e2c-9c48-a438e160630b) EBook App

Online book store appliaction and online book and documents reader.
EBook simulates online books store and also reading books online in the application itself.
The application has the option of adding, editing and deleting products. 3 authorization levels for users with different action options: visitor, user and admin.


## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Connenting To Backend Api](#connenting-to-backend-api)
- [API Access](#api-access)
- [Interface images](#interface-images)
- [Feedbacks](#feedbacks) 

## Features

- Light/dark mode toggle.
- Document reader (PDF format).
- Active cart and products API management.
- User Management panel - manage users and their permissions.


## Tech Stack
- Backend: C# ASP.NET Core.
- Frontend: Angular 14.3.0, Angular material.
- Hosting backend: Azure - [EBook-Azure-Api](https://ebookapi20230627230225.azurewebsites.net/swagger) - <em><strong> temporarily disabled </strong></em>.
- Database: Microsoft SQL server with Entity Framework.
- Authentication: JWT & Identity Core.



## Installation

Install EBook App with npm

```bash
  npm install
```

## Connenting To Backend Api
By default the client side is connecting to this Azure's backend.
To connenct the client side to localhost backend just follow the next steps:
```bash
Go to src/app/models/baseUrl.ts :

1   // For contecting to the Azure put line 5 on comment & uncomment line 4.
2   // For contecting to the localhost put line 4 on comment & uncomment line 5.
3
4   //  export const BASE_URL = "https://ebookapi20230627230225.azurewebsites.net/api"; 
5   export const BASE_URL = "https://localhost:7254/api";
```

## API Access
| User              | Password                   | Access       |  Access & Abilities           |        
| :---------------  | :------------------------- | :----------- | :-----------
| admin@email.com   | Aa@1234                    | Administrator|  Full access to any page in the app and observe <strong>any user & order</strong> details.<br> Purchase products.<br>Add/Edit/Delete products, any user's orders and accounts <br> Modify <strong>any user's</strong> account details: username/email/password.<br> Can Change the permission levels of <strong>all users</strong>.<br>The only one who can see the buttons for adding, editing and deleting products.|
| user@email.com    | Bb@4321                    | User         |Full access to any page in the app and observe <strong>its own</strong> user details.<br> Purchase products.<br>Observe <strong>its own</strong> user details.<br>Add/Edit/Delete <strong>its own</strong> orders.<br> Modify <strong>its own</strong> account's details:  username/email/password. |
| visitor@email.com | Cc@1324                    | Visitor      |Limited access.<br> Purchase products. <br> Observe <strong>its own</strong> user details.<br>Add/Edit/Delete <strong>its own</strong> orders.<br> Modify <strong>its own</strong> account's details: username/email/password.<br><strong>Not authorized</strong> to see "my book" page. |

## Interface images
![capture-1](https://github.com/shokerm/EBook-App-Project/assets/96984377/59ac2399-8972-414b-8313-36e852096059)
![capture-2](https://github.com/shokerm/EBook-App-Project/assets/96984377/53194b12-5b58-4e53-ba22-9f30adf66a89)
![capture-3](https://github.com/shokerm/EBook-App-Project/assets/96984377/7a984c29-8d04-4ae8-b88e-328778934e87)
![capture-4](https://github.com/shokerm/EBook-App-Project/assets/96984377/fe5dda04-1228-48c1-ab3d-223b1d2975de)
![capture-5](https://github.com/shokerm/EBook-App-Project/assets/96984377/2c7bf6ef-ea7d-4e37-8256-3ace18648e87)
![capture-6](https://github.com/shokerm/EBook-App-Project/assets/96984377/da5bfea0-f76c-464c-85bc-4937fcbd1edb)
![capture-7](https://github.com/shokerm/EBook-App-Project/assets/96984377/aafd6098-8144-42b5-a870-ca553a58da05)
![capture-8](https://github.com/shokerm/EBook-App-Project/assets/96984377/a0a64166-b96a-40b4-ad49-c192414616b6)
![capture-9](https://github.com/shokerm/EBook-App-Project/assets/96984377/9c7636ed-2296-48bd-855b-81827ee9e763)
![capture-10](https://github.com/shokerm/EBook-App-Project/assets/96984377/3eada8fb-c096-47ad-9bee-399a2c15f1b4)
![capture-11](https://github.com/shokerm/EBook-App-Project/assets/96984377/556239ec-4498-4107-b95c-bd82917ef1bc)
![capture-12](https://github.com/shokerm/EBook-App-Project/assets/96984377/db9fcb07-d9f1-48ee-b1cb-0044209de6ea)
![capture-13](https://github.com/shokerm/EBook-App-Project/assets/96984377/4cc8c615-496b-43e7-af09-a654bf12931d)
![capture-14](https://github.com/shokerm/EBook-App-Project/assets/96984377/d98ff7ee-f5fe-4fb2-8985-d3ff93af72a2)
![capture-15](https://github.com/shokerm/EBook-App-Project/assets/96984377/a27e94d8-1035-4f7a-b587-b5fb3a1a875e)



## Feedbacks

On this occasion, we would be happy to recommend the website that enables easy registration and learning of online books in a variety of fields
[TradePub.com](https://programminglanguage.tradepub.com/).
