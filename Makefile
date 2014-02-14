SHELL := /bin/bash

test:
	@mocha -R spec test.js

hint:
	@jshint *.js *.json

# UglifyJS v2
min:
	@echo -n ';' > keysort.min.js; uglifyjs keysort.js -o keysort.min.js -c -m;

.PHONY: test hint min 