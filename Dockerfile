FROM node:14

# Create app directory
WORKDIR /app

# Copy the dependencies and install app dependencies
COPY package.json /app 
COPY yarn.lock /app

RUN yarn install

# Bundle app source
COPY . /app 

# Start the project
CMD yarn start

EXPOSE 8000