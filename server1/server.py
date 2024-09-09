from flask import Flask, jsonify, request, render_template
import util

app = Flask(__name__)


# Serve the main HTML page
@app.route('/')
def index():
    return render_template('app.html')


# Serve the classify_image route
@app.route('/classify_image', methods=['POST'])
def classify_image():
    image_data = request.form['image_data']

    # Call the util function to classify the image
    response = jsonify(util.classify_image(image_data))

    # Allow cross-origin requests
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response


if __name__ == "__main__":
    print("Starting Python Flask Server For Sports Celebrity Image Classification")
    util.load_saved_artifacts()
    app.run(port=5000)
