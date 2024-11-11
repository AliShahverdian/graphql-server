import events from "./data/events.json";

let bookmarks: string[] = [];

export const resolvers = {
  Query: {
    getEvents: () => events,
    getBookmarks: () =>
      events.filter((event: any) => bookmarks.includes(event.id)),
  },
  Mutation: {
    addBookmark: (_: any, { eventId }: { eventId: string }) => {
      if (!bookmarks.includes(eventId)) {
        bookmarks.push(eventId);
      }
      return events.find((event: any) => event.id === eventId);
    },
    removeBookmark: (_: any, { eventId }: { eventId: string }) => {
      bookmarks = bookmarks.filter((id) => id !== eventId);
      return events.find((event: any) => event.id === eventId);
    },
  },
};
