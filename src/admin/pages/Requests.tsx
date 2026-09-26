export default function RequestsAdmin() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl text-aahara-brown">Food Requests</h1>
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
        <div className="space-y-4 text-sm text-aahara-brown/80">
          {[
            ['Aloo Paratha', '14 requests', 'Students miss fresh parathas', 'Considering'],
            ['Rajma', '9 requests', 'Comfort meal with rice', 'Planned'],
            ['Kheer', '11 requests', 'Sweet request often on weekends', 'Added to menu']
          ].map(([dish, count, detail, status]) => (
            <div key={dish} className="flex items-center justify-between gap-4 rounded-xl border border-[#f1e6d5] bg-aahara-cream p-4">
              <div>
                <strong>{dish}</strong>
                <p>{count}</p>
                <p>{detail}</p>
              </div>
              <span className="rounded-full bg-white px-2 py-1">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
