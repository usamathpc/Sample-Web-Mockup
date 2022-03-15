import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
} from "@chakra-ui/react";

export const theme = extendTheme(
  {
    fonts: {
      heading: "Lato, sans-serif",
      body: "Lato, sans-serif",
      //   body: "",
    },
    colors: {
      brand: {
        "50": "#FFF5E6",
        "100": "#FEE3B9",
        "200": "#FDD18B",
        "300": "#FDBF5E",
        "400": "#FCAD31",
        "500": "#FC9B03",
        "600": "#C97C03",
        "700": "#975D02",
        "800": "#653E01",
        "900": "#321F01",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);
