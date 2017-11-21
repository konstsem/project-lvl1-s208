install:

	npm install

start:

	npm run babel-node -- src/bin/brain-games.js

publish:

	npm publish

lint:

	npm run eslint index.js
	npm run eslint brain-games.js
