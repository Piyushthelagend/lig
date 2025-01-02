import json
import requests

class ChatBot:
    def __init__(self, 
                 model="meta-llama/Llama-3.3-70B-Instruct-Turbo",
                 modelType="chat",
                 mode="useOnes",
                 api_key="PeHl8ls6xGmIrMR4kjJSSbeBLFW635CH", 
                 base_url="https://api.deepinfra.com/v1/openai", 
                 history_file="chat_history.json",
                 save_history=False,
                 messages=None, 
                 systemMessages=None):
        
        # self.client = OpenAI(api_key=api_key, base_url=base_url)
        self.model = model
        self.modelType = modelType
        self.mode = mode
        self.history_file = history_file
        self.save_history = save_history
        self.history = []

        if systemMessages:
            self.history.append({"role": "system", "content": systemMessages})
        if messages:
            self.history.extend(messages)
        
    def send_message(self, message):
        URL = "https://api.deepinfra.com/v1/openai/chat/completions"
        self.history.append({"role": "user", "content": message})
        data = json.dumps({
            'model': self.model,
            'messages': self.history,
            'temperature': 0.7,
            'max_tokens': 2048,
            'stop': [],
            'stream': False
        }, separators=(',', ':'))
        # print(data)
        res = requests.post("https://api.deepinfra.com/v1/openai/chat/completions",data)
        print(res.json())
        reply = res.json()["choices"][0]["message"]["content"]
        if not self.mode == "chat":
            self.history.append({"role": "assistant", "content": reply})

        if self.save_history:
            self._save_history()  # Save history after each interaction
            print(reply)
        return reply

    def _save_history(self):
        with open(self.history_file, "w") as file:
            json.dump(self.history, file, indent=4)

    def _load_history(self):
        try:
            with open(self.history_file, "r") as file:
                return json.load(file)
        except FileNotFoundError:
            return [] 

