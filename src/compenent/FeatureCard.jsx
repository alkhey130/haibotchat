export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md text-center">
      <img src={icon} className="w-10 mx-auto mb-2" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-xs text-gray-500 mt-1">{desc}</p>
    </div>
  )
}
