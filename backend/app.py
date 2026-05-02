from flask import Flask, jsonify, request
import os
import pickle

app = Flask(__name__)

model = pickle.load(open("model.pkl", "rb"))
frontend_origin = os.environ.get("FRONTEND_ORIGIN", "http://localhost:5173")


@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = frontend_origin
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
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
