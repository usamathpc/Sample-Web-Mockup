import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { FeatureCard } from "../FeatureCard/FeatureCard";

import { SiGoogleanalytics } from "react-icons/si";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GoSettings } from "react-icons/go";
import styles from "./features.module.scss";

const Features = () => {
  return (
    <SimpleGrid className={styles.features} columns={[1, 2, 4]} spacing="40px">
      <FeatureCard
        icon={<SiGoogleanalytics />}
        title="Fast Analytics"
        description="Connect and visualise your data in minutes. The MissionOS system is significantly faster than existing solutions. Monitor your data feeds in real-time."
      />
      <FeatureCard
        icon={<MdOutlineSpaceDashboard />}
        title="Smart Dashboards"
        description="Combine multiple views of data to gain a richer insight. Best practices of data visualisation are built-in."
      />
      <FeatureCard
        icon={<GoSettings />}
        title="Configurable"
        description="Utilise the 100% configurable MissionOS user-interface, gain access to a library of templates & customisation tools."
      />
      <FeatureCard
        icon={<GoSettings />}
        title="Configurable"
        description="Utilise the 100% configurable MissionOS user-interface, gain access to a library of templates & customisation tools."
      />
    </SimpleGrid>
  );
};

export default Features;
