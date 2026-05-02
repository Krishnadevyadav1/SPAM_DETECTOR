# Spam Detector

Spam Detector is a machine learning web application that classifies text messages as `SPAM` or `NOT SPAM`. The project now uses a React frontend and a Flask API backed by a trained `scikit-learn` model.

## Stack

- React + Vite frontend in `client/`
- Flask prediction API in `pyfiles/`
- Trained `scikit-learn` model in `pyfiles/model.pkl`

## Project Structure

```text
spam/
|-- client/
|   |-- src/
|   |-- index.html
|   |-- package.json
|   |-- vite.config.js
|-- pyfiles/
|   |-- app.py
|   |-- model.pkl
|   |-- requirements.txt
|-- Notebook/
|   |-- spam classifier1.ipynb
```

## How It Works

1. The React app runs on `http://localhost:5173`.
2. The Flask API runs on `http://localhost:5000`.
3. React sends the entered message to `POST /predict`.
4. Flask loads the model and returns a JSON response with the prediction result.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Krishnadevyadav1/SPAM_DETECTOR.git
cd SPAM_DETECTOR
```

### 2. Install frontend dependencies

```powershell
cd client
npm install
```

### 3. Create and activate a Python virtual environment

```powershell
python -m venv .venv
.venv\Scripts\activate
```

### 4. Install backend dependencies

```powershell
pip install -r pyfiles/requirements.txt
```

## Run the Project

Use two terminals.

### Terminal 1: Start the Flask API

```powershell
cd pyfiles
python app.py
```

### Terminal 2: Start the React app

```powershell
cd client
npm run dev
```

Then open `http://localhost:5173`.

## API Response

`POST /predict`

Request body:

```json
{
  "message": "Free entry in 2 a wkly comp"
}
```

Response body:

```json
{
  "message": "Free entry in 2 a wkly comp",
  "result": "SPAM"
}
```

## Notes

- Run the Flask app from inside `pyfiles/` so `model.pkl` is found correctly.

## Author

Krishnadev Yadav
