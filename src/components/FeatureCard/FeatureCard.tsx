import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: string;
  icon: any;
  description: string;
};

export const FeatureCard = (props: Props) => {
  return (
    <Box
      style={{
        padding: 10,
        borderRadius: 10,
        boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
      }}
    >
      <Flex alignItems={"center"} justifyContent="space-between">
        <Text variant="h3">{props.title}</Text>
        {props.icon}
      </Flex>
      <Divider
        sx={{
          mt: 2,
          mb: 2,
        }}
      />
      <Text>{props.description}</Text>
    </Box>
  );
};
