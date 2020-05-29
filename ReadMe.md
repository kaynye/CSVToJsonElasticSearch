# ElasticSearch

TP elastic conteneant un script de conversion CSV to JSON, le JSON générer est directement integrable sur elasticSearch.
## Installation

Script node JS installer les package nécessaire inscrit dans la package.json

```bash
npm install 
```

## Usage

```javascript
 //mettre le nom de votre index ici
 let index={"index":{"_index":"groupe_9","_id":0}} //line 15

```
```bash
node parse.js
```

Un fichier json est généré et peut directement interger sur elasticSearch grace a la commande

```bash
curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/groupe_9/_bulk?pretty' --data-binary @data.json
```

## License
[MIT](https://choosealicense.com/licenses/mit/)