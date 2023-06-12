const galaxies = [
  {
    id: 1,
    nama: "Andromeda",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/M31_09-01-2011_%28cropped%29.jpg",
    deskripsi:
      "The Andromeda Galaxy is a barred spiral galaxy and is the closest major galaxy to the Milky Way, where the Solar System resides. It was originally named the Andromeda Nebula and is cataloged as Messier 31, M31, and NGC 224. Andromeda has a diameter of about 46.56 kiloparsecs (152,000 light-years)[8] and is approximately 765 kpc (2.5 million light-years) from Earth",
  },
  {
    id: 2,
    nama: "Bima Sakti",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Milky_way_map.png/550px-Milky_way_map.png",
    deskripsi:
      "The Milky Way[c] is the galaxy that includes the Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye.",
  },
  {
    id: 3,
    nama: "Cigar Galaxy",
    gambar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/M82_HST_ACS_2006-14-a-large_web.jpg/1200px-M82_HST_ACS_2006-14-a-large_web.jpg",
    deskripsi:
      "Messier 82 (also known as NGC 3034, Cigar Galaxy or M82) is a starburst galaxy approximately 12 million light-years away in the constellation Ursa Major. It is the second-largest member of the M81 Group, with the D25 isophotal diameter of 12.52 kiloparsecs (40,800 light-years).",
  },
];

import { useState } from "react";
import Galaxy from "./components/Galaxy";
import "./App.css"

function App() {
  return (
    <div>
      {galaxies.map((g) => (
        <Galaxy
          key={g.id}
          nama={g.nama}
          gambar={g.gambar}
          deskripsi={g.deskripsi}
        />
      ))}
    </div>
  );
}

export default App;
