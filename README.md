```markdown
# DevDynamics-Assignment

This project is a simple Publisher-Subscriber notification system implemented with Node.js and Express.js. It allows subscribers to subscribe to topics, get notified about a topic, and unsubscribe from topics.

## Table of Contents

- [Installation]
- [Usage]
- [APIs]
  - [Subscribe]
  - [Notify]
  - [Unsubscribe]
- [Postman Collection]

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```sh
   git clone (https://github.com/your-username/DevDynamics-Assignment.git)
   cd DevDynamics-Assignment
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node server.js
   ```

## Usage

Get the demonstration of this server by using the following command:
```sh
node driver.js
```

## APIs

### Subscribe
- **URL**: `/api/topics/subscribe`
- **Method**: POST
- **Body**:
  ```json
  {
    "topicId": "topic1",
    "subscriberId": "subscriber1"
  }
  ```
- **Description**: This endpoint allows a subscriber to subscribe to a topic.

### Notify
- **URL**: `/api/topics/notify`
- **Method**: POST
- **Body**:
  ```json
  {
    "topicId": "topic1"
  }
  ```
- **Description**: This endpoint notifies all subscribers who are subscribed to a particular topic.

### Unsubscribe
- **URL**: `/api/topics/unsubscribe`
- **Method**: POST
- **Body**:
  ```json
  {
    "topicId": "topic1",
    "subscriberId": "subscriber1"
  }
  ```
- **Description**: This endpoint allows a subscriber to unsubscribe from a topic.

## Postman Collection

Use this on Postman:
[Postman Collection](https://dark-satellite-888582.postman.co/workspace/Test-Workspace~fe26cff6-ff75-4335-b3e9-9e92209bbac4/collection/36253756-afa42b59-40ff-4f15-8b9e-ea84cc178ec8?action=share&creator=36253756)
```
