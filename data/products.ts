export const categorias = [
  "Armazenamento",
  "Notebook",
  "Placa de Vídeo",
  "Cabos",
  "Water Cooler",
  "Gabinete",
  "Placa-mãe",
  "Adaptadores",
  "Componentes",
  "Memória",
  "Periféricos",
  "Câmeras",
  "Monitores",
  "Áudio",
  "Rede"
];


// Novos produtos adicionados em 18/09/2025
export const allProducts = [
  {
    id: 1,
    nome: "SSD SATA 240 crucial BX500",
    categoria: "Armazenamento",
    condicao: "novo",
    preco: 200.00,
    imagem: "/products/1.jpg",
    descricao: "SSD SATA 240GB Crucial BX500",
    garantia: "12 meses",
    especificacoes: {
      Capacidade: "240GB",
      Marca: "Crucial",
      Tipo: "SSD SATA",
      NCM: "84733011.0"
    }
  },
  {
    id: 2,
    nome: "NOTEBOOK HP INTEL CORE I3 11º modelo 15-dy2713st",
    categoria: "Notebook",
    condicao: "seminovo",
    preco: 1300.00,
    imagem: "/products/2.jpg",
    descricao: "Notebook HP Intel Core i3 11ª geração, modelo 15-dy2713st",
    garantia: "6 meses",
    especificacoes: {
      Processador: "Intel Core i3 11ª geração",
      Modelo: "15-dy2713st",
      RAM: "8GB",
      Armazenamento: "256GB SSD",
      Tela: "15.6'' HD",
      NCM: "84713019.0"
    }
  },
  {
    id: 3,
    nome: "NOTEBOOK LENOVO MODELO T 450 INTEL CORE I5 5300U 5º GERAÇÃO  8 GB RAM SSD 120 GB",
    categoria: "Notebook",
    condicao: "seminovo",
    preco: 1000.00,
    imagem: "/products/3.jpg",
    descricao: "Notebook Lenovo T450, i5 5300U 5ª geração, 8GB RAM, SSD 120GB",
    garantia: "6 meses",
    especificacoes: {
      Processador: "Intel Core i5 5300U 5ª geração",
      RAM: "8GB",
      Armazenamento: "120GB SSD",
      Tela: "14'' HD",
      NCM: "84713019.0"
    }
  },
  // {
  //   id: 4,
  //   nome: "NOTEBOOK DELL MODELO INSPIRION 15 7000 - 7537 P36F INTEL CORE I7 4510U 4º GERAÇÃO  16 GB RAM SSD 240 GB TELA FULL HD",
  //   categoria: "Notebook",
  //   condicao: "seminovo",
  //   preco: 1400.00,
  //   imagem: "/products/4.jpg",
  //   descricao: "Notebook Dell Inspirion 15 7000, i7 4510U 4ª geração, 16GB RAM, SSD 240GB, Tela Full HD",
  //   garantia: "6 meses",
  //   especificacoes: {
  //     Processador: "Intel Core i7 4510U 4ª geração",
  //     RAM: "16GB",
  //     Armazenamento: "240GB SSD",
  //     Tela: "15.6'' Full HD",
  //     NCM: "84713019.0"
  //   }
  // },
  {
    id: 5,
    nome: "NOTEBOOK AVELL I7 16GB DDR5 A52 ION 12º GERAÇÃO",
    categoria: "Notebook",
    condicao: "novo",
    preco: 5699.00,
    imagem: "/products/5.webp",
    descricao: "Notebook Avell i7, 16GB DDR5, A52 ION, 12ª geração",
    garantia: "12 meses",
    especificacoes: {
      Processador: "Intel Core i7 12ª geração",
      RAM: "16GB DDR5",
      Modelo: "A52 ION",
      NCM: "84713019.0",
      GPU: "GeForce RTX 4050",
    }
  },
  {
    id: 6,
    nome: "NOTEBOOK ACER ASPIRE E1-571-6_BR642 INTEL CORE I3 8GB RAM SSD 120 GB",
    categoria: "Notebook",
    condicao: "seminovo",
    preco: 650.00,
    imagem: "/products/6.jpg",
    descricao: "Notebook Acer Aspire E1-571-6_BR642, i3, 8GB RAM, SSD 120GB",
    garantia: "6 meses",
    especificacoes: {
      Processador: "Intel Core i3",
      RAM: "8GB",
      Armazenamento: "120GB SSD",
      Tela: "15.6'' HD",
      NCM: "84713019.0"
    }
  },
  {
    id: 7,
    nome: "PLACA DE VIDEO RTX 3060 12 GB ZOTAC",
    categoria: "Placa de Vídeo",
    condicao: "novo",
    preco: 1899.00,
    imagem: "/products/7.jpg",
    descricao: "Placa de vídeo RTX 3060 12GB Zotac",
    garantia: "12 meses",
    especificacoes: {
      GPU: "RTX 3060",
      Memória: "12GB",
      Marca: "Zotac",
      NCM: "84733042.0"
    }
  },
  {
    id: 8,
    nome: "PLACA DE VIDEO RTX 5060 8 GB GAINWARD GHOST",
    categoria: "Placa de Vídeo",
    condicao: "novo",
    preco: 2399.99,
    imagem: "/products/8.jpg",
    descricao: "Placa de vídeo RTX 5060 8GB Gainward Ghost",
    garantia: "12 meses",
    especificacoes: {
      GPU: "RTX 5060",
      Memória: "8GB",
      Marca: "Gainward Ghost",
      NCM: "84733042.0"
    }
  },
  {
    id: 9,
    nome: "B450 AORUS PRO WIFI",
    categoria: "Placa-mãe",
    condicao: "novo",
    preco: 1000.00,
    imagem: "/products/9.png",
    descricao: "Placa-mãe B450 Aorus Pro Wifi",
    garantia: "12 meses",
    especificacoes: {
      Chipset: "B450",
      Marca: "Aorus",
      WiFi: "Sim",
      NCM: "84733042.0"
    }
  },
  {
    id: 10,
    nome: "B450M-PLUS  TUF",
    categoria: "Placa-mãe",
    condicao: "novo",
    preco: 599.00,
    imagem: "/products/10.webp",
    descricao: "Placa-mãe B450M-PLUS TUF",
    garantia: "12 meses",
    especificacoes: {
      Chipset: "B450M",
      Marca: "TUF",
      NCM: "84733042.0"
    }
  },
  {
    id: 11,
    nome: "ROG XTRIX B450-E",
    categoria: "Placa-mãe",
    condicao: "novo",
    preco: 1000.00,
    imagem: "/products/11.png",
    descricao: "Placa-mãe ROG XTRIX B450-E",
    garantia: "12 meses",
    especificacoes: {
      Chipset: "B450-E",
      Marca: "ROG XTRIX",
      NCM: "84733042.0"
    }
  },
  {
    id: 12,
    nome: "Gabinete Gamer Fortrek Clarity Max Preto",
    categoria: "Gabinete",
    condicao: "novo",
    preco: 390.00,
    imagem: "/products/12.webp",
    descricao: "Gabinete Gamer Fortrek Clarity Max Preto",
    garantia: "12 meses",
    especificacoes: {
      Cor: "Preto",
      Marca: "Fortrek",
      NCM: "84733049.0"
    }
  },
  {
    id: 13,
    nome: "Gabinete Gamer Fortrek Clarity Max BRANCO",
    categoria: "Gabinete",
    condicao: "novo",
    preco: 449.00,
    imagem: "/products/13.webp",
    descricao: "Gabinete Gamer Fortrek Clarity Max Branco",
    garantia: "12 meses",
    especificacoes: {
      Cor: "Branco",
      Marca: "Fortrek",
      NCM: "84733049.0"
    }
  },
  {
    id: 14,
    nome: "WATER COOLER 120MM FORTREK BREEZY",
    categoria: "Water Cooler",
    condicao: "novo",
    preco: 239.00,
    imagem: "/products/14.jpg",
    descricao: "Water Cooler 120mm Fortrek Breezy",
    garantia: "12 meses",
    especificacoes: {
      Tamanho: "120mm",
      Marca: "Fortrek",
      NCM: "84195090.0"
    }
  },
  {
    id: 15,
    nome: "WATER COOLER 240MM FORTREK BREEZY",
    categoria: "Water Cooler",
    condicao: "novo",
    preco: 399.00,
    imagem: "/products/15.webp",
    descricao: "Water Cooler 240mm Fortrek Breezy",
    garantia: "12 meses",
    especificacoes: {
      Tamanho: "240mm",
      Marca: "Fortrek",
      NCM: "84195090.0"
    }
  },
  {
    id: 16,
    nome: "WATER COOLER 360MM FORTREK BREEZY",
    categoria: "Water Cooler",
    condicao: "novo",
    preco: 490.00,
    imagem: "/products/16.webp",
    descricao: "Water Cooler 360mm Fortrek Breezy",
    garantia: "12 meses",
    especificacoes: {
      Tamanho: "360mm",
      Marca: "Fortrek",
      NCM: "84195090.0"
    }
  },
  ,
  {
    id: 17,
    nome: "CABO DE DADOS IPHONE TIPO C 27W CB815",
    categoria: "Cabos",
    condicao: "novo",
    preco: 45.0,
    imagem: "/products/17.webp",
    descricao: "Cabo de dados para iPhone com conector Tipo C e 27W de potência.",
    garantia: "6 meses",
    especificacoes: {
      Compatibilidade: "iPhone",
      Conector: "Tipo C",
      Potência: "27W",
      Modelo: "CB815",
      NCM: "84733011.0"
    }
  }
];