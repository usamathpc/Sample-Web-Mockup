import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Container, useDisclosure } from "@chakra-ui/react";
import React from "react";
import styles from "../../../styles/global.module.scss";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type Props = {};

export const Header = (props: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const isLargerThan1280 = useMediaQuery("1280");
  console.log(isLargerThan1280);

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
              <img src="/logofull.webp" width={220} />

              <ul className={styles.headerNav}>
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
