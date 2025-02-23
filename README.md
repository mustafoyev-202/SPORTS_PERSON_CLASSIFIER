# Sports Person Classifier 🏃‍♂️

A modern web application that uses machine learning to classify images of sports personalities. Currently supports
classification of 5 players: Eldor Shomurodov, Erling Haaland, Abbos Fayzullayev, Harry Kane, and Lionel Messi.

<p align="center">
  <img src="https://github.com/mustafoyev-202/Sports_Person_Classifier/blob/main/proof.png?raw=true" width="800" alt="Sports Person Classifier Demo"/>
</p>

## ✨ Features

- **Real-time Classification**: Upload an image and get instant predictions
- **Multiple Face Detection**: Can detect and classify multiple faces in a single image
- **Probability Scores**: Provides confidence scores for each prediction
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User-friendly Interface**: Clean and intuitive UI with drag-and-drop functionality

## 🛠️ Technologies Used

- **Frontend**:
    - HTML5
    - CSS3
    - JavaScript
    - Bootstrap 5
    - Dropzone.js

- **Backend**:
    - Python
    - Flask
    - OpenCV
    - scikit-learn
    - numpy
    - wavelet transforms

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/mustafoyev-202/Sports_Person_Classifier
cd Sports_Person_Classifier
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
```

3. Install the required packages:

```bash
pip install -r requirements.txt
```

4. Start the Flask server:

```bash
python server.py
```

5. Open `index.html` in your browser or serve it using a local server.

## 📁 Project Structure

```
sports-person-classifier/
│
├── model/
│   ├── dataset/
│   ├── opencv/
│   ├── test_images/
│   ├── class_dictionary.json
│   ├── saved_model.pkl
│   └── sport_person_classifier_model.ipynb
│
├── server/
│   ├── artifacts/
│   ├── opencv/
│   ├── test_images/
│   ├── server.py
│   ├── util.py
│   └── wavelet.py
│
├── UI/
├── .gitignore
├── LICENSE
├── README.md
└── requirements.txt
```

## 💡 How It Works

1. User uploads an image through the web interface
2. The image is sent to the Flask backend
3. OpenCV detects faces and eyes in the image
4. The image is preprocessed using wavelet transforms
5. The trained model predicts the player's identity
6. Results are displayed with confidence scores

## 🔧 Model Training

The classifier was trained on a dataset of images using:

- Wavelet transforms for feature extraction
- OpenCV for face detection
- scikit-learn for classification
- Image preprocessing techniques

## 📊 Performance

The model achieves:

- Accuracy: ~90% on test set
- Real-time classification (< 2 seconds)
- Robust face detection

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to
discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenCV for their amazing computer vision library
- scikit-learn team for their machine learning tools
- Bootstrap team for their CSS framework
- All contributors who helped in building this project

## 📧 Contact

For any queries or suggestions, please reach out to:

- Email: baxtiyormustafoyev2006@gmail.com
- LinkedIn: [Baxtiyor Mustafoyev](https://www.linkedin.com/in/baxtiyor-mustafoyev/)

---

Made by Baxtiyor Mustafoyev