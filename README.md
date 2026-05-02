# Spam Detector

Spam Detector is a machine learning web application that classifies text messages as `SPAM` or `NOT SPAM`. It uses a React + Vite frontend and a Flask backend powered by a trained `scikit-learn` model.

## Stack

- React + Vite frontend in `frontend/`
- Flask prediction API in `backend/`
- Trained model in `backend/model.pkl`

## Project Structure

```text
SPAM_DETECTOR/
|-- frontend/
|   |-- src/
|   |-- index.html
|   |-- package.json
|   |-- vite.config.js
|-- backend/
|   |-- app.py
|   |-- model.pkl
|   |-- requirements.txt
|-- Notebook/
|-- spam.tsv
```

## Run Locally

Use two terminals.

### Backend

```powershell
cd backend
python -m venv ..\.venv
..\.venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

The Flask API runs at `http://localhost:5000`.

### Frontend

```powershell
cd frontend
npm install
npm run dev
```

The React app runs at `http://localhost:5173`.

## API

`POST /predict`

Request:

```json
{
  "message": "Free entry in 2 a wkly comp"
}
```

Response:

```json
{
  "message": "Free entry in 2 a wkly comp",
  "result": "SPAM"
}
```

## Deployment

### Frontend on Vercel

Set the Vercel root directory to:

```text
frontend
```

Use:

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

Add this Vercel environment variable after deploying the backend:

```text
VITE_API_URL=https://your-render-backend-url.onrender.com/predict
```

### Backend on Render

Set the Render root directory to:

```text
backend
```

Use:

```text
Build Command: pip install -r requirements.txt
Start Command: python app.py
```

Add this Render environment variable:

```text
FRONTEND_ORIGIN=https://your-vercel-frontend-url.vercel.app
```

## Notes

- Run the Flask app from inside `backend/` so `model.pkl` is found correctly.
- The frontend falls back to `http://localhost:5000/predict` when `VITE_API_URL` is not set.

## Author

Krishnadev Yadav
