import MptLogo from "@/assets/mpt.png";
import OoredooLogo from "@/assets/ooredoo.png";
import MytelLogo from "@/assets/mytel.png";
import AtomLogo from "@/assets/atom.png";
import MectelLogo from "@/assets/mectel.png";

export const operators = [
  { id: "mpt", name: "MPT", logo: MptLogo },
  { id: "ooredoo", name: "Ooredoo", logo: OoredooLogo },
  { id: "mytel", name: "Mytel", logo: MytelLogo },
  { id: "atom", name: "Atom", logo: AtomLogo },
  { id: "mectel", name: "Mectel", logo: MectelLogo },
];

export const amounts = [
  "10,000",
  "10,000",
  "10,000",
  "10,000",
  "10,000",
  "10,000",
];

export const dataPacksByOperator: Record<
  string,
  { name: string; size: string; duration: string; price: string }[]
> = {
  mpt: [
    {
      name: "Shal Suboo 480 MB",
      size: "480 MB",
      duration: "30 Days",
      price: "999 Ks",
    },
    {
      name: "Shal Suboo 1 GB",
      size: "1 GB",
      duration: "15 Days",
      price: "1999 Ks",
    },
    // {
    //   name: "Shal Suboo 480 MB",
    //   size: "480 MB",
    //   duration: "30 Days",
    //   price: "999 Ks",
    // },
    // {
    //   name: "Shal Suboo 1 GB",
    //   size: "1 GB",
    //   duration: "15 Days",
    //   price: "1999 Ks",
    // },
    // {
    //   name: "Shal Suboo 480 MB",
    //   size: "480 MB",
    //   duration: "30 Days",
    //   price: "999 Ks",
    // },
    // {
    //   name: "Shal Suboo 1 GB",
    //   size: "1 GB",
    //   duration: "15 Days",
    //   price: "1999 Ks",
    // },
    // {
    //   name: "Shal Suboo 480 MB",
    //   size: "480 MB",
    //   duration: "30 Days",
    //   price: "999 Ks",
    // },
    // {
    //   name: "Shal Suboo 1 GB",
    //   size: "1 GB",
    //   duration: "15 Days",
    //   price: "1999 Ks",
    // },
  ],
  ooredoo: [
    {
      name: "Ooredoo Pack 500 MB",
      size: "500 MB",
      duration: "30 Days",
      price: "1099 Ks",
    },
    {
      name: "Ooredoo Pack 2 GB",
      size: "2 GB",
      duration: "15 Days",
      price: "2999 Ks",
    },
  ],
  mytel: [],
  atom: [],
  mectel: [],
};
