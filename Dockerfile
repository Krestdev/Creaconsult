# Dockerfile
# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

ARG NEXT_PUBLIC_TOKEN
ENV NEXT_PUBLIC_TOKEN=${NEXT_PUBLIC_TOKEN}

ARG NEXT_IMAGE_BASE
ENV NEXT_IMAGE_BASE=${NEXT_IMAGE_BASE}

# Build the Next.js app
RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
