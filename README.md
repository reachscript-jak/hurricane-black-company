# Hurricane-Black-Company

## 必要なもの

* Docker

## 環境構築手順

### 開発環境の初期化

```
make install
```

### 開発環境(Dockerコンテナ)を起動

```
make start
```

### アクセス
- 以下のURLにアクセスし、画面が正常に表示されることの確認

[http://localhost:3002](http://localhost:3002)


## その他コマンド

### 開発環境(Dockerコンテナ)を停止

```
make stop
```

### 開発環境(Dockerコンテナ)を削除

```
make down
```

### 開発環境を閲覧(Laravel)

http://localhost:8080

にアクセスする。

### DBのマイグレーションを実行

```
make db-migrate
```

### DBのマイグレーションをロールバック

```
make db-rollback
```

### DBのマイグレーションをリセット

```
make db-reset
```

### PHPUnitを実行

```
make phpunit
```

### `php-cli` コンテナのコンソールを開く

```
make enter-php-cli
```

### `mysql` コンテナのコンソールを開く

```
make enter-mysql
```

### Dockerfileのビルド(Dockerfile変更時のみ)

```
make build
```
