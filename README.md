# Movie Search App

A React application that allows users to search for movies using the OMDB API.

## Getting Started

### Step 1: Get Your Free API Key
1. Visit [OMDB API](http://www.omdbapi.com/apikey.aspx)
2. Click on "Get a free API Key"
3. Fill out the form with your email
4. Check your email for the API key (it might take a few minutes)

### Step 2: Set Up Your Environment
1. Create a new file called `.env` in the root directory of the project
2. Add your API key to the file like this:
   ```
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```
   Replace `your_api_key_here` with the API key you received in your email

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Start the Development Server
```bash
npm start
```

## Important Notes
- The free tier of OMDB API has a limit of 1,000 requests per day
- Keep your API key private and never commit it to GitHub
- The `.env` file is already in `.gitignore` to prevent accidental commits

## Features
- Search for movies
- View movie details
- Responsive design

## Need Help?
If you have trouble getting your API key:
1. Make sure to check your spam folder for the email
2. The API key usually arrives within 5-10 minutes
3. If you don't receive it, you can try requesting a new one
