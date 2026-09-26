export default function DemandPlanner() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl text-aahara-brown">Demand Planner</h1>
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            ['Vegetarian', '24'],
            ['Vegan', '8'],
            ['Halal non-veg', '18'],
            ['Rice', '21'],
            ['Roti', '17'],
            ['Paratha', '12'],
            ['Chicken', '18'],
            ['Paneer', '16'],
            ['Dal', '31'],
            ['Chana', '14']
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-[#f1e6d5] bg-aahara-cream p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-aahara-gold">{label}</p>
              <p className="mt-3 text-3xl font-bold text-aahara-brown">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
