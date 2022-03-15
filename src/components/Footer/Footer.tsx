import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import styles from "./footer.module.scss";

const Footer = () => {
  const MediaHub = [
    "News Hub",
    "FAQs Hub",
    "Press Hub",
    "Videos Hub",
    "Careers Hub",
  ];

  const About = ["Our Company", "Our Vision", "Our Mission", "Our Core Values"];

  const OurTeam = ["Leadership", "Advisory", "Partners"];

  const SocialLinks = ["Facebook", "Twitter", "Instagram", "LinkedIn"];

  return (
    <Box
      sx={{
        bg: "#222222",
        mt: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingRight: "20px",
          paddingLeft: "20px",
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        <SimpleGrid
          className={styles.footerMain}
          width={"100%"}
          columns={[1, 1, 1, 1, 2, 2]}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
            }}
          >
            <SimpleGrid width={"100%"} columns={[1, 4]}>
              <Box
                sx={{
                  flex: 1,
                  paddingTop: "6rem",
                }}
              >
                <Text className={styles.footerTitle} color={"#fca51d"}>
                  Media Hub{" "}
                </Text>
                {MediaHub.map((item, index) => (
                  <Text
                    key={index}
                    sx={{
                      color: "#f7f7f7",
                      p: 1,
                    }}
                    className={styles.footerItem}
                  >
                    {item}
                  </Text>
                ))}
              </Box>
              <Box
                sx={{
                  flex: 1,
                  paddingTop: "6rem",
                }}
              >
                <Text className={styles.footerTitle} color={"#fca51d"}>
                  About
                </Text>
                {About.map((item, index) => (
                  <Text
                    key={index}
                    sx={{
                      color: "#f7f7f7",
                      p: 1,
                    }}
                    className={styles.footerItem}
                  >
                    {item}
                  </Text>
                ))}
              </Box>
              <Box
                sx={{
                  flex: 1,
                  paddingTop: "6rem",
                }}
              >
                <Text className={styles.footerTitle} color={"#fca51d"}>
                  Our Team
                </Text>
                {OurTeam.map((item, index) => (
                  <Text
                    key={index}
                    sx={{
                      color: "#f7f7f7",
                      p: 1,
                    }}
                    className={styles.footerItem}
                  >
                    {item}
                  </Text>
                ))}
              </Box>
              <Box
                sx={{
                  flex: 1,
                  paddingTop: "6rem",
                }}
              >
                <Text className={styles.footerTitle} color={"#fca51d"}>
                  Social
                </Text>
                {SocialLinks.map((item, index) => (
                  <Text
                    key={index}
                    sx={{
                      color: "#f7f7f7",
                      p: 1,
                    }}
                    className={styles.footerItem}
                  >
                    {item}
                  </Text>
                ))}
              </Box>
            </SimpleGrid>
          </Box>
          <Box className={styles.contactUsContainer}>
            <Box width={"100%"}>
              <Text className={styles.contactUsText}>Contact Us</Text>
              <Box className={styles.contactUs}>
                <VStack spacing={5}>
                  <FormControl>
                    <FormLabel>Your Name</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<BsPerson color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mail</FormLabel>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<MdOutlineEmail color="gray.800" />}
                      />
                      <Input type="text" size="md" />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="message" />
                  </FormControl>
                  <FormControl>
                    <Button variant="solid" color="white">
                      Send Message
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        style={{
          marginTop: "60px",
        }}
      >
        <Text
          sx={{
            color: "#f7f7f7",
            p: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className={styles.copyright}
        >
          {`Copyright © ${new Date().getFullYear()} MGS. All rights reserved.`}
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
