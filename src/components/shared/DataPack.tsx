import {
  Paper,
  Stack,
  Text,
  Radio,
  Group,
  Title,
  Divider,
  useMantineTheme,
} from "@mantine/core";

type DataPack = {
  name: string;
  size: string;
  duration: string;
  price: string;
};

type DataPackCardsProps = {
  dataPacks: DataPack[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
};

export const DataPackCards = ({
  dataPacks,
  selectedIndex,
  onSelect,
}: DataPackCardsProps) => {
  const theme = useMantineTheme();

  return (
    <Paper withBorder p="xl" radius="md" bg="primary.0">
      <Title order={5} mb="xs">
        Data Packs
      </Title>
      <Divider mb="md" color="primary.9" size="sm" />

      <div>
        <Stack gap="md">
          {dataPacks.length === 0 ? (
            <Text c="dimmed" ta="center">
              No Data Packs Available
            </Text>
          ) : (
            dataPacks.map((pack, idx) => (
              <Paper
                key={idx}
                withBorder
                p="md"
                bg="primary.1"
                onClick={() => onSelect(idx)}
                style={{
                  backgroundColor:
                    selectedIndex === idx ? "#d0ebff" : "#e7f5ff",
                  borderColor:
                    selectedIndex === idx ? theme.colors.primary[5] : "#d0d7de",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                <Group justify="space-between" wrap="wrap" gap="sm">
                  <Group
                    align="center"
                    gap="sm"
                    style={{ flex: 1, minWidth: 0 }}
                  >
                    <Radio
                      checked={selectedIndex === idx}
                      onChange={() => onSelect(idx)}
                      value={String(idx)}
                      tabIndex={-1}
                    />
                    <div>
                      <Text fw={600}>{pack.name}</Text>
                      <Text size="xs" c="dimmed">
                        {pack.size} - {pack.duration}
                      </Text>
                    </div>
                  </Group>
                  <Text fw={700} c="blue" ml="auto">
                    {pack.price}
                  </Text>
                </Group>
              </Paper>
            ))
          )}
        </Stack>
      </div>
    </Paper>
  );
};
