# Use the official Node.js image
FROM node:22-alpine

# Create the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]