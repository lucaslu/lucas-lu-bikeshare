# bikkr

**_bikkr is a platform that allows you to share your personal bike with others. Think of it like a airbnb for bikes!_**

bikkr is my capstone project for Brainstation's 12-week full-stack web development bootcammp. As part of the program, we were tasked with creating a full-stack website from scratch within a two-week period. If you'd like to check it out, you can access it by [clicking here](https://lucas-lu-bikeshare.netlify.app/)

## Tech Stack

### Frontend:

- React
- Vite
- React Router
- Mantine

### Backend:

- Node.js / Express
- Knex.js
- Firebase Authentication
- MySQL Database

# Installation

Follow these steps to run a local instance:
(You'll need node, npm, and MySQL already installed.)

1. Clone or download this repo and the [api repo](https://github.com/lucaslu/lucas-lu-bikeshare-api).

### Set up the backend

2. Create a new database in MySQL called `bikeshare`.
3. Install server dependencies:

   Run `npm install` from inside the directory:

   ```bash
   $ npm install
   ```

4. Run migrations
   ```bash
   $ npm run migrate
   ```
5. Run seeds
   ```bash
   $ npm run seed
   ```
6. Set environment variables:

   Create a file`.env` as below:

   ```shell
   DB_LOCAL_DBNAME="bikeshare"
   DB_LOCAL_USER="root"
   DB_LOCAL_PASSWORD="rootroot"
   PORT=8080
   ```

7. Start the server:
   ```bash
   $ npm run server
   ```

### Set up the frontend

8. Install client dependencies:

   Run `npm install` from inside the directory.

   ```bash
      $ npm install
   ```

9. Set environment variables:

   Create a file `.env` as below:

   ```shell
   VITE_BACKEND=http://localhost:8080
   VITE_FIRE_API_KEY=AIzaSyDlZ2hxgJtkEkCXpatCUhdWxl3qwMlS-nE
   VITE_FIRE_AUTH_DOM=fir-9-745b3.firebaseapp.com
   VITE_FIRE_PRJ_ID=fir-9-745b3
   VITE_FIRE_STG_BKT=fir-9-745b3.appspot.com
   VITE_FIRE_MSG_ID=621257559494
   VITE_FIRE_APP_ID=1:621257559494:web:0aefc068f3d0ac04daf6c7
   ```

10. Start the React app:
    ```bash
    $ npm run dev
    ```
