const days = [
  {
    day: 'Monday',
    meal: 'Dal Tadka',
    image:
      'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
  },
  {
    day: 'Tuesday',
    meal: 'Halal Chicken Curry',
    image:
      'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80'
  },
  {
    day: 'Wednesday',
    meal: 'Chana Masala',
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80'
  },
  {
    day: 'Thursday',
    meal: 'Bhindi Masala',
    image:
      'https://images.unsplash.com/photo-1604908553252-6b2e80201f38?auto=format&fit=crop&w=900&q=80'
  },
  {
    day: 'Friday',
    meal: 'Vegetable Biryani',
    image:
      'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80'
  }
]

export default function Homepage() {
  return (
    <div className="bg-aahara-cream pb-20">
      <section className="section-wrap py-8 md:py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-5">
              <img src="/aahara-logo.svg" alt="AAHARA Logo" className="h-20 w-auto" />
            </div>

            <h1 className="max-w-xl text-5xl leading-[0.9] text-aahara-brown md:text-7xl">
              A familiar meal,
              <span className="block">even when you&apos;re far from home.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-aahara-brown/75">
              Home-style tiffins made around how you eat.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/auth" className="btn-primary">Order Once</a>
              <a href="/auth" className="btn-secondary">Subscribe &amp; Save</a>
            </div>

            <p className="mt-5 text-sm text-aahara-brown/70">
              Launching in Busan · Starting around Kyungsung University
            </p>
          </div>

          <div className="card-soft overflow-hidden p-3">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80"
              alt="Aahara complete tiffin"
              className="h-[560px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-wrap py-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="text-4xl text-aahara-brown md:text-5xl">THIS WEEK AT AAHARA</h2>
          <a href="/menu" className="text-sm font-bold uppercase tracking-[0.16em] text-aahara-gold">
            View menu
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {days.map(({ day, meal, image }) => (
            <article key={day} className="overflow-hidden rounded-2xl border border-[#f3e7d1] bg-white shadow-soft">
              <img src={image} alt={meal} className="h-48 w-full object-cover" />
              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-aahara-gold">{day}</p>
                <h3 className="mt-2 text-2xl leading-none text-aahara-brown">{meal}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-12">
        <div className="mb-8">
          <h2 className="text-4xl text-aahara-brown md:text-5xl">BUILD YOUR TIFFIN</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Protein', 'Halal Chicken Curry', 'Paneer', 'Dal'],
            ['Carb', 'Rice', 'Roti', 'Paratha'],
            ['Portion', 'Light', 'Regular', 'Hearty'],
            ['Extras', 'Extra Roti', 'Sweet', 'Extra Sabzi']
          ].map(([label, ...options]) => (
            <div key={label} className="card-soft p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-aahara-gold">{label}</p>
              <div className="mt-4 space-y-3">
                {options.map((option) => (
                  <div key={option} className="rounded-xl border border-[#efe1c6] bg-aahara-cream px-3 py-2 text-sm text-aahara-brown">
                    {option}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-12">
        <h2 className="mb-8 text-4xl text-aahara-brown md:text-5xl">TELL US HOW YOU EAT</h2>
        <div className="rounded-[2rem] bg-[#f0e4d4] p-8 md:p-10">
          <p className="max-w-3xl text-lg text-aahara-brown/80">
            Where does food feel like home? Indian, Pakistani, Bangladeshi, Nepali, Sri Lankan, or other. Tell us your diet, spice level, favourite foods, allergies, and portion preference.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {['Vegetarian', 'Vegan', 'Halal', 'No pork', 'No beef', 'No eggs', 'Allergy-sensitive'].map((tag) => (
              <span key={tag} className="rounded-full border border-[#d9c19b] bg-white px-3 py-2 text-sm text-aahara-brown">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <a href="/profile" className="btn-primary">Create your profile</a>
          </div>
        </div>
      </section>

      <section className="section-wrap py-12">
        <h2 className="mb-8 text-4xl text-aahara-brown md:text-5xl">TWO WAYS TO EAT</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['Order Once', 'Try Aahara whenever you want.'],
            ['Weekly', '4–5 meals per week.'],
            ['Monthly', '20 meals per month.']
          ].map(([title, description]) => (
            <div key={title} className="card-soft p-6">
              <h3 className="text-3xl text-aahara-brown">{title}</h3>
              <p className="mt-3 text-aahara-brown/70">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-12">
        <h2 className="mb-8 text-4xl text-aahara-brown md:text-5xl">FROM HOME</h2>
        <div className="rounded-[2rem] bg-[#3B2A21] p-8 text-white md:p-10">
          <p className="text-3xl font-semibold text-white">What food do you miss?</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {['Aloo Paratha', 'Rajma', 'Kheer', 'Biryani', 'Gulab Jamun'].map((request) => (
              <span key={request} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80">
                {request}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-12">
        <h2 className="mb-8 text-4xl text-aahara-brown md:text-5xl">HOW AAHARA WORKS</h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {['Your preferences', 'Our kitchen', 'Your tiffin', 'Your feedback', "Next week's menu"].map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-aahara-gold text-sm font-bold text-white">
                {index + 1}
              </div>
              {index < 4 && <div className="hidden h-px w-10 bg-aahara-gold md:block" />}
              <span className="text-sm font-medium text-aahara-brown">{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-wrap pt-12">
        <div className="rounded-[2rem] bg-[#f0e5d5] p-8 text-center md:p-12">
          <h2 className="text-4xl text-aahara-brown md:text-5xl">Bring home to your table.</h2>
          <div className="mt-8 flex justify-center">
            <a href="/auth" className="btn-primary">Order now</a>
          </div>
        </div>
      </section>
    </div>
  )
}
