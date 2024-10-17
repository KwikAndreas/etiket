const PersiapanPidato = () => {
  return (
    <div
      id="5"
      className="p-6 my-4 bg-white dark:bg-gray-700 shadow rounded-lg"
    >
      <h1 className="text-lg font-semibold mb-2 text-center mt-2">
        Persiapan Pidato
      </h1>
      <ul className="list-disc pl-4 space-y-2">
        <li>
          <strong>Definisi Pidato </strong> adalah Kegiatan berbicra di depan
          umum / berorasi agar dapat menyatakan pendapatnya
        </li>
        <li>
          <strong>Metode Pidato </strong>
          <ul className="list-decimal pl-4">
            <li>
              Impromptu : dikerjakan secara tiba tiba tanpa perlu persiapan
            </li>
            <li>
              Ekstemporan : dilakukan tanpa naskah pidato namun masih memiliki
              kerangka isi pidato
            </li>
            <li>
              Membaca Naskah : menyampaikan pernyataan resmi dengan membaca
              naskah{" "}
            </li>
            <li>
              Menghafal : menyiapkan, merencanakan, membuat naskah dan menghafal
              naskah
            </li>
          </ul>
        </li>
        <li>
          <strong>Jenis pidato :</strong>
          <ul className="list-decimal pl-4">
            <li>Entertain : cerita, humor, anekdot</li>
            <li>Inform : fakta, deskripsi, data</li>
            <li>Persuade : ajakan untuk berbuat sesuatu, logika</li>
          </ul>
        </li>
        <li>
          <strong>Kerangka pidato :</strong>
          <ul className="list-decimal pl-4">
            <li>Pembuka : memberi sapaan, menyampaikan maksud dan tujuan</li>
            <li>Isi : isi dari pidato </li>
            <li>Penutup : kesimpulan dari pidato, singkat padat dan jelas </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PersiapanPidato;
