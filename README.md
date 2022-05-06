# nestjs-clean-architecture

NestJSのDIコンテナを活用したクリーンアーキテクチャの構成のサンプル。

ライブラリ及びFWの栄枯衰退を加味して、構成のサンプルを提供するための最低限の依存関係を保つことを重視しています。  
ゆえ、ORMやHttp Clientなどのライブラリは導入していません。

## 環境構築

```bash
nodenv install {.node-versionの値}
npm install -g yarn
yarn install
```
