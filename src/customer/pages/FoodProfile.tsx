export default function FoodProfile() {
  return (
    <div className="section-wrap py-12">
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-aahara-gold">Food profile</p>
        <h1 className="mt-2 text-5xl text-aahara-brown md:text-6xl">TELL US HOW YOU EAT</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="card-soft p-6">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-aahara-brown">Where does food feel like home?</label>
              <select className="w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm text-aahara-brown">
                <option>Indian</option>
                <option>Pakistani</option>
                <option>Bangladeshi</option>
                <option>Nepali</option>
                <option>Sri Lankan</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-aahara-brown">Diet</label>
              <div className="flex flex-wrap gap-2">
                {['Vegetarian', 'Vegan', 'Halal', 'No pork', 'No beef', 'No eggs', 'Allergy-sensitive', 'Other'].map((item) => (
                  <span key={item} className="rounded-full border border-[#d7c59a] bg-aahara-cream px-3 py-2 text-sm text-aahara-brown">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-aahara-brown">Spice</label>
              <div className="flex flex-wrap gap-2">
                {['Mild', 'Medium', 'Spicy'].map((item) => (
                  <button key={item} className="rounded-full border border-[#d7c59a] bg-white px-4 py-2 text-sm text-aahara-brown">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="card-soft p-6">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-aahara-brown">Favourite foods</label>
              <textarea className="h-24 w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm" placeholder="Dal, paneer, rice, biryani..." />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-aahara-brown">Foods disliked</label>
              <textarea className="h-20 w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm" placeholder="Too much spice, eggplant, etc." />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-aahara-brown">Allergies</label>
              <input className="w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm" placeholder="Peanuts, dairy, gluten..." />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-aahara-brown">Portion preference</label>
              <input className="w-full rounded-xl border border-[#e5d7bb] bg-white p-3 text-sm" placeholder="Light / Regular / Hearty" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <a href="/menu" className="btn-primary">Your Aahara profile is ready</a>
      </div>
    </div>
  )
}
