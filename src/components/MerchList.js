import React from "react";

const MerchList = [
  {
    merch_id: "price_1OfVERAMxlRLSrsxQu49vmof",
    item_name: "T-Shirt",
    price: 19.99,
    item_img: "https://m.media-amazon.com/images/I/51zCzO-nx4L._AC_SL1024_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "price_1OfVF6AMxlRLSrsxmkYJk140",
    item_name: "Trucker Hat",
    price: 7.99,
    item_img: "https://m.media-amazon.com/images/I/911rtWKWF+L._AC_SL1500_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "price_1OfVFNAMxlRLSrsx0WYylB4X",
    item_name: "Jacket",
    price: 29.99,
    item_img: "https://m.media-amazon.com/images/I/41bDKVFGzmL._AC_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "price_1OfVFmAMxlRLSrsx1rbQhYHI",
    item_name: "Baseball Cap",
    price: 15.99,
    item_img: "https://m.media-amazon.com/images/I/616lMWyIMHS._AC_SL1500_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "price_1OfVGGAMxlRLSrsxGYklSKFm",
    item_name: "3 Pack Guitar Picks",
    price: 13.99,
    item_img: "https://m.media-amazon.com/images/I/71uUs1V5jTL._AC_SX679_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "price_1OfVGjAMxlRLSrsxYViK0yrR",
    item_name: "Premium Guitar Cable",
    price: 30.99,
    item_img: "https://m.media-amazon.com/images/I/71ivgeiqfcL._SX522_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "price_1OfVH7AMxlRLSrsxFIThy1ya",
    item_name: "Leather Guitar Strap",
    price: 24.99,
    item_img:
      "https://m.media-amazon.com/images/I/61Tf54rRyGL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "price_1OfVHSAMxlRLSrsxRdpVBsq4",
    item_name: "Snark Tuner",
    price: 12.99,
    item_img:
      "https://m.media-amazon.com/images/I/61kn7CGDT1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "price_1OfVHtAMxlRLSrsxu5V23I6C",
    item_name: "Electronic Metronome",
    price: 19.99,
    item_img:
      "https://m.media-amazon.com/images/I/81sxZDyskwL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  }
];

function getProductData(merch_id) {
  let merchItemData = MerchList.find((item) => item.merch_id === merch_id);

  if (merchItemData == undefined) {
    console.log("Item not found!");
    return undefined;
  }
  return merchItemData;
}

export { MerchList, getProductData };
