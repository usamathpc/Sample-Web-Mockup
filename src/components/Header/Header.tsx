import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { SiAbbrobotstudio } from "react-icons/si";
import styles from "../../../styles/global.module.scss";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import headerStyles from "./header.module.scss";

type Props = {};

export const Header = (props: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const [activeTab, setActiveTab] = React.useState("Home");
  const isLargerThan1280 = useMediaQuery("900");

  const menus = ["Home", "MissionOS", "Applications"];

  return (
    <Box>
      {isLargerThan1280 ? (
        <Box
          style={{
            boxShadow: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
            position: "fixed",
            top: 0,
            zIndex: 999,
            width: `100%`,
            backgroundColor: "white",
          }}
        >
          <Container maxW={"container.xl"}>
            <Box className={styles.header}>
              <Box display={"flex"} alignItems="center">
                <img src="/logofull.webp" width={220} />

                <ul className={styles.headerNav}>
                  {menus.map((menu) => (
                    <li
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
            {menus.map((menu, index) => (
              <li className={styles.mobileMenuItem} key={index}>
                {menu}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};
