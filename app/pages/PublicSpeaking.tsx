const PublicSpeaking = () => {
  return (
    <div
      id="3"
      className="p-6 my-4 bg-white dark:bg-gray-700 shadow rounded-lg"
    >
      <h1 className="text-lg font-semibold mb-2 text-center mt-2">
        Public Speaking
      </h1>
      <ul className="list-disc pl-4 space-y-2">
        <li>
          <strong>David Zarefsky : </strong>suatu proses komunikasi yang
          berkelanjutan dimana pesan dan lambang bersikulasi berulang-ulang
          secara terus menerus antara pembicara dan pendengarnya.
        </li>
        <li>
          <strong>Charles Woolbert : </strong> Ilmu tingkah laku seseorang.
          Dalam menyusun materi harus memperhatikan hal berikut;
          <ul className="list-decimal pl-8">
            <li>Memahami materi</li>
            <li>Ketahui khalayak senangi dan situasi audies </li>
            <li>Pilih kalimat secara logis dan mudah dimengerti </li>
          </ul>
        </li>
        <li>
          <strong>Tujuan Public Speaking</strong>
          <ul>
            <li>
              <ul className="list-decimal pl-8">
                <li>
                  <h2>Mempengaruhi</h2>
                  <ul className="list-disc pl-4">
                    <li>
                      digunakan untuk mempengaruhi audiens agar mengubah
                      pikirannya.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>Menginformasikan</h2>
                  <ul className="list-disc pl-4">
                    <li>memberikan informasi kepada publik.</li>
                    <li>
                      Contoh : Sosialisasi peraturan baru agar audiens
                      mengetahui dan paham.
                    </li>
                  </ul>
                </li>
                <li>
                  <h2>Menghibur</h2>
                  <ul className="list-disc pl-4">
                    <li>
                      Mayoritas orang senang untuk dihibur dan mencari seuatu
                      yang relaks.
                    </li>
                    <li>Contoh : Stand Up Comedy.</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <strong>Elemen dalam Public Speaking</strong>
          <ul className="list-decimal pl-8">
            <li>Speaker</li>
            <li>Message</li>
            <li>Channel</li>
            <li>Listener</li>
            <li>Feedback</li>
            <li>
              Interference
              <ul className="list-disc pl-4">
                <li>
                  External
                  <ul className="list-disc pl-8">
                    <li>Kebisingan dari luar</li>
                    <li>Mic mati </li>
                    <li>AC tidak berfungsi </li>
                    <li>Audiens berisik </li>
                  </ul>
                </li>
                <li>
                  Internal
                  <ul className="list-disc pl-8">
                    <li>Public speaker sakit </li>
                    <li>Grogi</li>
                    <li>Ketakutan berlebihan </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Situation</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PublicSpeaking;
