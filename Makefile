
up:
	docker-compose up

down:
	docker-compose down

install:
	docker-compose run front yarn install

build:
	docker-compose build
	make install
