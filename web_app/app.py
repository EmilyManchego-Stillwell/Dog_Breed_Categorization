from flask import Flask, flash, request, redirect, url_for, send_from_directory, render_template
import os
import urllib.request
from werkzeug.utils import secure_filename

#################################################
# App Setup
#################################################   

app = Flask(__name__)
 
app.secret_key = os.urandom(12).hex()
app.config['UPLOAD_FOLDER'] = 'uploads/'
 
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
 
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

#################################################
# Database Setup
#################################################     

# code to connect to SQLITE file will go here

#################################################
# ML Model Import
#################################################     

# import of ML model here

#################################################
# Flask Routes
#################################################

@app.route('/', methods=['GET', 'POST'])
def upload_image():
    if request.method == "POST":
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        pet = request.form['pet_name']
        if file.filename == '':
            flash('No image selected for uploading')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return render_template('index.html', filename=filename, pet=pet)
        else:
            flash('Allowed image types are - png, jpg, jpeg, gif')
            return redirect(request.url)
    else:
        return render_template('index.html')

@app.route('/display/<filename>')
def display_image(filename):
    #print('display_image filename: ' + filename)
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename=filename)

if __name__ == "__main__":
    app.run(debug=True)