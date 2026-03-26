# Spam Detector

Spam Detector is a machine learning web application that classifies text messages as `SPAM` or `NOT SPAM`. It combines a Node.js and Express frontend for user interaction with a Flask API that loads a trained `scikit-learn` model and returns predictions in real time.

This project is designed to demonstrate how a trained ML model can be integrated into a full-stack application with a simple browser-based interface.

## Features
- A Node.js + Express frontend
- A Flask prediction API
- A trained `scikit-learn` model saved as `pyfiles/model.pkl`

Users enter a message in the web UI, and the app returns whether the message is `SPAM` or `NOT SPAM`.

## Project Structure

```text
spam/
|-- app.js
|-- package.json
|-- public/
|   |-- style.css
|-- views/
|   |-- index.ejs
|   |-- predict.ejs
|-- pyfiles/
|   |-- app.py
|   |-- model.pkl
|   |-- requirements.txt
|-- Notebook/
|   |-- spam classifier1.ipynb
```

## How It Works

1. The Express app runs on port `3000`.
2. The Flask app runs on port `5000`.
3. When a user submits a message in the browser, the Express server sends it to the Flask `/predict` endpoint.
4. The Flask app loads the trained model and predicts whether the message is spam.

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Krishnadevyadav1/SPAM_DETECTOR.git
cd SPAM_DETECTOR
```

### 2. Install Node.js dependencies

```bash
npm install
```

### 3. Create and activate a Python virtual environment

Windows:

```powershell
python -m venv .venv
.venv\Scripts\activate
```

### 4. Install Python dependencies

```bash
pip install -r pyfiles/requirements.txt
```

## Run the Project

You need two terminals.

### Terminal 1: Start the Flask API

```powershell
cd pyfiles
python app.py
```

The Flask service will run on `http://localhost:5000`.

### Terminal 2: Start the Express app

```powershell
npm start
```

If `npm start` is not available, run:

```powershell
node app.js
```

The frontend will run on `http://localhost:3000`.

## Usage

1. Open `http://localhost:3000`
2. Enter a message in the text box
3. Click `Check Message`
4. View the prediction result

## Model

The trained model is stored in:

```text
pyfiles/model.pkl
```

The training notebook is stored in:

```text
Notebook/spam classifier1.ipynb
```

## Notes

- Do not commit `node_modules/` or virtual environment folders.
- Run the Flask server from inside the `pyfiles` folder so `model.pkl` is found correctly.

## Author

Krishnadev Yadav
