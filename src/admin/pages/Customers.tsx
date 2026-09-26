export default function Customers() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl text-aahara-brown">Customers</h1>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['Ayesha', 'Indian', 'Halal', 'Medium spice'],
          ['Rizwan', 'Pakistani', 'Halal', 'Mild'],
          ['Pooja', 'Nepali', 'Vegetarian', 'Medium'],
          ['Omar', 'Bangladeshi', 'No beef', 'Spicy']
        ].map(([name, culture, diet, spice]) => (
          <div key={name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
            <h2 className="text-3xl text-aahara-brown">{name}</h2>
            <div className="mt-4 space-y-2 text-sm text-aahara-brown/80">
              <div><strong>Food culture:</strong> {culture}</div>
              <div><strong>Diet:</strong> {diet}</div>
              <div><strong>Spice:</strong> {spice}</div>
              <div><strong>Subscription:</strong> Weekly</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
