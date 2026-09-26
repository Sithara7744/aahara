export default function Menu() {
  const menu = [
    {
      day: 'Monday',
      meal: 'Dal Tadka',
      desc: 'Yellow lentils, tempered spices, rice, roti',
      image:
        'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80'
    },
    {
      day: 'Tuesday',
      meal: 'Halal Chicken Curry',
      desc: 'Tender chicken, gravy, vegetables, rice',
      image:
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80'
    },
    {
      day: 'Wednesday',
      meal: 'Chana Masala',
      desc: 'Chickpea curry, tomato gravy, rice and roti',
      image:
        'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80'
    },
    {
      day: 'Thursday',
      meal: 'Bhindi Masala',
      desc: 'Okra curry with dal and rice',
      image:
        'https://images.unsplash.com/photo-1604908553252-6b2e80201f38?auto=format&fit=crop&w=800&q=80'
    },
    {
      day: 'Friday',
      meal: 'Vegetable Biryani',
      desc: 'Flavoured rice, vegetables, salad, raita',
      image:
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div className="section-wrap py-12">
      <div className="mb-10 flex items-center justify-between gap-4">
        <h1 className="text-5xl text-aahara-brown md:text-6xl">THIS WEEK AT AAHARA</h1>
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-aahara-gold">Mon-Fri</span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {menu.map((item) => (
          <article key={item.day} className="overflow-hidden rounded-2xl border border-[#f2e6d0] bg-white shadow-soft">
            <img src={item.image} alt={item.meal} className="h-48 w-full object-cover" />
            <div className="p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-aahara-gold">{item.day}</p>
              <h2 className="mt-2 text-3xl text-aahara-brown">{item.meal}</h2>
              <p className="mt-2 text-sm text-aahara-brown/70">{item.desc}</p>
              <div className="mt-5">
                <a href="/auth" className="btn-small">Choose this</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
