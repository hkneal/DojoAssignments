import requests

r = requests.get('https://api.github.com/events')

print "Request Response: ", r
print "Request URL: ", r.url
print "Request Content: ", r.text
