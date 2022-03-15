import { Box, SimpleGrid, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import styles from "./recentworks.module.scss";
import { StatsCard } from "./StatsCard";

interface StatsCard {
  title: string;
  icon: any;
  value: string;
}

type Props = {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  stats: StatsCard[];
};

export const RecentWorkComponent = (props: Props) => {
  const isGreaterThan900px = useMediaQuery("900");
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box className={styles.recentWorksItemImageContainer}>
        <img src={props.imageUrl} className={styles.recentWorksItemImage} />
        <Text className={styles.recentWorksItemTitle}>{props.title}</Text>
      </Box>
      <Box className={styles.recentWorksItemDataContainer}>
        <Text className={styles.recentWorksItemTitleForSmallScreen}>
          {props.title}
        </Text>
        <Box display={"flex"} justifyContent="flex-end">
          {props.tags.map((tag, index) => (
            <Tag key={index} size={isGreaterThan900px ? "lg" : "sm"} ml={2}>
              {tag}
            </Tag>
          ))}
        </Box>

        <Box className={styles.recentWorksItemDescriptionContainer}>
          <Text className={styles.recentWorksItemDescription}>
            {props.description}
          </Text>
          <Box className={styles.recentWorksItemTags}>
            <SimpleGrid columns={[1, 1, 3, 3, 3]} spacing={5}>
              {props.stats.map((stat, index) => (
                <StatsCard
                  key={index}
                  title={stat.title}
                  icon={stat.icon}
                  value={stat.value}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentWorkComponent;
