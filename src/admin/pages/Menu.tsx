export default function MenuAdmin() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl text-aahara-brown">Menu</h1>
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Dal Tadka', 'Vegetarian', '₩6,500', 'Enabled'],
            ['Halal Chicken Curry', 'Halal', '₩8,800', 'Enabled'],
            ['Chana Masala', 'Vegetarian', '₩7,200', 'Enabled'],
            ['Paneer Curry', 'Vegetarian', '₩8,000', 'Enabled'],
            ['Vegetable Biryani', 'Vegetarian', '₩8,200', 'Enabled']
          ].map(([dish, diet, price, status]) => (
            <div key={dish} className="rounded-2xl border border-[#f1e6d5] bg-aahara-cream p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-2xl text-aahara-brown">{dish}</h3>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-aahara-gold">{status}</span>
              </div>
              <p className="mt-2 text-sm text-aahara-brown/80">Diet: {diet}</p>
              <p className="mt-2 text-sm text-aahara-brown/80">Price: {price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
