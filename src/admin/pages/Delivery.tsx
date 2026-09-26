export default function DeliveryAdmin() {
  return (
    <div className="space-y-6">
      <h1 className="text-5xl text-aahara-brown">Delivery & Pickup</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
          <h2 className="text-3xl text-aahara-brown">Delivery Zones</h2>
          <ul className="mt-4 space-y-2 text-sm text-aahara-brown/80">
            <li>Kyungsung University</li>
            <li>Nearby residential hubs</li>
            <li>Student dorm clusters</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#efdfbd]">
          <h2 className="text-3xl text-aahara-brown">Pickup Hubs</h2>
          <ul className="mt-4 space-y-2 text-sm text-aahara-brown/80">
            <li>Kyungsung Gate</li>
            <li>Busan Station</li>
            <li>University dorm pickup</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
