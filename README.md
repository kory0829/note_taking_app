Video Presentation: https://www.loom.com/share/7c0e5c1087504360ad70e4cbf99b64c9?sid=57273863-739b-4c51-a1e8-398757494a98

**Notefy Application**

**Project Description**
Hi, Kory here! 👋

This is my final project. For this project, I opted for a simple yet functional and useful idea, which incorporates all that I have learned from the beginning of the bootcamp. 

The **Notefy Application** is a web-based app designed to create, edit, or delete personal notes. The app works seamlessly across mobile and desktop devices. It uses an API to fetch notes stored in a MongoDB database I set up. The database can be accessed securely with credentials and is publicly accessible via the `0.0.0.0/0` pathway. I aimed for simplicity and functionality in both the design and implementation.

Thank you for stopping by! 😊

Cheers! 👍


**Features**
**CRUD Operations:** 
  - Create, edit, delete, and view notes dynamically.
- **Responsive Design:** 
  - Ensures compatibility with devices of all screen sizes.
- **Smooth Transitions:** 
  - Animations enhance user experience when interacting with notes.
- **Modern UI Design:** 
  - Cards represent notes for a clean, intuitive interface.
- **Background Animation:** 
  - Firefly animation adds visual flair to the app.


**Technologies Used**
**Frontend**
- React.js: For building the user interface.
- CSS (App.css): For custom styles and animations.

**Backend**
- Node.js: For server-side logic.
- Express.js: To manage API requests.
- MongoDB: As the database for storing notes.

**Deployment**
- Firebase: Hosting the frontend.
- Heroku: Hosting the backend.

**Installation Steps**

**Prerequisites**
- Node.js installed on your system.
- MongoDB set up locally or an active MongoDB Atlas connection.

**Steps**
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/kory0829/notefy-app.git
cd notefy-app
   ```

2. **Set Up the Backend:**
   ```bash
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend` directory with the following variables:
     ```
     MONGO_URI=MONGO_URI=mongodb+srv://kory:kory082996@note-taking-app.ajldw.mongodb.net/?retryWrites=true&w=majority&appName=note-taking-app
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm node sever.js
     ```

3. **Set Up the Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```
   - Start the frontend development server:
     ```bash
     npm run dev
     ```

4. **Access the Application:**
   - Open your browser and navigate to `http://localhost:5173`.

---

## **Usage Instructions**
1. On the homepage, create a new note by entering a title and description in the form and clicking the "Add Note" button.
2. Edit a note using the "Edit" button on a card.
3. Delete a note using the "Delete" button on a card.
4. View all notes displayed as cards, with new notes appearing at the top left corner.

---

**Future Features**
- **User Authentication:** 
  - Add sign-up/sign-in options using Firebase Authentication to enable user profiles and save preferences.
- **Spotify Integration:** 
  - Include a Spotify sign-in option so users can listen to their playlists while using the app. 
  - Currently, I ran into issues obtaining the Spotify API Key, but it's a work in progress.

---

**API Documentation**

**Base URL**
`https://your-backend-url.com/api`

**Endpoints**
1. **Create a Note**
   - **POST** `/notes`
   - **Body:**
     ```json
     {
       "title": "Sample Title",
       "body": "Sample note content.",
       "category": "Sample category"
     }
     ```
   - **Response:** Returns the created note.

2. **Get All Notes**
   - **GET** `/notes`
   - **Response:** Returns a list of notes.

3. **Update a Note**
   - **PUT** `/notes/:id`
   - **Body:**
     ```json
     {
       "title": "Updated Title",
       "body": "Updated content.",
       "category: Updated category."
     }
     ```
   - **Response:** Returns the updated note.

4. **Delete a Note**
   - **DELETE** `/notes/:id`
   - **Response:** Success message or status code.

---

## **Screenshots**

![image](https://github.com/user-attachments/assets/04815910-3793-44b7-86b5-22a30d8a37e5)
![image](https://github.com/user-attachments/assets/a14f9b7d-bc79-42ad-8222-59bfc6e2f23d)
![image](https://github.com/user-attachments/assets/6dbf9e09-989a-4d27-8fb8-48c85ebc34c2)
![image](https://github.com/user-attachments/assets/f5857202-3614-4281-b41c-d68a3c7b4b88)
![image](https://github.com/user-attachments/assets/3ded04ee-2aaa-4bfc-af83-13c330703289)
![image](https://github.com/user-attachments/assets/e4c47efe-8e2f-4421-8fb0-9b6034c41766)
![image](https://github.com/user-attachments/assets/e7dc4099-d9bb-405e-936b-4af936ca76dc)


---

