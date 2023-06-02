migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hesewu4jw7oirap")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bl3neqsz",
    "name": "todoItem",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wfl3pgh13fybaej",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hesewu4jw7oirap")

  // remove
  collection.schema.removeField("bl3neqsz")

  return dao.saveCollection(collection)
})
