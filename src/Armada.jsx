import ArmadaCard from "./component/ArmadaCard.jsx";
import Title from "./component/Title.jsx";

const Armada = () => {
  return (
    <section className="bg-white py-16 px-6  ">
      <Title title="Armada" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ArmadaCard nama="Armada 1" image="/logo/indah_logo.png" deskripsi="Armada 1" kapasitas="30 Penumpang" />
        <ArmadaCard nama="Armada 2" image="/logo/indah_logo.png" deskripsi="Armada 2" kapasitas="30 Penumpang" />
        <ArmadaCard nama="Armada 2" image="/logo/indah_logo.png" deskripsi="Armada 3" kapasitas="30 Penumpang" />
        <ArmadaCard nama="Armada 2" image="/logo/indah_logo.png" deskripsi="Armada 4" kapasitas="30 Penumpang" />
      </div>
    </section>
  );
};

export default Armada;
