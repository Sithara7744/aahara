export default function MyAahara() {
  return (
    <div className="section-wrap py-12">
      <h1 className="text-5xl text-aahara-brown md:text-6xl">MY AAHARA</h1>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="card-soft p-6">
            <h2 className="text-3xl text-aahara-brown">This Week</h2>
            <div className="mt-5 space-y-3">
              {[
                ['Monday', 'Delivered'],
                ['Tuesday', 'Delivered'],
                ['Wednesday', 'Upcoming'],
                ['Thursday', 'Upcoming'],
                ['Friday', 'Upcoming']
              ].map(([day, status]) => (
                <div key={day} className="flex items-center justify-between gap-3 rounded-xl border border-[#efdfbd] bg-aahara-cream p-3">
                  <span className="font-medium text-aahara-brown">{day}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-aahara-brown/70">{status}</span>
                    {status === 'Upcoming' && (
                      <>
                        <button className="btn-small">Keep</button>
                        <button className="btn-small">Swap</button>
                        <button className="btn-small">Skip</button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-soft p-6">
            <h2 className="text-3xl text-aahara-brown">Subscription</h2>
            <div className="mt-4 space-y-3 text-sm text-aahara-brown/80">
              <div className="flex justify-between"><span>Plan</span><span>Weekly</span></div>
              <div className="flex justify-between"><span>Next renewal</span><span>12 Sep</span></div>
              <div className="flex justify-between"><span>Status</span><span>Active</span></div>
            </div>
          </div>

          <div className="card-soft p-6">
            <h2 className="text-3xl text-aahara-brown">Food Profile</h2>
            <p className="mt-3 text-sm text-aahara-brown/75">Vegetarian · Mild spice · Rice preferred</p>
          </div>
        </div>
      </div>
    </div>
  )
}
