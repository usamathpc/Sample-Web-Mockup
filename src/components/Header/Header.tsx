import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/global.module.scss";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type Props = {};

export const Header = (props: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const [activeTab, setActiveTab] = React.useState("Home");
  const [hoveringTab, setHoveringTab] = React.useState("");
  const isLargerThan1280 = useMediaQuery("1280");
  console.log(isLargerThan1280);

  const menus = ["Home", "MissionOS", "Applications", "Projects", "Services"];

  const MissionOS = [
    "Mission Monitor",
    "Mission Designer",
    "Mission Site",
    "Mission Builder",
    "Mission Enterprise",
  ];

  const Applications = [
    "Bridges",
    "Dams",
    "Excavation",
    "Reclamation",
    "Buildings",
    "Slopes",
    "Mining",
    "Tunnels",
    "Asset Management",
  ];

  const Projects = [
    {
      name: "Hinkley Point C",
      location: "UK",
      type: "Excavation",
    },
    {
      name: "Sydney Metro",
      location: "AUS",
      type: "Urban Metro 3",
    },
    {
      name: "Melbourne Metro",
      location: "AUS",
      type: "Urban Metro 2",
    },
    {
      name: `Earl's Court`,
      location: "UK",
      type: "Demolition",
    },
    {
      name: `DTSS2`,
      location: "SGP",
      type: "Urban Sewer",
    },
  ];

  const Services = [
    "Software",
    "Consultancy",
    "Measurements",
    "Project Management",
  ];

  const ServicePartners = ["EtherTerra -- Intelligent Instrumentation"];

  return (
    <Box>
      {isLargerThan1280 ? (
        <Box
          style={{
            boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
          }}
        >
          <Container maxW={"container.xl"}>
            <Box className={styles.header}>
              <Box display={"flex"} alignItems="center">
                <img src="/logofull.webp" width={220} />

                <ul className={styles.headerNav}>
                  {menus.map((menu) => (
                    <li
                      onMouseEnter={() => {
                        console.log(`changed to ${menu}`);

                        setHoveringTab(menu);
                      }}
                      key={menu}
                      className={
                        activeTab === menu
                          ? styles.headerNavItemActive
                          : styles.headerNavItem
                      }
                    >
                      <a
                        href={`/${menu.toLowerCase()}`}
                        onClick={() => {
                          setActiveTab(menu);
                        }}
                      >
                        {menu}
                      </a>
                    </li>
                  ))}
                  <div
                    className={
                      hoveringTab === "Home"
                        ? styles.headerNavHomeHover
                        : hoveringTab === "MissionOS"
                        ? styles.headerNavMissionOSHover
                        : hoveringTab === "Applications"
                        ? styles.headerNavApplicationsHover
                        : hoveringTab === "Projects"
                        ? styles.headerNavProjectsHover
                        : hoveringTab === "Services"
                        ? styles.headerNavServicesHover
                        : styles.headerNavItem
                    }
                  >
                    {hoveringTab}
                  </div>
                </ul>
              </Box>
              <Button>Sign Up</Button>
            </Box>
          </Container>
        </Box>
      ) : (
        <Box
          className={
            isOpen ? styles.mobileHeaderOpen : styles.mobileHeaderClosed
          }
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
            }}
          >
            <img src="/log.png" width={50} />

            <HamburgerIcon
              sx={{
                color: styles.maxwellOrange,
                fontSize: "2rem",
                pr: 2,
              }}
              onClick={() => {
                onToggle();
              }}
            />
          </Box>

          <ul
            className={
              isOpen ? styles.mobileHeaderNavOpen : styles.mobileHeaderNavClosed
            }
          >
            <li>Home</li>
            <li>MissionOS</li>
            <li>Applications</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Media Hub</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
        </Box>
      )}
    </Box>
  );
};
