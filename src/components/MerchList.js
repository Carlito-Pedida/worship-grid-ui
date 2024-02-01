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
    item_img: "",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "4",
    item_name: "Baseball Cap",
    price: 15.99,
    item_img: "",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "5",
    item_name: "3 Pack Guitar Picks",
    price: 6.99,
    item_img: "",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "6",
    item_name: "Premium Guitar Cable",
    price: 30.99,
    item_img: "",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "7",
    item_name: "Leather Guitar Strap",
    price: 24.99,
    item_img: "",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "8",
    item_name: "Snark Tuner",
    price: 44.99,
    item_img: "",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  },
  {
    merch_id: "9",
    item_name: "Electronic Metronome",
    price: 144.99,
    item_img: "",
    description: "Lorem ipsum dolor sit amet, ut labore et dolore magna aliqua."
  }
];

function getProductData(merch_id) {
  let merchItemData = MerchList.find((item) => item.id === merch_id);

  if (merchItemData == undefined) {
    console.log("Item not found!");
    return undefined;
  }
  return merchItemData;
}

export { MerchList, getProductData };
