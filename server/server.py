from flask import Flask, jsonify, request
import util
import base64
import os
from io import BytesIO
from PIL import Image
import numpy as np

app = Flask(__name__)


# Function to classify image
@app.route('/classify_image', methods=['POST'])
def classify_image():
    image_data = request.form['image_data']  # Get base64 image data

    # Strip the base64 header (e.g., 'data:image/jpeg;base64,') if present
    image_data = image_data.split(",")[1] if "," in image_data else image_data

    # Decode base64 image data
    image = Image.open(BytesIO(base64.b64decode(image_data)))

    # Convert the image to numpy array for the model
    image_np = np.array(image)

    # Pass the image to the model
    result = util.classify_image(image_np)

    # Return the classification result
    return jsonify(result)


if __name__ == "__main__":
    print("Starting Python Flask Server For Sports Celebrity Image Classification")
    util.load_saved_artifacts()  # Load necessary artifacts for classification
    app.run(port=5000)
