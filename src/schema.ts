import { gql } from "apollo-server";

export const typeDefs = gql`
  type Event {
    id: ID!
    title: String!
    date: String!
    location: String!
    description: String
  }

  type Query {
    getEvents: [Event!]!
    getBookmarks: [Event!]!
  }

  type Mutation {
    addBookmark(eventId: ID!): Event
    removeBookmark(eventId: ID!): Event
  }
`;
