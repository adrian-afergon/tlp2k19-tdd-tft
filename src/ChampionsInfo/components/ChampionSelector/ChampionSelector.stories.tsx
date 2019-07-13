import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import * as React from "react";
import { ChampionSelector } from "./ChampionSelector";
import { Champion } from "../../models/Champion";

const someChampions: Champion[] = [];

storiesOf("ChampionSelector", module).add("with text", () => (
  <ChampionSelector champions={someChampions} onSelect={action("clicked")} />
));
