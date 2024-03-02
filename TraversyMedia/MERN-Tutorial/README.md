- npx create-react-app@latest frontend --template redux

- (add inside package.json outside of both backend/frontend folder > scripts) "client": "npm start --prefix frontend"

- npm run client ( to start )

- to create automatic export in jsx file ( src/pages/... ) use this > ( rfce )

- go to frontend part first then install ( npm i react-router-dom )

- go to frontend part first then install ( npm i react-icons )


- to both run frontend and backend
- npm i -D concurrently

- (add inside package.json outside of both backend/frontend folder > scripts) "dev": "concurrently \"npm run server\" \"npm run client\" "

- npm i axios react-toastify