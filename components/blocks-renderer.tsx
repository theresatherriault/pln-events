import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { Feature } from "./blocks/feature";
import { Embed } from "./blocks/embed";
import { TailwindFeature } from "./blocks/tailwind-feature";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PageBlocksFeature":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksEmbed":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Embed data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksTailwindFeature":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <TailwindFeature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
