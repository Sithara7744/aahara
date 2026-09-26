export default function Subscriptions() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl text-aahara-brown">Subscriptions</h1>
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#efdfbd]">
        <table className="w-full text-left" aria-label="Subscriptions table">
          <thead className="bg-[#f8f1e3] text-[10px] uppercase tracking-[0.2em] text-aahara-gold">
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Meals Remaining</th>
              <th className="p-4">Next Renewal</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Ayesha', 'Weekly', '4', '12 Sep', 'Active'],
              ['Rizwan', 'Monthly', '9', '18 Sep', 'Active'],
              ['Pooja', 'Weekly', '2', '10 Sep', 'Paused']
            ].map(([customer, plan, meals, renewal, status]) => (
              <tr key={customer} className="border-t border-[#f0e6d7] text-sm text-aahara-brown/80">
                <td className="p-4">{customer}</td>
                <td className="p-4">{plan}</td>
                <td className="p-4">{meals}</td>
                <td className="p-4">{renewal}</td>
                <td className="p-4"><span className="rounded-full bg-[#f8f1e3] px-2 py-1">{status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
