export default function Checkout() {
  return (
    <div className="section-wrap py-12">
      <h1 className="text-5xl text-aahara-brown md:text-6xl">Checkout</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="card-soft p-6">
            <h2 className="text-3xl text-aahara-brown">Order summary</h2>
            <div className="mt-4 space-y-3 text-sm text-aahara-brown/80">
              <div className="flex justify-between"><span>Tiffin</span><span>Halal Chicken Curry</span></div>
              <div className="flex justify-between"><span>Customization</span><span>Rice · Hearty · Extra Roti</span></div>
              <div className="flex justify-between"><span>Extras</span><span>Sweet</span></div>
              <div className="flex justify-between"><span>Quantity</span><span>1</span></div>
              <div className="flex justify-between"><span>Delivery / Pickup</span><span>Delivery</span></div>
              <div className="flex justify-between"><span>Location</span><span>Kyungsung University</span></div>
              <div className="flex justify-between"><span>Time</span><span>6:30 PM</span></div>
            </div>
          </div>

          <div className="card-soft p-6">
            <h2 className="text-3xl text-aahara-brown">Payment</h2>
            <div className="mt-4 rounded-xl border border-[#e5d7bb] bg-aahara-cream p-4 text-sm text-aahara-brown/80">
              Simulated payment flow for prototype. Real payment integration can be connected later.
            </div>
          </div>
        </div>

        <div className="card-soft p-6">
          <h3 className="text-3xl text-aahara-brown">Total</h3>
          <div className="mt-4 space-y-3 text-sm text-aahara-brown/80">
            <div className="flex justify-between"><span>Subtotal</span><span>₩12,800</span></div>
            <div className="flex justify-between"><span>Delivery fee</span><span>₩2,000</span></div>
            <div className="flex justify-between border-t border-[#eadfc3] pt-3 text-lg font-bold text-aahara-brown"><span>Total</span><span>₩14,800</span></div>
          </div>

          <button className="mt-6 w-full btn-primary">Place Order</button>
        </div>
      </div>
    </div>
  )
}
