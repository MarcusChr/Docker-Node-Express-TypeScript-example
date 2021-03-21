# **To compile the TypeScript:**
> npm run build
 
 # **To start the server (without Docker):**
> npm start
 
 # **To build a Docker-image of this project:**
> docker build -t nameofimage .
Assuming You are within the same folder. If not, replace the '.' with the path to the folder.

# **To start the container, use either Docker Desktop or the cli:**
> docker run -p 80:8080 nameofimage
This will start the container with the local port of 80.
