# Event Manager API

This is a GraphQL API built using Apollo Server and TypeScript. The API provides functionality for managing events, including querying for a list of events, viewing bookmarked events, and adding or removing bookmarks.

## Features

- **Event Queries**
  - **Get Events**: Retrieve a list of available events.
  - **Get Bookmarked Events**: View events that have been bookmarked by the user.
- **Mutations for Bookmark Management**
  - **Add to Bookmarks**: Bookmark an event by its ID.
  - **Remove from Bookmarks**: Remove an event from the list of bookmarks.

## Tech Stack

- **Apollo Server** for GraphQL API
- **TypeScript** for type-safe development
- **GraphQL** as the query language

## Project Structure

```plaintext
.
├── src
│   ├── resolvers     # GraphQL resolvers for queries and mutations
│   ├── schema        # GraphQL schema definitions
│   ├── data
│           ├── events.json         # Mock or database setup for events and bookmarks
│
└── index.ts        # Main server setup and configuration
└── README.md
```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. start server

```bash
 npm run dev
```

3. run docker

run these two command to run docker

```bash
 docker build -t graphql-image .
 docker run -d -p 80:4000 --name graphql-server graphql-image
```
