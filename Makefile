install:
	-cp -an .env.example .env
	-cp -an ./src/.env.example ./src/.env
	docker-compose run --rm composer install
	docker-compose -f docker-compose.yml -f docker-compose.local.yml run --rm php-cli php artisan key:generate
	docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d mysql; sleep 10
	docker-compose -f docker-compose.yml -f docker-compose.local.yml run --rm php-cli php artisan migrate --seed
	docker-compose -f docker-compose.yml -f docker-compose.local.yml down
	docker-compose run front yarn install
.PHONY: install

front-install:
	docker-compose run front yarn install
.PHONY: front-install

start:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d nginx php-fpm mysql front
.PHONY: start

status:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml ps
.PHONY: status

stop:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml stop
.PHONY: stop

down:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml down
.PHONY: down

db-migrate:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml run --rm php-cli php artisan migrate
.PHONY: db-migrate

db-rollback:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml run --rm php-cli php artisan migrate:rollback
.PHONY: db-rollback

db-reset:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml run --rm php-cli php artisan migrate:reset
.PHONY: db-reset

phpunit:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d test-mysql & sleep 10
	docker-compose -f docker-compose.yml -f docker-compose.local.yml run --rm php-cli ./vendor/bin/phpunit
	docker-compose -f docker-compose.yml -f docker-compose.local.yml stop test-mysql
	docker-compose -f docker-compose.yml -f docker-compose.local.yml rm -f test-mysql
.PHONY: phpunit

enter-php-cli:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml run --rm php-cli /bin/sh
.PHONY: enter-php-cli

enter-mysql:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml up -d mysql
	docker-compose -f docker-compose.yml -f docker-compose.local.yml exec mysql /bin/bash
.PHONY: enter-mysql

build:
	docker-compose build
.PHONY: build
