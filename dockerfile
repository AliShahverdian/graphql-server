# Use Node.js base image
FROM node:20

# Create and set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app's code
COPY . .

# Build the TypeScript code
RUN npm run build

# Start the server
CMD ["node", "dist/index.js"]
