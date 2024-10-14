const EtikaEtiket = () => {
  return (
    <div
      id="1"
      className="p-6 my-4 bg-white dark:bg-gray-700 shadow rounded-lg pt-1"
    >
      <h1 className="text-lg font-semibold mb-2 text-center mt-2">
        Etika & Etiket
      </h1>
      <ul className="list-disc pl-4 space-y-2">
        <li>
          <strong>Etika (Moral) : </strong> nilai-nilai dan norma-norma moral
          yang menjadi pegangan dalam mengatur perilaku – Bertens
        </li>
        <li>
          <strong>Etiket (Sopan Santun) : </strong> kumpulan tata cara, sikap,
          nilai sopan santun yang disetujui oleh Masyarakat tertentu.
        </li>
        <li>
          <strong>Persamaan Etika & Etiket :</strong>

          <ul className="list-disc pl-4">
            <li>Menyangkut perilaku manusia</li>
            <li>
              Mengatur perilaku manusia secara normatif (apa yang harus
              dilakukan)
            </li>
          </ul>
        </li>
        <li>
          <strong>Perbedaan Etika & Etiket :</strong>

          <ul className="list-disc pl-4">
            <h2>
              1. <strong>Etika</strong>
            </h2>
            <li>Apakah suatu perbuatan boleh dilakukan (ya/tidak)</li>
            <li>Selalu berlaku</li>
            <li>Sifat lebih absolut</li>
            <li>Menyangkut manusia dari segi dalam </li>
            <h2>
              2. <strong>Etiket</strong>
            </h2>
            <li>Cara yang tepat / diharapkan </li>
            <li>Hanya berlaku dalam pergaulan </li>
            <li>Sifatnya relative </li>
            <li>Memandang manusia dari sisi lahiriah </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default EtikaEtiket;
