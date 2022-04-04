namespace Unihelp;
using MongoDB.Driver;
using System.Security.Authentication;
using MongoDB.Bson;

public class DbService
{
    private readonly IMongoCollection<Schemas.Product> _database;
    private readonly IMongoCollection<Schemas.Bundles> _bundles;
    public DbService()
    {
        string connectionString = @"mongodb://unihelptestdb:f06n6LComMdYyG31arG5t9mjs3Y9stMb21Xj9THvd2OuWogcwxqiqut1c2U8XycslQd40kMzp7NiDAs9GoSYAg==@unihelptestdb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@unihelptestdb@";
        MongoClientSettings settings = MongoClientSettings.FromUrl(
          new MongoUrl(connectionString)
        );
        settings.SslSettings =
          new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };
        var mongoClient = new MongoClient(settings);
        _database = mongoClient.GetDatabase("myDatabase").GetCollection<Schemas.Product>("Product");
        _bundles = mongoClient.GetDatabase("myDatabase").GetCollection<Schemas.Bundles>("Bundles");
    }
    public async Task<List<Schemas.Product>> GetProductsAsync()
    {
        return _database.Find(_ => true).ToList();
    }
    public async Task<Schemas.Product> GetProductAsync(string id) => await _database.Find(x => x.Id.Equals(id)).FirstOrDefaultAsync();
    public async Task CreateAsync(Schemas.Product product) => await _database.InsertOneAsync(product);

    public async Task UpdateAsync(string id, Schemas.Product product) => await _database.ReplaceOneAsync(x => x.Id.Equals(id), product);

    public async Task DeleteAsync(string id) => await _database.DeleteOneAsync(x => x.Id.Equals(id));

    public async Task<List<Schemas.Bundles>> GetBundlesAsync()
    {
        return _bundles.Find(_ => true).ToList();
    }
    public async Task<List<Schemas.Bundles>> GetBundlesAsync(string id) => await _bundles.Find(x => x.Id.Equals(id)).ToListAsync();
    
    public async Task CreateBundlesAsync(Schemas.Bundles bundle) => await _bundles.InsertOneAsync(bundle);



    public async Task UpdateBundlesAsync(string id, Schemas.Bundles bundle) => await _bundles.ReplaceOneAsync(x => x.Id.Equals(id) , bundle);
    public async Task DeleteBundlesAsync(string id) => await _bundles.DeleteOneAsync(x => x.Id.Equals(id));
    }

