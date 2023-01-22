from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/submit_form", methods=["POST"])
def handle_form():
    print(request.json)
    return "Form submitted!"


if __name__ == "__main__":
    app.run()
