from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello Hiram!'

@app.route('/success')
def success():
    return render_template('success.html', name='Hiram')

app.run(debug=True)
