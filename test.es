
// 1. Création de l'index "livres" avec Mapping :
PUT http://localhost:9200/livres
{
  "mappings": {
    "properties": {
      "titre":     { "type": "text" },
      "auteur":    { "type": "text" },
      "pages":     { "type": "long" },
      "resume":    { "type": "text" }
    }
  }
}

// 2. Création d'un livre :
PUT http://localhost:9200/livres/_doc/1
{
  "titre": "Le Nom du Vent",
  "auteur": "Patrick Rothfuss",
  "pages": 662,
  "resume": "Kvothe, personnage à la destinée légendaire, raconte son histoire..."
}

// 3. Lecture d'un livre :
GET http://localhost:9200/livres/_doc/1

// 4. Mise à jour d'un livre :
POST http://localhost:9200/livres/_update/1
{
  "doc": {
    "pages": 700
  }
}

DELETE http://localhost:9200/livres/_doc/1
