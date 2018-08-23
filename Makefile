install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

brain-games:
	npx babel-node -- src/bin/brain-games.js

brain-even:
	npx babel-node -- src/bin/brain-even.js

brain-calc:
	npx babel-node -- src/bin/brain-calc.js

lint:
	npx eslint .

publish:
	npm publish