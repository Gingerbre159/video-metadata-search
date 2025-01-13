
# **Video Metadata Search Application**

A simple full-stack web application for storing and searching video metadata. The backend is built with **Spring Boot**, the frontend with **React**, and data is stored in an in-memory **H2 database**. The application demonstrates CRUD operations, RESTful API design, and dynamic UI integration.

---

## **Features**

### **Backend**
- Built with **Java Spring Boot**.
- RESTful APIs for:
    - Adding video metadata.
    - Searching for videos by title or tags.
- Uses **Spring Data JPA** for database interactions.
- **H2 Database** for lightweight, in-memory storage.

### **Frontend**
- Built with **React**.
- Components for:
    - Adding video metadata through a form.
    - Searching metadata by title or tags.
    - Displaying search results in a dynamic table.
- API integration using **Axios**.

### **Additional Tools**
- **Postman** for bulk data insertion and API testing.

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- **Java 17+**
- **Maven**
- **Node.js** and **npm**

---

### **Setup Instructions**

#### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/video-metadata-search.git
cd video-metadata-search
```

#### **2. Backend Setup**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
3. Verify the backend is running by visiting:
   ```
   http://localhost:8080/api/videos
   ```

#### **3. Frontend Setup**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
4. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## **API Endpoints**

### **1. Add Video Metadata**
- **Method**: `POST`
- **URL**: `/api/videos`
- **Request Body**:
  ```json
  {
      "title": "Example Video",
      "description": "Example description",
      "tags": "example,video",
      "timestamp": "2025-01-01T10:00:00"
  }
  ```
- **Response**: The created video metadata.

### **2. Search for Videos**
- **Method**: `GET`
- **URL**: `/api/videos?query={searchTerm}`
- **Response**: A list of videos matching the search term in the title or tags.

---

## **Bulk Data Insertion with Postman**

You can use **Postman** to inject multiple video records into the backend:
1. Create a `POST` request to:
   ```
   http://localhost:8080/api/videos
   ```
2. Use a pre-request script in Postman to loop through an array of metadata objects.

---

## **Project Structure**

```
video-metadata-search/
├── backend/                 # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/video-metadata-search/ # Backend code
│   │   │   └── resources/    # Configuration files (application.properties)
│   ├── pom.xml               # Maven dependencies
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── App.js            # Main React app
│   ├── package.json          # npm dependencies
└── README.md
```

---

## **Design Decisions**

1. **Backend**:
    - Chose **Spring Boot** for its ease of creating RESTful APIs and integration with JPA.
    - Used an **H2 database** for fast, in-memory prototyping.

2. **Frontend**:
    - Built with **React** for dynamic UI updates.
    - Used **Axios** for handling API calls.

3. **Search Functionality**:
    - Designed the backend to support case-insensitive searches by title or tags.
    - Used a simple string-based tag system for rapid implementation (can be extended to relational tables later).

4. **CORS Handling**:
    - Configured the backend to allow cross-origin requests from `http://localhost:3000`.

---

## **Future Improvements**
- Replace the H2 database with a persistent database (e.g., PostgreSQL).
- Enhance the tag system with a relational structure for more advanced querying.
- Add user authentication for secure access.
- Deploy the application to a cloud platform (e.g., AWS, Heroku).
