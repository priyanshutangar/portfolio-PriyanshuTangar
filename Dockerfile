# 1) Use Node to build the React app
FROM node:18-alpine AS build

# 2) Set working directory inside the container
WORKDIR /app

# 3) Copy package.json and package-lock.json
COPY package*.json ./

# 4) Install dependencies
RUN npm ci

# 5) Copy all project files
COPY . .

# 6) Build the React app (creates /build folder)
RUN npm run build

# 7) Use Nginx to serve the built files
FROM nginx:alpine

# 8) Remove default nginx html and copy our build
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html

# 9) Expose port 80
EXPOSE 80

# 10) Start nginx
CMD ["nginx", "-g", "daemon off;"]
