namespace Unihelp.Schemas
{
    public class Order
    {
        public string id { get; set; } = "orderid_" + new DateTime().ToString("dd-mm-yy");
        public int price { get; set; }
        public int quantity { get; set; }
        public List<Product> Products { get; set; }
        public Shipping Status { get; set; }

        
    }
}
