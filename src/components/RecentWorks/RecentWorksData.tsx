import { BsCalculator, BsNewspaper } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { MdAttachMoney, MdSettings } from "react-icons/md";
import { SiStatuspal } from "react-icons/si";

export const RecentWorksData = [
  {
    id: "1",
    title: "Sydney Metro",
    imageUrl: "/sydneyMetro.jpg",
    description:
      "MissionOS is deployed on the Sydney Metro Central Station Expansion. Maxwell GeoSystems is providing its cutting-edge Data Management system, MissionOS, for GLS Monitoring on the major construction works for Sydney Metros Central Station. Works consist of a new 27-metre deep metro station box next to the existing Central station precinct with about 6,000 tonnes of crushed rock excavated each week.",
    tags: ["Urban Metro 2", "Sydney", "Australia", "Metro Level 2"],
    stats: [
      {
        title: "Budget",
        icon: <MdAttachMoney />,
        value: "USD$ 1.5B",
      },
      {
        title: "Instruments",
        icon: <BsCalculator />,
        value: "7800",
      },
      {
        title: "Canvas Sheets",
        icon: <BsNewspaper />,
        value: "800",
      },
      {
        title: "Users",
        icon: <HiUser />,
        value: "89",
      },

      {
        title: "Instruments Records",
        icon: <BsCalculator />,
        value: "44M+",
      },
      {
        title: "Status",
        icon: <SiStatuspal />,
        value: "Ongoing",
      },
    ],
  },
  {
    id: "2",
    title: "Singapore Power Assets",
    imageUrl: "/singaporePower.jpg",
    description:
      "Maxwell GeoSystems in world's first partnering for Information Management on Singapore Power Mega Transmission Cable Project for Singapore Power Assets - NS & EW Cable Tunnels. Maxwell GeoSystems collaborated with Singapore Power Assets and contractors Samsung, Hyundai, Nishimatsu, SKEC to deliver 40km of deep tunnel and 18 shafts and connecting adits as part of an innovative partnering approach to information.",
    tags: ["Cable Tunnel", "Singapore", "Electrical", "Civil"],
    stats: [
      {
        title: "Budget",
        icon: <MdAttachMoney />,
        value: "USD$ 2B",
      },
      {
        title: "Instruments",
        icon: <BsCalculator />,
        value: "48000",
      },
      {
        title: "TBM Drives",
        icon: <MdSettings />,
        value: "15",
      },
      {
        title: "Users",
        icon: <HiUser />,
        value: "170",
      },

      {
        title: "Instrument Records",
        icon: <BsNewspaper />,
        value: "10M+",
      },
      {
        title: "Status",
        icon: <SiStatuspal />,
        value: "Ongoing",
      },
    ],
  },
  {
    id: "3",
    title: "Earls Court Demolition",
    imageUrl: "/earlsCourt.jpg",
    description: `During the Earls Court exhibition centre's demolition, MissionOS provided automated monitoring of neighbouring rail assets and any impact caused by the Supercrane removal of massive supporting beams. The Earls Court Masterplan will transform the former exhibition centre's site in west London, into a vibrant new district with thousands of new homes, retail and commercial development opportunities, enhanced transport infrastructure and a major new London park.`,
    tags: ["Demolition", "London", "United Kingdom", "Civil"],
    stats: [
      {
        title: "Budget",
        icon: <MdAttachMoney />,
        value: "USD$ 1B",
      },
      {
        title: "Instruments",
        icon: <BsCalculator />,
        value: "7800",
      },
      {
        title: "Canvas Sheets",
        icon: <BsNewspaper />,
        value: "800",
      },
      {
        title: "Users",
        icon: <HiUser />,
        value: "89",
      },

      {
        title: "Instruments Records",
        icon: <BsCalculator />,
        value: "44M+",
      },
      {
        title: "Status",
        icon: <SiStatuspal />,
        value: "Ongoing",
      },
    ],
  },
];
