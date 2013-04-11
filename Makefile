all: jshint test

jshint:
	jshint .

test:
	jasmine-headless-webkit -c

test.continuously:
	bundle exec guard start --clear --notify=false
