"Use Client"
import Image from "next/image";

const PublicSpeaking = () => {
  return (
    <div
      id="4"
      className="p-6 my-4 bg-white dark:bg-gray-700 shadow rounded-lg"
    >
      <h1 className="text-lg font-semibold mb-2 text-center mt-2">
        Public Speaking
      </h1>
      <ul className="list-disc pl-4 space-y-2">
        <li>
          <strong>Definisi Public speaking </strong> adalah suatu proses
          komunikasi yang berkelanjutan dimana pesan dan lambang bersirkulasi
          berulang ulang secara terus meneruts antara pembicara dan pendengarnya.
        </li>
        <li>
          <strong>Tujuan Public speaking : </strong>
          <ul className="list-decimal pl-8">
            <li>Mempengaruhi audiens agar mengubah pikirannya</li>
            <li>Menginformasikan kepada publik</li>
            <li>Menghibur audiens seperti stand up comedy</li>
          </ul>
        </li>
        <li>
          <strong>Elemen dalam Public Speaking</strong>
          <Image src="/static/elemen_public_speaking.png" alt="Gambar element public speaking" width={600} height={120}/>
        </li>
      </ul>
    </div>
  );
};

export default PublicSpeaking;
