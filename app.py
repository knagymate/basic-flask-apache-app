from flask import Flask, render_template

app = Flask(__name__)


@app.route("/wedding")
def home():
    return render_template("wedding_form.html")


if __name__ == "__main__":
    app.run()
