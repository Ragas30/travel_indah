export default function ArmadaCard({ nama, image, deskripsi, kapasitas }) {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden ">
      <img className="w-full object-cover" src={image} alt={nama} />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{nama}</h3>
        <p className="text-gray-600 mt-2">{deskripsi}</p>
        <p className="text-gray-500 mt-2 font-semibold">Kapasitas: {kapasitas} Penumpang</p>
      </div>
    </div>
  );
}
