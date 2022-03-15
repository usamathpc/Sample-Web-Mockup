import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import styles from "../../../styles/global.module.scss";
import RecentWorkComponent from "./RecentWorkComponent";
import { RecentWorksData } from "./RecentWorksData";

type Props = {};

export const RecentWorks = (props: Props) => {
  return (
    <Box
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        maxWidth: "1280px",
        margin: "auto",
        marginBottom: "100px",
      }}
    >
      <SimpleGrid columns={[1]} spacing={8}>
        <Box>
          <Text
            sx={{
              mt: 10,
              mb: 5,
              color: "#525f64",
              borderBottom: "3px solid #f2b66d",
            }}
            className={styles.subHeading}
          >
            Our Presence
          </Text>
          <Text
            sx={{
              mb: 10,
              color: "#525f64",
            }}
            textAlign="justify"
          >
            Maxwell GeoSystems has a proven track record of successfully
            accomplished projects and a demonstrable capability across a wide
            range of challenging environments. MissionOS systems and services
            from the period between 2010 and 2020 have total global project
            value of over USD$75 Billion.
          </Text>
          <img src="/projectsMap.png" />
        </Box>
        <Text
          sx={{
            color: "#525f64",
            borderBottom: "3px solid #f2b66d",
          }}
          className={styles.subHeading}
        >
          Selected Projects
        </Text>

        {RecentWorksData.map((data) => (
          <RecentWorkComponent
            key={data.id}
            description={data.description}
            imageUrl={data.imageUrl}
            stats={data.stats}
            tags={data.tags}
            title={data.title}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};
