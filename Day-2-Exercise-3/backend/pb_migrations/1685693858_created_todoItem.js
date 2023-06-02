migrate((db) => {
  const collection = new Collection({
    "id": "wfl3pgh13fybaej",
    "created": "2023-06-02 08:17:38.931Z",
    "updated": "2023-06-02 08:17:38.931Z",
    "name": "todoItem",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aby41lzn",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lfgog7un",
        "name": "completed",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wfl3pgh13fybaej");

  return dao.deleteCollection(collection);
})
