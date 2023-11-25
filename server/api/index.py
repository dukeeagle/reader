from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    return "Hello, world!!!"

@app.route('/narrate', methods=['POST'])
def narrate():
    data = request.get_json()

    openAIKey = data.get('openAIKey')
    elevenLabsKey = data.get('elevenLabsKey')
    webpageUrl = data.get('webpageUrl')

    # Now you can use the parameters in your function
    # ...

    return jsonify({'status': 'success'})

if __name__ == '__main__':
    app.run(port=4200)