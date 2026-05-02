# 🏠 Airbnb Clone - FULL STACK

A full-stack web application inspired by Airbnb, built with JS, Node.js, Express, EJS, and MongoDB.

## Tech Stack

| Layer      | Technology                         |
|------------|------------------------------------|
| Frontend   | HTML, CSS, JavaScript              |
| Templating | EJS (Embedded JavaScript)          |
| Backend    | Node.js, Express.js                |
| Database   | MongoDB, Mongoose                  |
| Auth       | TBD       |
| Images     | TBD              |
| Maps       | TBD    |
| Validation | TBD                             |

## Features

- User registration, login, and logout
- Create, view, edit, and delete property listings
- Upload listing images to Cloudinary
- Interactive map for each listing using Mapbox
- Add and delete reviews with star ratings
- Authorization — only owners can edit/delete their listings
- Flash messages and error handling
- Responsive, mobile-friendly UI

## Project Structure

```
airbnb-clone/
├── models/
│   ├── listing.js       # Listing schema
│   ├── review.js        # Review schema
│   └── user.js          # User schema (Passport)
├── routes/
│   ├── listings.js
│   ├── reviews.js
│   └── user.js
├── views/
│   ├── layouts/         # Boilerplate layout (EJS Mate)
│   ├── listings/        # index, show, new, edit
│   └── users/           # login, signup
├── public/
│   ├── css/
│   └── js/
├── middleware/
│   └── index.js         # isLoggedIn, isOwner, validateListing...
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── app.js
├── .env
├── .env.example
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file at the root (see `.env.example`):

```env
MONGO_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/airbnb
SESSION_SECRET=your_session_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

MAP_TOKEN=your_mapbox_token
```

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/Akanksha-Duvvuri/airbnb-clone.git
cd airbnb-clone

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your credentials in .env

# 4. Start the server
node app.js
# or with auto-reload:
nodemon app.js
```

Visit `http://localhost:3000`

## Key Routes

| Method | Route                              | Description            |
|--------|------------------------------------|------------------------|
| GET    | /listings                          | All listings           |
| GET    | /listings/new                      | New listing form       |
| POST   | /listings                          | Create listing         |
| GET    | /listings/:id                      | Show listing           |
| GET    | /listings/:id/edit                 | Edit listing form      |
| PUT    | /listings/:id                      | Update listing         |
| DELETE | /listings/:id                      | Delete listing         |
| POST   | /listings/:id/reviews              | Add review             |
| DELETE | /listings/:id/reviews/:reviewId    | Delete review          |
| GET    | /signup                            | Signup form            |
| POST   | /signup                            | Register user          |
| GET    | /login                             | Login form             |
| POST   | /login                             | Authenticate user      |
| GET    | /logout                            | Logout                 |

## Dependencies

```bash
npm install express mongoose ejs ejs-mate express-session connect-flash \
passport passport-local passport-local-mongoose method-override \
multer multer-storage-cloudinary cloudinary joi dotenv
```

## License

MIT — Built for educational purposes, inspired by Airbnb.