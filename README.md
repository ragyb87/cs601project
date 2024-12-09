
# **Profile of Ragy Basilious**

## **Description**
This is a professional profile website for **Ragy Basilious**, showcasing his career, expertise, and accomplishments. The website includes details about his professional journey, portfolio of projects, photo gallery, and a contact form for collaboration inquiries. For fun and engagement, it also features an interactive game called **"Know Me Challenge"** to test how well visitors know Ragy.

## **Features**
- **About Me**: A detailed overview of Ragy's professional journey and personal background.
- **Portfolio**: Showcase of key projects with descriptions and images.
- **Photo Gallery**: A collection of photos in a lightbox view.
- **Contact Form**: A fully validated form for visitors to reach out.
- **Know Me Challenge**: A fun, interactive drag-and-drop game to sort statements as "True" or "False."

## **Technologies Used**
- **React**: Frontend framework for building the user interface.
- **HTML**: For structuring the web pages.
- **CSS**: For styling and responsive design.
- **JavaScript (ES6+)**: For dynamic functionality.
- **@hello-pangea/dnd**: For drag-and-drop interactions.
- **JSON**: For storing and fetching dynamic data.

## **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ragy-basilious-profile.git
   cd ragy-basilious-profile
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## **Project Structure**
```
CS601-PROJECT/
├── build/
├── node_modules/
├── public/
│   ├── assets/
│   ├── data/
│   │   ├── photos.json
│   │   ├── projects.json
│   │   └── questions.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── FooterInclude.js
│   ├── pages/
│   │   ├── AboutPage.js
│   │   ├── ChallengePage.js
│   │   ├── ContactPage.js
│   │   ├── GalleryPage.js
│   │   ├── HomePage.js
│   │   └── PortfolioPage.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## **Usage**
1. **Navigate to the website**:
   - **Home**: Provides an overview of Ragy Basilious.
   - **About Me**: Shares Ragy's personal and professional background.
   - **Portfolio**: Highlights Ragy's key projects with descriptions and visuals.
   - **Photo Gallery**: Displays photos with an interactive lightbox view.
   - **Contact**: Allows visitors to submit collaboration or inquiry requests via a form.
   - **Know Me Challenge**: A fun game where visitors sort statements about Ragy as "True" or "False."

2. **Interact with the sections**:
   - Drag questions into the correct containers in the "Know Me Challenge."
   - Explore the portfolio and photo gallery.

## **Customizing JSON Data**
To update the website content, modify the corresponding JSON files in the `public/data/` directory:

- **questions.json**:
  ```json
  [
    { "id": 1, "text": "Example question.", "isTrue": true }
  ]
  ```

- **projects.json**:
  ```json
  [
    { "id": 1, "title": "Project Title", "description": "Project details", "image": "/assets/project1.png" }
  ]
  ```

- **photos.json**:
  ```json
  [
    { "id": 1, "src": "/assets/photo1.jpg", "alt": "Photo description" }
  ]
  ```

## **Responsive Design**
The website is fully responsive, ensuring it works seamlessly across:
- Desktops
- Tablets
- Mobile devices

## **Contributing**
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## **License**
This project is licensed under the [MIT License](LICENSE).
