import React from "react";

const MerchList = [
  {
    merch_id: "1",
    item_name: "T-Shirt",
    price: 19.99,
    item_img: "https://m.media-amazon.com/images/I/51zCzO-nx4L._AC_SL1024_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "2",
    item_name: "Trucker Hat",
    price: 7.99,
    item_img: "https://m.media-amazon.com/images/I/911rtWKWF+L._AC_SL1500_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "3",
    item_name: "Jacket",
    price: 29.99,
    item_img: "https://m.media-amazon.com/images/I/41bDKVFGzmL._AC_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "4",
    item_name: "Baseball Cap",
    price: 15.99,
    item_img: "https://m.media-amazon.com/images/I/616lMWyIMHS._AC_SL1500_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "5",
    item_name: "3 Pack Guitar Picks",
    price: 13.99,
    item_img: "https://m.media-amazon.com/images/I/71uUs1V5jTL._AC_SX679_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "6",
    item_name: "Premium Guitar Cable",
    price: 30.99,
    item_img: "https://m.media-amazon.com/images/I/71ivgeiqfcL._SX522_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "7",
    item_name: "Leather Guitar Strap",
    price: 24.99,
    item_img:
      "https://m.media-amazon.com/images/I/61Tf54rRyGL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "8",
    item_name: "Snark Tuner",
    price: 12.99,
    item_img:
      "https://m.media-amazon.com/images/I/61kn7CGDT1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "9",
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
