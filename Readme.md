# **Ming Distributed Network Simulation**

This repository simulates a distributed network using Docker containers as nodes. Each node is an independent Docker container running a lightweight Express server, capable of communicating with other nodes over a shared network.

## **Overview**

This project demonstrates a basic setup for simulating a distributed network using Docker. Each node in the network:
- Runs an Express web server.
- Is part of a shared Docker network that allows direct communication between nodes.
- Can access other nodes via HTTP requests.
  
This setup mimics how different services can interact with each other in a distributed system, laying the groundwork for more advanced use cases in later phases.

## **Setup and Usage Instructions**

### **1. Prerequisites**

Make sure you have the following installed:
- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

### **2. Cloning the Repository**

First, clone this repository to your local machine:

```bash
git clone https://github.com/MingInc/ming-network-simulation.git
cd ming-network-simulation
```

### **3. Docker Compose Setup**

The `docker-compose.yml` file defines three services (nodes) running in their own containers. Each service runs an Express server, and the containers are connected via a Docker network for communication.

Here is a breakdown of the services:
- **Node 1:** Runs on port 3000 (internally) and maps to port 3001 on the host machine.
- **Node 2:** Runs on port 3000 (internally) and maps to port 3002 on the host machine.
- **Node 3:** Runs on port 3000 (internally) and maps to port 3003 on the host machine.

#### **Docker Compose Commands**

- **Build and Start Containers:**

   To build the Docker images and start the containers, run:

   ```bash
   docker-compose up --build
   ```

   This will start three containers, each hosting an Express server.

- **Stopping Containers:**

   To stop the containers, run:

   ```bash
   docker-compose down
   ```

- **Access Containers:**

   You can access the running containers' terminal by using:

   ```bash
   docker exec -it <container_name> /bin/sh
   ```

   Example:

   ```bash
   docker exec -it ming-node1 /bin/sh
   ```

### **4. Node Communication**

Each node exposes an Express server accessible via HTTP from the host machine and other nodes in the network.

- **Access Express Servers from the Host Machine:**

  - **Node 1:** http://localhost:3001
  - **Node 2:** http://localhost:3002
  - **Node 3:** http://localhost:3003

- **Access Express Servers from Other Nodes:**

  Docker allows the containers to communicate directly using container names. Here’s how you can make HTTP requests between the containers:

  - **Node 1 to Node 2:**

    ```bash
    curl http://ming-node2:3000
    ```

  - **Node 2 to Node 3:**

    ```bash
    curl http://ming-node3:3000
    ```

  You can use this method to simulate communication between nodes in a distributed network.

### **5. File Structure**

```plaintext
.
├── docker-compose.yml    # Docker Compose configuration
├── node1                 # Contains Dockerfile and Express app for Node 1
│   ├── Dockerfile
│   └── server.js
├── node2                 # Contains Dockerfile and Express app for Node 2
│   ├── Dockerfile
│   └── server.js
└── node3                 # Contains Dockerfile and Express app for Node 3
    ├── Dockerfile
    └── server.js
```

Each node directory contains a `Dockerfile` for building the container and a `server.js` file for the Express server.

### **6. Express Server**

The `server.js` file contains a basic Express server configuration for each node:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node X!');
});

app.listen(port, () => {
  console.log(`Node X is running on port ${port}`);
});
```

Each node runs on port 3000 internally. You can modify the `server.js` files to simulate different services or interactions between nodes.

## **Next Milestone**

The current phase focuses on basic communication between nodes using HTTP requests. The next milestones will introduce more advanced features to simulate a realistic distributed network.

### **Phase 2: SSH Access and File Transfer Between Nodes**
- **Set up SSH servers** on each node to allow secure SSH access between containers.
- **File transfer** capabilities using `scp` between containers.
- **Expose ports** and configure proper networking for seamless file transfer and remote access.

### **Phase 3: Dynamic Load Balancing and Redundancy**
- Implement **dynamic load balancing** where nodes can distribute tasks among each other.
- Introduce **replication and redundancy** to handle node failures, ensuring high availability.

### **Phase 4: Decentralized Hosting for DApps**
- Set up a decentralized hosting environment using Docker containers as distributed node servers.
- Enable **blockchain-based data storage** and ensure decentralized control of hosted projects.

---

## **Conclusion**

This project demonstrates a foundational setup for simulating a distributed network using Docker. As we progress through the milestones, this environment will evolve to include more complex networking, redundancy, and decentralized hosting capabilities. Stay tuned!

## **Screenshots**
![Screenshot](https://raw.githubusercontent.com/MingInc/ming-network-simulation/refs/heads/main/screenshots/1.png)
