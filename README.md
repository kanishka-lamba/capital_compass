# 📊 Capital Compass UI

Capital Compass UI is the front-end application for Capital Compass — a tool designed to extract and summarize insights from PDF-based investment memos using AI.

## ⚙️ Installation

```bash
git clone https://github.com/kanishka-lamba/capital-compass.git
cd capital-compass-ui
npm install
```

## 🧪 Running the App Locally

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to view the app.

## 🔌 API Integration

This UI connects with the backend via a POST request to the `/process_pdf/` endpoint:

It expects a PDF file and receives a structured JSON response with summarized insights.

## 🎥 MVP Demo

Watch the MVP video walkthrough here:  
👉 [Loom Video Demo](https://www.loom.com/share/4a9ffcca70204ea7974cf168cb1e4fa2)

## 🧠 Backend API Setup (Optional for Full Functionality)

To receive real AI-powered summaries, clone the backend repo and provide your own OpenAI API key:

```bash
git clone https://github.com/kanishka-lamba/capital_compass_backend
cd capital-compass-backend
```

Set your API key in the backend’s `.env` file:

```env
OPENAI_API_KEY=your_openai_key_here
```

Then run the FastAPI server:

```bash
uvicorn main:app --reload
```

Make sure the backend is running at `http://localhost:8000`.

---

## 📦 Building for Production

```bash
npm run build
```

## ✅ Code Quality

```bash
npm run lint       # Lint the codebase
npm run format     # Format the code (if configured)
```

## 👤 Author

Developed by Kanishka Lamba

GitHub: [https://github.com/kanishka-lamba](https://github.com/kanishka-lamba)

LinkedIn: [https://www.linkedin.com/in/kanishka-lamba-811713134/](https://www.linkedin.com/in/kanishka-lamba-811713134/)
