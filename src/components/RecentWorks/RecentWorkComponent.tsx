import React from "react";
import { Box, Divider, Flex, SimpleGrid, Tag, Text } from "@chakra-ui/react";
import { MdAttachMoney } from "react-icons/md";
import styles from "./styles.module.scss";
import { StatsCard } from "./StatsCard";

import { useMediaQuery } from "../../hooks/useMediaQuery";

type Props = {};

export const RecentWorkComponent = (props: Props) => {
  const isGreaterThan900px = useMediaQuery("900");
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box className={styles.recentWorksItemImageContainer}>
        <img src="/sydneyMetro.jpg" className={styles.recentWorksItemImage} />
        <Text className={styles.recentWorksItemTitle}>Sydney Metro</Text>
      </Box>
      <Box className={styles.recentWorksItemDataContainer}>
        <Text className={styles.recentWorksItemTitleForSmallScreen}>
          Sydney Metro
        </Text>
        <Box display={"flex"} justifyContent="flex-end">
          <Tag size={isGreaterThan900px ? "lg" : "sm"} ml={2}>
            Excavation
          </Tag>
          <Tag ml={2}>Sydney</Tag>
          <Tag ml={2}>Australia</Tag>
          <Tag ml={2}>Metro Level 2</Tag>
        </Box>

        <Box className={styles.recentWorksItemDescriptionContainer}>
          <Text className={styles.recentWorksItemDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quidem ab molestiae impedit eveniet explicabo. Doloribus sunt
            placeat minus natus commodi laboriosam delectus. Exercitationem eius
            iusto facere tempora optio pariatur?
          </Text>
          <Box className={styles.recentWorksItemTags}>
            <SimpleGrid columns={[1, 1, 3, 3, 3]} spacing={5}>
              <StatsCard
                icon={<MdAttachMoney />}
                title="Budget"
                value="1 Billion"
              />
              <StatsCard
                icon={<MdAttachMoney />}
                title="Instruments Monitoring"
                value="7500+"
              />
              <StatsCard
                icon={<MdAttachMoney />}
                title="Instruments Records"
                value="44M+"
              />
              <StatsCard
                icon={<MdAttachMoney />}
                title="Monitoring Reports"
                value="40+ Daily"
              />
              <StatsCard
                icon={<MdAttachMoney />}
                title="Instruments Records"
                value="44M+"
              />
              <StatsCard
                icon={<MdAttachMoney />}
                title="Monitoring Reports"
                value="40+ Daily"
              />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentWorkComponent;
