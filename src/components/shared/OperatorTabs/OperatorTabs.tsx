import { Box, Image, Tabs } from "@mantine/core";
import { operators } from "../../../constants/operator";
import classes from "../OperatorTabs/OperatorTabs.module.css";
import clsx from "clsx";

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

export const OperatorTabs = ({ selectedId, onSelect, disabled }: Props) => {
  return (
    <Tabs
      value={selectedId ?? ""}
      onChange={(value) => {
        if (!disabled) {
          onSelect(value ?? "");
        }
      }}
      variant="pills"
    >
      <Tabs.List className={classes.list}>
        {operators.map((operator) => (
          <Box key={operator.id} className={classes.itemWrapper}>
            <Tabs.Tab
              value={operator.id}
              className={clsx(classes.tab, {
                [classes.selected]: selectedId === operator.id,
              })}
            >
              <Image
                src={operator.logo}
                alt={operator.name}
                width={50}
                height={50}
                fit="contain"
              />
            </Tabs.Tab>
            <span className={classes.tabLabel}>{operator.name}</span>
          </Box>
        ))}
      </Tabs.List>
    </Tabs>
  );
};
