export default function FeedbackAdmin() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl text-aahara-brown">Feedback</h1>
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
        <div className="space-y-4 text-sm text-aahara-brown/80">
          {[
            ['Ayesha', 'Dal Tadka', '★★★★★', '★★★★★', '★★★★☆', '★★★★★', 'Overall better spice balance'],
            ['Rizwan', 'Chana Masala', '★★★★☆', '★★★★★', '★★★★★', '★★★★★', 'Loved the portion']
          ].map(([customer, meal, taste, portion, spice, variety, comment]) => (
            <div key={customer} className="rounded-xl border border-[#f1e6d5] bg-aahara-cream p-4">
              <div className="flex justify-between gap-3"><strong>{customer}</strong><span>{meal}</span></div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs md:grid-cols-4">
                <span>Taste: {taste}</span>
                <span>Portion: {portion}</span>
                <span>Spice: {spice}</span>
                <span>Variety: {variety}</span>
              </div>
              <p className="mt-3">Comment: {comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
