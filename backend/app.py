from flask import Flask, request, jsonify
from PIL import Image
import tensorflow as tf
import numpy as np
import io

app = Flask(__name__)

# Load the model once when the app starts
model = tf.keras.models.load_model('trained_model.keras')

def predict_image(image):
    # Preprocess the image to match the model's expected input
    image = image.resize((64, 64))  # Resize image to model input size
    input_arr = tf.keras.preprocessing.image.img_to_array(image)
    input_arr = np.array([input_arr])  # Convert single image to batch
    input_arr = input_arr / 255.0  # Normalize if required by your model
    prediction = model.predict(input_arr)
    result_index = np.argmax(prediction)
    return int(result_index)

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']
    image = Image.open(file.stream)  # Open the image file from the request
    result_index = predict_image(image)  # Get the prediction result

    return jsonify({"predicted_class": result_index})

if __name__ == '__main__':
    app.run(debug=True)
