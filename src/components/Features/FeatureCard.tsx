import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

import styles from "../Features/features.module.scss";

type Props = {
  title: string;
  icon: any;
  description: string;
};

export const FeatureCard = (props: Props) => {
  return (
    <Box className={styles.featuresCard}>
      <Box
        height={"100%"}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Flex alignItems={"center"} justifyContent="space-between">
            <Text
              sx={{
                color: "#fca51d",
              }}
              variant="h3"
            >
              {props.title}
            </Text>
            <Text
              sx={{
                color: "#fca51d",
              }}
            >
              {props.icon}
            </Text>
          </Flex>
          <Divider
            sx={{
              mt: 2,
              mb: 2,
            }}
          />
          <Text
            sx={{
              color: "#525f64",
            }}
            textAlign="justify"
          >
            {props.description}
          </Text>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button size="sm" variant={"outline"}>
            Read More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
