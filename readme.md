# Grails_practice

curl -i  localhost:8080/products

curl -i -H "Content-Type:application/json" -X POST localhost:8080/products -d '{"name":"Orange","price":2.0}'

curl -i -H "Content-Type:application/json" -X PUT localhost:8080/products/1 -d '{"price":3.0}'

curl -i -X DELETE localhost:8080/products/1

mongod --auth -dbpath /Users/yun/data/db

mongosh "mongodb://MyAdmin:1353@localhost:27017/admin?authSource=admin"
