import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./hero.module.scss";

const Hero = () => {
  const isLargerThan1280 = useMediaQuery("1280");
  const isLargerThan950 = useMediaQuery("950");
  const isLargerThan600 = useMediaQuery("600");

  return (
    <div className={styles.videoContainer}>
      <video src="/hero.webm" loop autoPlay muted />
      <div className={styles.videoOverlay}>
        <div>
          <h1 className={styles.heroText}>
            Software Solutions <br />
            <span>For Construction Data</span>
          </h1>
          {isLargerThan950 && (
            <p
              style={{
                fontSize: isLargerThan1280
                  ? "1.5rem"
                  : isLargerThan950
                  ? "1.2rem"
                  : "1rem",
              }}
            >
              We provide world-leading, industry standard software platforms
              <br /> for the display and interpretation of construction data.
            </p>
          )}
          <Button
            size={isLargerThan1280 ? "lg" : isLargerThan950 ? "md" : "sm"}
            sx={{
              mt: 10,
              backgroundColor: "#f2b66d",
            }}
          >
            Discover Mission OS
          </Button>
          <Button
            size={isLargerThan1280 ? "lg" : isLargerThan950 ? "md" : "sm"}
            variant={"outline"}
            borderColor={"#f2b66d"}
            color={"#f2b66d"}
            sx={{
              mt: 10,
              ml: 5,
              // backgroundColor: "#f2b66d",
            }}
          >
            Request Product Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
