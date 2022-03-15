import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BsLock } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import styles from "../../../styles/global.module.scss";
import { FeatureCard } from "./FeatureCard";

const Features = () => {
  return (
    <Box
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        maxWidth: "1280px",
        margin: "auto",
      }}
    >
      <Text
        sx={{
          mt: 10,
          mb: 5,
          color: "#525f64",
          borderBottom: "3px solid #f2b66d",
        }}
        className={styles.subHeading}
      >
        Mission OS Platform
      </Text>
      <Text
        sx={{
          mb: 10,
          color: "#525f64",
        }}
        textAlign="justify"
      >
        MissionOS is a bespoke software platform for the display and
        interpretation of construction data. The software utilises a robust,
        configurable, back-office database to process the construction data
        before displaying it on a fast, ultra-light web interface using toolsets
        to enable rapid interrogation anywhere that has an internet connection.
      </Text>
      <SimpleGrid columns={[1, 1, 2, 2, 4]} spacing="40px">
        <FeatureCard
          icon={<SiGoogleanalytics />}
          title="Cause/Effect Influence"
          description="By combining ground and environmental conditions in the same platform as the construction geometry and progress information, and being able to compare both to the instrument responses, provides a much higher level of insight into environmental response to construction and the behaviour of the temporary works in relation to design."
        />
        <FeatureCard
          icon={<MdOutlineSpaceDashboard />}
          title="Control of Process"
          description="MissionOS records technical data from the construction process including data logged equipment such as Tunnel Boring Machines, Drilling Jumbos and Piling Rigs.
          Comparing this data to instrument results and to design predictions allows the construction methods to be refined in real-time."
        />
        <FeatureCard
          icon={<GoSettings />}
          title="Risk Management"
          description="The MissionOS provides an effective interface for recording hazards linked to geographical locations and job activities. Organisation of this data enhances the risk assessment and classification process and allows mitigation methods to be tracked using the in-built blogging platform."
        />
        <FeatureCard
          icon={<BsLock />}
          title="Protection"
          description="Our clients rely on the MissionOS to manage instrumentation installed for the protection of assets influenced by construction processes. Building damage assessment can also be undertaken directly within the MissionOS. Filters and alarms are fully customisable and alarms can be directed to emails and SMS as well as to custom blogs."
        />
      </SimpleGrid>
    </Box>
  );
};

export default Features;
