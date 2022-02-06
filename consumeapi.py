import requests

url = "http://104.238.110.124:5000/user/P/Yngrid"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

print(response.text.encode('utf8'))