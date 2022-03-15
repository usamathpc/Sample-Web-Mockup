import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { MdAttachMoney } from "react-icons/md";

type Props = {
  title: string;
  icon: any;
  value: string;
};

export const StatsCard = (props: Props) => {
  return (
    <Box
      display={"flex"}
      flexDir="column"
      flex={1}
      justifyContent={"space-between"}
      height={"120px"}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      padding="15px"
      borderRadius={"10px"}
    >
      <Flex justifyContent={"space-between"} alignItems="center">
        <Text
          sx={{
            color: "#fca51d",
          }}
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
      <Divider />

      <Text
        sx={{
          color: "#525f64",
        }}
        fontSize={"4xl"}
        fontWeight="600"
        textAlign={"end"}
      >
        {props.value}
      </Text>
    </Box>
  );
};
