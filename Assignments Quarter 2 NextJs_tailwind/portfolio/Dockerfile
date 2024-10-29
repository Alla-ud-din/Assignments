# Use the official Node.js image as the base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /code

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json /code/

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . /code/

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application in development mode
CMD ["npm", "run", "dev"]