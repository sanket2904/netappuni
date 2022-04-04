using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
namespace Unihelp.Schemas
{
    public class Bundles
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; } 
        public int? Price { get; set; }
        public List<Product>? products { get; set; }
        public string[]? imageLink  { get; set; }   

    }
}
