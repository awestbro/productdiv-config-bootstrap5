import { LibraryConfigurationDefinition } from "productdiv";
import { utilityClasses } from "./utilityclasses";
import { templates } from "./templates";

export const BootstrapConfiguration: LibraryConfigurationDefinition = {
  treeViewIgnoreQuerySelectors: [
    "script",
    "style",
    "link",
    '[data-productdiv="true"]',
    "svg",
  ],
  utilityClasses,
  templates,
};
