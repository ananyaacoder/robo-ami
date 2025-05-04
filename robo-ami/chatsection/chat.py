from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('chat.html')  # Serve the chat UI

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')

    # Simple mock response
    response = f"Roboami received: '{user_message}'"
    return jsonify({'reply': response})

if __name__ == '__main__':
    app.run(debug=True)

