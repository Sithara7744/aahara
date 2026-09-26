export default function Orders() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl text-aahara-brown">Orders</h1>
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-[#efdfbd]">
        <table className="w-full text-left" aria-label="Orders table">
          <thead className="bg-[#f8f1e3] text-[10px] uppercase tracking-[0.2em] text-aahara-gold">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Meal</th>
              <th className="p-4">Diet</th>
              <th className="p-4">Delivery</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['AA-1042', 'Ayesha', 'Halal Chicken Curry', 'Halal', 'Delivery', '₩14,800', 'Preparing'],
              ['AA-1043', 'Rizwan', 'Paneer Curry', 'Vegetarian', 'Pickup', '₩9,800', 'Ready'],
              ['AA-1044', 'Pooja', 'Dal Tadka', 'Vegetarian', 'Delivery', '₩12,500', 'New']
            ].map(([id, customer, meal, diet, type, amount, status]) => (
              <tr key={id} className="border-t border-[#f0e6d7] text-sm text-aahara-brown/80">
                <td className="p-4">{id}</td>
                <td className="p-4">{customer}</td>
                <td className="p-4">{meal}</td>
                <td className="p-4">{diet}</td>
                <td className="p-4">{type}</td>
                <td className="p-4">{amount}</td>
                <td className="p-4"><span className="rounded-full bg-[#f8f1e3] px-2 py-1">{status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
