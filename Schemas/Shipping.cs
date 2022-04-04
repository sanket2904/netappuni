namespace Unihelp.Schemas
{
    public class Shipping
    {
        public List<Schemas.Product> ItemOrdered { get; set; }
        public bool Ordered { get; set; } = false;
        public bool ReadyToShip { get; set; } = false;
        public bool InTransit { get; set; } = false;
        public bool OutForDelivery { get; set; } = false;
        public bool Delivered { get; set; } = false;

        public List<Courier>? Information {get; set; } = null;
    }
}
