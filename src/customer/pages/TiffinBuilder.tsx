import { useState } from 'react'

const basePrice = 8500
const mealOptions = {
  protein: [
    { label: 'Regular', price: 0 },
    { label: 'Extra protein', price: 2000 }
  ],
  carb: [
    { label: 'Rice', price: 0 },
    { label: '2 Roti', price: 0 },
    { label: 'Paratha', price: 800 }
  ],
  portion: [
    { label: 'Light', price: 0 },
    { label: 'Regular', price: 0 },
    { label: 'Hearty', price: 1500 }
  ],
  extras: [
    { label: 'Extra Roti', price: 800 },
    { label: 'Extra Sabzi', price: 1200 },
    { label: 'Sweet', price: 1800 }
  ]
}

export default function TiffinBuilder() {
  const [protein, setProtein] = useState('Regular')
  const [carb, setCarb] = useState('Rice')
  const [portion, setPortion] = useState('Regular')
  const [extra, setExtra] = useState('None')

  const calculateTotal = () => {
    const proteinPrice = mealOptions.protein.find((item) => item.label === protein)?.price ?? 0
    const carbPrice = mealOptions.carb.find((item) => item.label === carb)?.price ?? 0
    const portionPrice = mealOptions.portion.find((item) => item.label === portion)?.price ?? 0
    const extraPrice = mealOptions.extras.find((item) => item.label === extra)?.price ?? 0

    return basePrice + proteinPrice + carbPrice + portionPrice + extraPrice
  }

  const total = calculateTotal()

  return (
    <div className="section-wrap py-12">
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-aahara-gold">Tuesday&apos;s Tiffin</p>
        <h1 className="mt-2 text-5xl text-aahara-brown md:text-6xl">Halal Chicken Curry</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div className="card-soft overflow-hidden p-3">
          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=1100&q=80"
            alt="Halal chicken curry tiffin"
            className="h-[520px] w-full rounded-2xl object-cover"
          />
        </div>

        <div className="card-soft p-6 md:p-8">
          <h2 className="text-4xl text-aahara-brown">Make it yours</h2>

          <div className="mt-6 space-y-6">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-aahara-gold">Protein</p>
              <div className="space-y-2">
                {mealOptions.protein.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setProtein(option.label)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm ${
                      protein === option.label ? 'border-aahara-gold bg-aahara-cream' : 'border-[#e9dcc0] bg-white'
                    }`}
                  >
                    {option.label} {option.price > 0 ? `+ ₩${option.price.toLocaleString()}` : ''}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-aahara-gold">Carb</p>
              <div className="space-y-2">
                {mealOptions.carb.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setCarb(option.label)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm ${
                      carb === option.label ? 'border-aahara-gold bg-aahara-cream' : 'border-[#e9dcc0] bg-white'
                    }`}
                  >
                    {option.label} {option.price > 0 ? `+ ₩${option.price.toLocaleString()}` : ''}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-aahara-gold">Portion</p>
              <div className="space-y-2">
                {mealOptions.portion.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setPortion(option.label)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm ${
                      portion === option.label ? 'border-aahara-gold bg-aahara-cream' : 'border-[#e9dcc0] bg-white'
                    }`}
                  >
                    {option.label} {option.price > 0 ? `+ ₩${option.price.toLocaleString()}` : ''}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-aahara-gold">Extras</p>
              <div className="space-y-2">
                {[
                  { label: 'None', price: 0 },
                  ...mealOptions.extras
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setExtra(option.label)}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm ${
                      extra === option.label ? 'border-aahara-gold bg-aahara-cream' : 'border-[#e9dcc0] bg-white'
                    }`}
                  >
                    {option.label} {option.price > 0 ? `+ ₩${option.price.toLocaleString()}` : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-[#F3E8D2] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-aahara-gold">Your tiffin</p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <div>
                <p className="text-4xl font-bold text-aahara-brown">₩{total.toLocaleString()}</p>
              </div>
              <a href="/auth" className="btn-primary">Add to order</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
