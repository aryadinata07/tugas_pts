import React from 'react'
import ItemData from './ItemData'


const ListData = () => {

  // data object
    const hewan = [
        {
            id: 1,
            nama : "capybara",
            deskripsi : "Capybara adalah hewan pengerat berbulu kasar dan berukuran besar yang berasal dari Amerika Selatan. Mereka adalah hewan semi-akuatik yang hidup di dekat air dan biasanya tinggal di daerah yang berair seperti rawa-rawa, sungai, dan danau. Capybara adalah hewan sosial dan mudah beradaptasi dengan lingkungan baru.",
            img : '/img/rSeven.jpg'
        },

        {
          id: 2,
          nama : "Babi Hutan",
          deskripsi : "Babi hutan adalah mamalia berkaki empat berbulu tebal dan gemuk. Mereka hidup di hutan, daerah pedalaman, dan terbuka, dan biasanya hidup dalam kelompok dengan hierarki sosial. Makanan utama mereka adalah tumbuhan dan serangga, dan mereka aktif di malam hari. Babi hutan dikenal sebagai hewan yang cerdas dan agresif dalam situasi tidak nyaman.",
          img : '/img/babi.jpeg'
      },

      {
        id: 3,
        nama : "Singa Laut",
        deskripsi : "Singa laut adalah mamalia laut gemuk dengan kepala besar dan bulu halus coklat keabu-abuan. Mereka memakan ikan dan hewan laut lainnya, hidup dalam kelompok besar, dan berkomunikasi dengan suara kuat. Singa laut terancam dan dilindungi karena perburuan dan perusakan habitatnya, tetapi masih menjadi atraksi populer di akuarium dan kebun binatang.",
        img : './img/anjing laut.jpeg'
    },
    ]

  return (
    <div>
    <ul>
    {
        hewan.map((hwn) => (
          <ItemData {...hwn} key={hwn.id} />
        ))
      } 
    </ul>
      </div>
  )
}

export default ListData