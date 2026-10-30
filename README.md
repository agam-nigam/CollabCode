# 🚀 Real-Time Collaborative Code Editor

A web-based collaborative code editor that enables multiple users to write and edit code together in real time. Built using React, Node.js, Socket.IO, Monaco Editor and Yjs, and containerized with Docker for deployment on AWS.

## 📌 Overview

The Real-Time Collaborative Code Editor provides an interactive coding environment where multiple users can collaborate on the same code editor simultaneously.

The application uses real-time communication to synchronize code changes between connected users, providing a collaborative coding experience.

The project also explores containerization and cloud deployment by packaging the application using Docker and deploying it using AWS services.

## ✨ Features

* **Real-Time Collaboration:** Multiple users can edit code simultaneously.
* **Monaco Editor:** Integrated code editing experience.
* **Live Synchronization:** Synchronizes changes between connected users using Yjs.
* **Real-Time Communication:** Uses Socket.IO for communication between clients and the server.
* **Containerized Application:** Docker-based application packaging.
* **Cloud Deployment:** Deployed using Amazon ECS.
* **Container Registry:** Docker images stored in Amazon ECR.

## 🛠️ Tech Stack

| Category                | Technologies        |
| ----------------------- | ------------------- |
| Frontend                | React.js            |
| Code Editor             | Monaco Editor       |
| Backend                 | Node.js, Express.js |
| Real-Time Communication | Socket.IO           |
| Collaborative Editing   | Yjs                 |
| Containerization        | Docker              |
| Container Registry      | Amazon ECR          |
| Cloud Infrastructure    | AWS ECS             |

## 🏗️ Architecture

The application follows a client-server architecture.

1. **Frontend:** React provides the user interface and integrates the Monaco code editor.
2. **Backend:** Node.js and Express.js handle server-side operations.
3. **Real-Time Communication:** Socket.IO facilitates communication between connected clients and the server.
4. **Collaboration:** Yjs manages collaborative document synchronization.
5. **Containerization:** Docker packages the application and its dependencies into container images.
6. **Deployment:** Docker images are pushed to Amazon ECR and deployed through Amazon ECS.

## 🐳 Docker Implementation

Docker is used to containerize the application, ensuring a consistent runtime environment across development and deployment.

Key implementation areas:

* Writing Dockerfiles.
* Building Docker images.
* Understanding Docker containers and images.
* Multi-stage Docker builds.
* Running containerized applications.
* Managing application deployment using Docker.

### Build Docker Image

```bash
docker build -t collaborative-code-editor .
```

### Run Docker Container

```bash
docker run -p 3000:3000 collaborative-code-editor
```

*Note: Adjust the port and Docker build context according to your application configuration.*

## ☁️ AWS Deployment

The application was deployed using Amazon Web Services.

### AWS Services Used

| AWS Service | Purpose                         |
| ----------- | ------------------------------- |
| AWS IAM     | Identity and access management  |
| Amazon ECR  | Storing Docker images           |
| Amazon ECS  | Running and managing containers |

### Deployment Workflow

1. Configure AWS IAM permissions.
2. Build the Docker image.
3. Authenticate Docker with Amazon ECR.
4. Push the Docker image to the ECR repository.
5. Configure the ECS task definition.
6. Deploy the container using an ECS service.
7. Configure networking and security groups.
8. Verify application accessibility.

## 📚 Key Learnings

Through this project, I gained practical experience with:

* Building and integrating full-stack applications.
* Understanding real-time communication using Socket.IO.
* Working with collaborative editing using Yjs.
* Containerizing applications using Docker.
* Creating and managing Docker images.
* Working with Amazon ECR and Amazon ECS.
* Understanding AWS IAM and security groups.
* Troubleshooting container deployment and cloud configuration issues.

## 🚀 Future Improvements

* Add user authentication and authorization.
* Introduce multiple programming language support.
* Implement collaborative rooms.
* Add code execution capabilities.
* Improve deployment automation using CI/CD.
* Implement application monitoring and logging.

## 👨‍💻 Author

**Agam Nigam**

Software Engineer | Backend & Full-Stack Developer

* GitHub: [Your GitHub Profile](https://github.com/agam-nigam)
* LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/agam-n/)

## 🙌 Acknowledgements

This project was developed as a hands-on learning exercise, following the learning resources from Sheryians Coding School.

Special thanks to the original creator for providing the tutorial and learning guidance.

---

⭐ If you find this project interesting, consider giving the repository a star!