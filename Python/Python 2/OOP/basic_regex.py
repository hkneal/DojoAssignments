import re
def get_matching_words(regex):
 words = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
 matches = []
 for word in words:
 	if re.search(regex,word):
 		matches.append(word)
 return matches


MYREGEX = re.compile(r'[v]')
myList = get_matching_words(MYREGEX)
print "1) All words that contain a 'v':"
for word in myList:
    print word
print " "

MYREGEX = re.compile(r'[s]{2}')
myList = get_matching_words(MYREGEX)
print "2) All words that contain a double-'s':"
for word in myList:
    print word
print " "

MYREGEX = re.compile(r'e$')
myList = get_matching_words(MYREGEX)
print "3) All words that end with an 'e':"
for word in myList:
    print word
print " "

MYREGEX = re.compile(r'[b].[b]')
myList = get_matching_words(MYREGEX)
print "4) All words contain a 'b', any character, then another 'b':"
for word in myList:
    print word
print " "

MYREGEX = re.compile(r'[b][a-zA-Z]{1}[b]')
myList = get_matching_words(MYREGEX)
print "5) All words contain a 'b', at least 1 character, then another 'b':"
for word in myList:
    print word
print " "

MYREGEX = re.compile(r'[b][a-zA-Z0].*[b]')
myList = get_matching_words(MYREGEX)
print "6) All words contain a 'b', any number of characters, then another 'b':"
for word in myList:
    print word
print " "

MYREGEX = re.compile(r'[a][b-df-hj-np-tv-z]*[e][b-df-hj-np-tv-z]*[i][b-df-hj-np-tv-z]*[o][b-df-hj-np-tv-z]*[u]')
myList = get_matching_words(MYREGEX)
print "7) All words that contain all five fouls in order:"
for word in myList:
    print word
print " "

MYREGEX = re.compile(r'^[aeilnorsux]+$')
myList = get_matching_words(MYREGEX)
print "8) All words that only use the letters in 'regular expression':"
for word in myList:
    print word
print " "

MYREGEX = re.compile(r'([a-z])\1')
myList = get_matching_words(MYREGEX)
print "9) All words that contain a double letter:"
for word in myList:
    print word
print " "
