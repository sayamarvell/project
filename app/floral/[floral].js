import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FloralCard from "../../components/FloralCard";

const DATA = [
  {
    id: "1",
    category_id: "1",
    title: "Correa",
    poster:
      "https://cdn.idntimes.com/content-images/community/2023/10/5141617337-a393bc8b29-c-f6bd496100cb99fc851010642cf3010f-1ff5645ebb5bdaded20a65f7a5a79d19.jpg",
    description:
      "Tanaman dari keluarga Rutaceae ini nama bekennya adalah Canberra bells. Ini adalah sejenis semak setinggi 0,7—1 meter dengan bunga berbentuk lonceng berwarna merah dan krem. Biasanya, bunganya mekar di musim gugur.Correa ditemukan di sepanjang pantai selatan dan timur Australia, dari Victoria dan Tasmania hingga New South Wales dan Queensland. Tanaman ini menyukai tanah dengan drainase yang baik dan pH antara 5,5—5,7",
  },
  {
    id: "2",
    category_id: "1",
    title: "Eucalyptus caesia",
    poster:
      "https://cdn.idntimes.com/content-images/community/2023/10/27691655860-ba823c4c18-c-f6bd496100cb99fc851010642cf3010f-f648f913f0cb9bfe16291615ced8ff85.jpg",
    description:
      "Bunga eucalyptus memiliki ciri khas berkelompok atau bergerombol, biasanya berwarna putih. Bentuknya sering kali memiliki rambut-rambut halus, dan setelah mekar, bunga ini akan menghasilkan buah bulat kecil. Eucalyptus dikenal dengan aromanya yang khas dan sering digunakan dalam peng gunaan minyak esensial.",
  },
  {
    id: "3",
    category_id: "1",
    title: "Stylidium graminifolium",
    poster:
      "https://cdn.idntimes.com/content-images/community/2023/10/stylidium-graminifolium-flower-spike-f6bd496100cb99fc851010642cf3010f-032014e2ef6e834f83c21362c0cfba0b.jpg",
    description:
      "Stylidium graminifolium, yang dikenal sebagai Trigger Plant adalah spesies tanaman berbunga yang berasal dari Australia. Tanaman ini termasuk dalam keluarga Stylidiaceae dan dikenal karena mekanisme uniknya dalam penyerbukan, di mana bunga akan memicu atau bergerak untuk mengumpulkan serbuk sari dari serangga yang mendekat",
  },
  {
    id: "4",
    category_id: "1",
    title: "Chamelaucium",
    poster:
      "https://cdn.idntimes.com/content-images/community/2023/10/52723330443-910c6cfcd4-k-f6bd496100cb99fc851010642cf3010f-e639e11fdd3e0f266f04b2449a2cafcf.jpg",
    description:
      "Chamelaucium, yang juga dikenal sebagai Waxflower, adalah genus tanaman berbunga yang berasal dari Australia. Tanaman ini terkenal karena bunga-bunganya yang kecil, berwarna cerah, dan aromatik, serta daunnya yang sempit dan berwarna hijau gelap. Chamelaucium sering digunakan dalam rangkaian bunga dan sebagai tanaman hias karena daya tarik visualnya.",
  },
  {
    id: "5",
    category_id: "1",
    title: "Chorizema cordatum",
    poster:
      "https://cdn.idntimes.com/content-images/community/2023/10/36208665460-05e7fd01bb-c-f6bd496100cb99fc851010642cf3010f-ac6b5854aa3332d8009b01bac948efe8.jpg",
    description:
      "Chorizema cordatum, atau yang dikenal sebagai Heart-leaf Flame Pea, adalah semak evergreen kecil yang berasal dari Australia barat daya. Tumbuhan ini memiliki daun berbentuk hati yang gelap dan menghasilkan bunga berbentuk polong yang cerah, biasanya berwarna oranye, merah, dan kuning, dengan diameter sekitar 1,5 cm. Bunga ini muncul dalam racemes dan biasanya mekar dari akhir musim dingin hingga musim semi",
  },
  {
    id: "6",
    category_id: "2",
    title: "Echinacea",
    poster:
      "https://tse2.mm.bing.net/th?id=OIP.zPgeKdGXmx0mkCpkUcdZowHaE8&pid=Api&P=0&h=180",
    description:
      "Echinacea, atau dikenal sebagai Coneflower, adalah tanaman berbunga yang berasal dari Amerika Utara. Bunga ini memiliki bentuk yang khas dengan kelopak yang melengkung ke bawah dan pusat berbentuk kerucut yang menonjol. Warna bunga bervariasi, termasuk ungu, pink, dan putih.",
  },
  {
    id: "7",
    category_id: "2",
    title: "Rudbeckia",
    poster:
      "https://tse4.mm.bing.net/th?id=OIP.khIvLRZ25NB7OYKzQ3EFRwHaFw&pid=Api&P=0&h=180",
    description:
      "Rudbeckia, atau Black-eyed Susan, adalah bunga tahunan yang terkenal dengan kelopak kuning cerah dan pusat hitamnya. Bunga ini memiliki bentuk yang menyerupai daisy dan dapat tumbuh hingga 1 meter tinggi.",
  },
  {
    id: "8",
    category_id: "2",
    title: "Lobelia",
    poster:
      "https://tse4.mm.bing.net/th?id=OIP.4rWm-Sut0LBLQFj0f6iOPAHaGx&pid=Api&P=0&h=180",
    description:
      " Lobelia adalah genus tanaman berbunga yang berasal dari Amerika Utara, dengan spesies yang terkenal seperti Lobelia erinus. Bunga Lobelia memiliki warna biru, ungu, atau putih dan tumbuh dalam kelompok yang padat. Daunnya berwarna hijau cerah dan berbentuk oval.",
  },
  {
    id: "9",
    category_id: "3",
    title: "Tulipa",
    poster:
      "https://tse2.mm.bing.net/th?id=OIP.nOEjc9BWRr8uCQA4yaYVMAHaEK&pid=Api&P=0&h=180",
    description:
      "Tulipa, atau Tulip, adalah tanaman berbunga yang berasal dari Eropa dan Asia. Bunga ini memiliki bentuk yang unik dengan kelopak yang berbentuk seperti cup dan warna yang bervariasi, termasuk merah, kuning, pink, dan putih.",
  },
  {
    id: "10",
    category_id: "3",
    title: "Viola",
    poster:
      "https://bibitbunga.com/wp-content/uploads/2016/07/viola-tricolor-jenis-bunga-viola-paling-terkenal.jpg",
    description:
      "Viola, atau Pansy, adalah tanaman berbunga yang berasal dari Eropa dan Asia. Bunga ini memiliki bentuk yang kecil dan warna yang bervariasi, termasuk ungu, biru, kuning, dan putih. Kelopak bunga Viola biasanya memiliki pola yang unik dan menarik.",
  },
  {
    id: "11",
    category_id: "3",
    title: "Lilium",
    poster:
      "https://tse2.mm.bing.net/th?id=OIP.mVcoWyXuLjJ2xHo43G0ItAHaFi&pid=Api&P=0&h=180",
    description:
      "Lilium, atau Lily, adalah tanaman berbunga yang berasal dari Eropa dan Asia. Bunga ini memiliki bentuk yang unik dengan kelopak yang berbentuk seperti trumpet dan warna yang bervariasi, termasuk putih, kuning, pink, dan merah.",
  },
  {
    id: "12",
    category_id: "4",
    title: "Edelweiss",
    poster:
      "https://flower-meanings.com/wp-content/uploads/2019/09/Beautiful-edelweiss-flower-1024x1024.jpg",
    description:
      "Edelweiss adalah bunga kecil yang terkenal dengan penampilannya yang berbentuk bintang dan memiliki kelopak berwarna putih. Bunga ini tumbuh di daerah pegunungan tinggi dan sering kali menjadi simbol keindahan alam pegunungan.",
  },
  {
    id: "13",
    category_id: "4",
    title: "Cornflower",
    poster:
      "https://tse3.mm.bing.net/th?id=OIP.PLznLNQThWxkKLtQsXMcewHaGv&pid=Api&P=0&h=180",
    description:
      "Cornflower, atau dalam bahasa Jerman dikenal sebagai Kornblume adalah bunga liar yang memiliki kelopak berwarna biru cerah. Bunga ini memiliki bentuk yang khas dan sering kali tumbuh dalam kelompok.",
  },
  {
    id: "14",
    category_id: "4",
    title: "German Iris",
    poster:
      "https://www.thespruce.com/thmb/1OHht3zaAQ2V1jm3kU_zXt20nPw=/4288x2848/filters:no_upscale():max_bytes(150000):strip_icc()/batik-german-iris-plant-care-5081369-03-7b4973e1fd6547f0a46e978c8c81ee63.jpg",
    description:
      "German Iris, atau dalam bahasa Jerman dikenal sebagai Schwertlilie adalah tanaman berbunga yang memiliki kelopak berwarna-warni, termasuk ungu, biru, kuning, dan putih. Bunga ini memiliki bentuk yang elegan dan sering kali tumbuh tinggi.",
  },
  {
    id: "15",
    category_id: "5",
    title: "Anggrek",
    poster:
      "https://tse4.mm.bing.net/th?id=OIP.47C4RvdRK7VsSdFFeLwRfQHaE6&pid=Api&P=0&h=180",
    description:
      "Anggrek adalah salah satu bunga yang paling beragam di dunia, dengan berbagai spesies dan warna. Di Indonesia, terdapat banyak spesies anggrek yang indah, seperti Anggrek Bulan (Phalaenopsis amabilis) yang memiliki kelopak besar dan berwarna putih dengan pusat kuning.",
  },
  {
    id: "16",
    category_id: "5",
    title: "Melati",
    poster:
      "https://2.bp.blogspot.com/-uFgx7O-bhyo/V_obqqZ-TcI/AAAAAAAAAZ4/iANfEf5g_JgTmLpTWwBuK1XPOabIsMuSgCLcB/s1600/Putih%2BCantik%2B7.jpg",
    description:
      "Melati adalah bunga kecil berwarna putih dengan aroma yang sangat harum. Bunga ini memiliki kelopak yang halus dan biasanya tumbuh dalam kelompok. Melati sering digunakan dalam upacara adat dan sebagai hiasan dalam rangkaian bunga.",
  },
  {
    id: "17",
    category_id: "5",
    title: "Kamboja",
    poster:
      "https://tse3.mm.bing.net/th?id=OIP.B0xsQIdgPTQKck7amZnZ_AHaFj&pid=Api&P=0&h=180",
    description:
      "Kamboja adalah bunga tropis yang dikenal dengan kelopaknya yang lebar dan warna yang bervariasi, termasuk putih, kuning, merah, dan pink. Bunga ini memiliki aroma yang harum dan sering digunakan dalam rangkaian bunga.",
  },
  {
    id: "18",
    category_id: "6",
    title: "Bunga Camellia",
    poster:
      "https://tse1.mm.bing.net/th?id=OIP.geFKypKWAMvFhFCRy8FUCwHaFj&pid=Api&P=0&h=180",
    description:
      "Camellia adalah bunga yang sangat dihargai di Rusia, terutama di daerah selatan seperti Sochi. Bunga ini dikenal karena kelopaknya yang besar dan berwarna cerah, biasanya merah, pink, atau putih. Camellia mekar di musim dingin hingga awal musim semi, menjadikannya simbol ketahanan dan keindahan di tengah cuaca dingin. Bunga ini juga sering digunakan dalam kebun dan taman, dan memiliki makna romantis dalam budaya Rusia.",
  },
  {
    id: "19",
    category_id: "6",
    title: "Bunga Lili",
    poster:
      "https://hijaukan.com/wp-content/uploads/2019/10/bunga-lili.jpg",
    description:
      "Lili adalah salah satu bunga yang populer di Rusia dan memiliki berbagai spesies. Bunga ini dikenal dengan bentuknya yang elegan dan aroma yang harum. Lili sering kali melambangkan kemurnian dan keindahan, dan sering digunakan dalam rangkaian bunga untuk berbagai acara, termasuk pernikahan dan perayaan. Di Rusia, lili juga memiliki makna simbolis yang dalam, sering kali dikaitkan dengan cinta dan penghormatan.",
  },
  {
    id: "20",
    category_id: "6",
    title: "Bunga Dandelion",
    poster:
      "https://www.thespruce.com/thmb/Q07qXNPB7ROVxRPj18zSuy-NdWI=/2600x2600/smart/filters:no_upscale()/rural-field-and-dandelion-at-sunset-956554914-ccc93b08227e4865adc9fdf91e4969b0.jpg",
    description:
      "Dandelion, meskipun dianggap sebagai gulma di banyak tempat, memiliki tempat khusus dalam budaya Rusia. Bunga kuning cerah ini muncul di musim semi dan sering kali digunakan dalam berbagai tradisi, termasuk dalam pembuatan salep dan ramuan herbal. Dandelion juga melambangkan harapan dan kebangkitan, karena kemampuannya untuk tumbuh di berbagai kondisi. Selain itu, di Rusia, dandelion sering dijadikan bahan dalam makanan dan minuman, seperti selai dandelion.",
  },
];

const FloralDetail = () => {
  const { floral } = useLocalSearchParams();
  const selectedFloral = DATA.filter((item) => item.id === floral);

  // Check if selectedFloral has an item
  if (selectedFloral.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No floral item found.</Text>
      </SafeAreaView>
    );
  }

  const floralItem = selectedFloral[0];

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FloralCard item={floralItem} />
      <Text style={{ margin: 20, textAlign: 'center' }}>{floralItem.description}</Text>
    </SafeAreaView>
  );
};

export default FloralDetail;