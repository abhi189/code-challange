# Centene Angular Project

Angular project, built under a clean architecture that helps to scale and maintain a fast workflow.

# BONUS QUESTION

The answer to the bonus question is that user 'Rand Miller' UUID in enrollees.ts is of different type so the UUID validation which is done in enrolleeService.ts on line 65 is causing 'INTERNAL_SERVER_ERROR'. If we can assign correct UUID to user RAND MILLER - the issue will be resolved.

## 🧱 Self-contained components

- footer
- header
- pages
   - details
   - list

##  User Manual 

- Enrolles page displays all of the Enrolles with thier details in seperate cards.
- Each card is clickable and the user can view the Enrollee Details.
- Enrollees Name and activation status can be editable


## 🧙‍♂️ Commands

| Command      | Description                                      | NPM                | Yarn            | Background command                                              |
| ------------ | ------------------------------------------------ | ------------------ | --------------- | --------------------------------------------------------------- |
| ng           | See available commands                           | npm run ng         | yarn ng         | ng                                                              |
| start        | Run your app in development mode                 | npm start          | yarn start      | ng serve                                                        |
| test         | Run your unit tests                              | npm run test       | yarn test       | ng test                                                         |

