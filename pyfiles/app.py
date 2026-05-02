from flask import Flask, jsonify, request
import pickle

app = Flask(__name__)

model = pickle.load(open("model.pkl", "rb"))


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "http://localhost:5173"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type"
    response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
    return response


@app.route("/predict", methods=["OPTIONS"])
def predict_options():
    return ("", 204)


@app.route('/predict', methods=['POST'])
def predict():
    message = request.form.get("message")
    if message is None and request.is_json:
        payload = request.get_json(silent=True) or {}
        message = payload.get("message")
    if not message:
        return jsonify({"error": "message is required"}), 400

    prediction = model.predict([message])[0]

    result = "SPAM" if prediction == "spam" else "NOT SPAM"
    return jsonify({"message": message, "result": result})
        
  

if __name__ == '__main__':
    app.run(port=5000)
