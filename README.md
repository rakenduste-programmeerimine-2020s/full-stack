## Lokaalne setup

- Navigeeri kausta `local-dev`
- Installi vajalikud dependency'd
```
docker-compose run --rm --no-deps --entrypoint yarn react-app install
docker-compose run --rm --no-deps node-service install
```
- Kui vaja kustuta vanad samanimelised konteinerid
```
docker rm react-app
```
- Seejärel käivita kõik teenused
```
docker-compose up -d
```
- Rakendused on kättesaadavad

App - http://localhost:8080/

Node service - http://localhost:3000/topics
