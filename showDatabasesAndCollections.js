
const connection = new Mongo();
const db = connection.getDB();

const databases = db.adminCommand({ listDatabases: 1 });
print("\nDostępne bazy danych:");
databases.databases.forEach(database => {
    print(" - " + database.name);
});

print("\nKolekcje w poszczególnych bazach danych:");
databases.databases.forEach(database => {
    const currentDB = connection.getDB(database.name);
    const collections = currentDB.getCollectionNames();
    print("Baza danych: " + database.name);
    collections.forEach(collection => {
        print("  - " + collection);
    });
    print("\n");
});
