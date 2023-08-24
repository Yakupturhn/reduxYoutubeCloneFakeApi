import React from "react";
import icons from "../icon"; // 'icons' modülünü doğru bir şekilde içe aktarın

const dataSide = [
  {
    icon: <icons.home className="icon-style" />, // Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Ana Sayfa",
  },
  {
    icon: <icons.compass className="icon-style" />, // Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Kesfet",
  },
  {
    icon: <icons.compass className="icon-style" />, // Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Shorts",
  },
  {
    icon: <icons.subscription className="icon-style" />, // Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Abonelikler",
  },
  {
    icon: <icons.play className="icon-style" />, // Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Kitaplik",
  },
  {
    icon: <icons.clock className="icon-style" />, // Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Gecmis",
  },
  {
    icon: <icons.play className="icon-style" />, // Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Videolariniz",
  },
  {
    icon: <icons.like className="icon-style" />, // Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Begendigim Videolar",
  },
  {
    icon: <icons.down className="icon-style" />, // Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Daha Fazla Göster",
  },
  {
    icon: <icons.game className="icon-style" />, // "age" yerine "game"i kullanın, Class adı için '=' kullanmayın, doğrudan kullanın
    name: "Oyun",
  },
];

export default dataSide; // dataSide'i dışa aktarın, diğer bileşenlerde kullanmak için
