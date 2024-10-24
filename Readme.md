# Ming Distributed Network Simulation

This project simulates a distributed network with Docker containers acting as nodes. Each node runs an Express server, and tools like **Portainer** and **Uptime Kuma** are integrated for monitoring and management. The containers are networked using Docker's `bridge` driver, allowing internal communication between the nodes.

## Architecture

- **Node Containers** (`node1`, `node2`, `node3`): These containers simulate individual nodes in the distributed network. Each runs an Express server accessible via unique ports (3001, 3002, and 3003 respectively).
- **Portainer**: A web-based Docker management tool that helps in managing and monitoring containers, images, volumes, and networks. It also provides a GUI for Docker container administration.
- **Uptime Kuma**: An uptime monitoring tool to track the availability and uptime of the running services, integrated with the Docker socket for direct container monitoring.

## Prerequisites

Make sure the following are installed on your system:
- Docker
- Docker Compose

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/ming-distributed-network.git
   cd ming-distributed-network
   ```

2. **Build and run the containers**:

   Run the following command to spin up all the services:

   ```bash
   docker-compose up -d
   ```

3. **Access the Services**:

   - **Node1 Express Server**: [http://localhost:3001](http://localhost:3001)
   - **Node2 Express Server**: [http://localhost:3002](http://localhost:3002)
   - **Node3 Express Server**: [http://localhost:3003](http://localhost:3003)
   - **Portainer Dashboard**: [http://localhost:9000](http://localhost:9000)
   - **Uptime Kuma Dashboard**: [http://localhost:8080](http://localhost:8080)

4. **Monitor Uptime**:
   - Uptime Kuma will be available on port `8080`. You can set up monitors for your services from the dashboard.

5. **Manage Docker Containers**:
   - Access **Portainer** on port `9000` to manage and monitor all containers.

## Directory Structure

```bash
├── docker-compose.yml       # Docker Compose configuration
├── node1/                   # Express server for Node 1
│   ├── Dockerfile
│   └── server.js
├── node2/                   # Express server for Node 2
│   ├── Dockerfile
│   └── server.js
├── node3/                   # Express server for Node 3
│   ├── Dockerfile
│   └── server.js
├── uptime-kuma-data/         # Data for Uptime Kuma
└── README.md                # Project Documentation
```

## Docker Compose Configuration

- **Node Containers**:
  Each node runs an Express server and exposes it on a unique port. The nodes are networked together using Docker’s `bridge` network, allowing inter-node communication.

- **Portainer**:
  Portainer is a lightweight management UI that helps manage your Docker environments. It is exposed on port `9000` and provides an intuitive GUI for container management.

- **Uptime Kuma**:
  Uptime Kuma is an open-source monitoring tool that will check the uptime of services running in this distributed system. It is exposed on port `8080`.

## Next Milestone

- **Phase 2**: In the next phase, we will implement inter-node communication, allowing nodes to transfer files and send requests to each other using the internal network.
- **Security Enhancements**: Add secure access and authentication mechanisms for Portainer and Uptime Kuma.
- **Distributed Task Management**: Introduce a decentralized task management system where nodes can collaborate and share workloads.

## Troubleshooting

- If you encounter any issues, check the Docker logs for detailed error messages:

  ```bash
  docker-compose logs
  ```

- Ensure the required ports are not in use by other services before running the Docker containers.

---

This `README.md` should give clear instructions to users on how to set up and interact with the containers, monitor uptime, and manage the services via Portainer. The next milestone section outlines future goals to extend the functionality of the system.
## **Screenshots**
![Screenshot](https://raw.githubusercontent.com/MingInc/ming-network-simulation/refs/heads/main/screenshots/1.png)

![Screenshot2](https://raw.githubusercontent.com/MingInc/ming-network-simulation/refs/heads/main/screenshots/1.png)
