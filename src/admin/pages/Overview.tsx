export default function Overview() {
  return (
    <div className="space-y-8">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {[
          ['TODAY&apos;S ORDERS', '42'],
          ['VEGETARIAN', '24'],
          ['HALAL NON-VEG', '18'],
          ['DELIVERY', '36'],
          ['PICKUP', '6']
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-aahara-gold">{label}</p>
            <p className="mt-2 text-4xl font-bold text-aahara-brown">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
          <h2 className="text-3xl text-aahara-brown">TODAY&apos;S KITCHEN</h2>
          <div className="mt-5 space-y-3 text-sm text-aahara-brown/80">
            {[
              ['Dal Tadka', '31 portions'],
              ['Chicken Curry', '18'],
              ['Paneer', '16'],
              ['Rice', '42'],
              ['Roti', '56']
            ].map(([item, amount]) => (
              <div key={item} className="flex items-center justify-between border-b border-[#f0e6d7] pb-2">
                <span>{item}</span>
                <span>{amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
          <h2 className="text-3xl text-aahara-brown">CUSTOMER SIGNALS</h2>
          <div className="mt-5 space-y-4 text-sm text-aahara-brown/80">
            <div><strong>Most requested:</strong> Dal Tadka</div>
            <div><strong>Most liked:</strong> Vegetable Biryani</div>
            <div><strong>Most disliked:</strong> Too spicy</div>
            <div><strong>New feedback:</strong> More sweets at pick-up</div>
          </div>
        </div>
      </div>
    </div>
  )
}
