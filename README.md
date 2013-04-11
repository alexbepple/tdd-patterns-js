# What is this?

This serves for demonstrating the TDD patterns _Obvious Implementation, Fake it ’til you make it_ and _Triangulate._


# Start hacking

## Install core dependencies

    bundle install

If you are not on OS X, you are better off with

    bundle install --without osx

Install Qt.

+ On OS X, it's just `brew install qt`.
+ For other platforms, check installation instructions at <http://johnbintz.github.com/jasmine-headless-webkit/>.


## Install optional dependencies

    npm install -g jshint


## Start testing

    make test.continuously

