from flask import Flask, request
import pickle

app = Flask(__name__)

model = pickle.load(open("model.pkl", "rb"))



@app.route('/predict', methods=['POST'])
def predict():
    message = request.form.get("message")
    if message is None and request.is_json:
        payload = request.get_json(silent=True) or {}
        message = payload.get("message")
    if not message:
        return "message is required", 400

    prediction = model.predict([message])[0]
  
    result = "SPAM" if prediction == "spam" else "NOT SPAM"
    return result
        
  

if __name__ == '__main__':
    app.run(port=5000)
