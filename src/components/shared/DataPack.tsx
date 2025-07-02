import {
  Paper,
  Stack,
  Text,
  Radio,
  Group,
  Title,
  Divider,
  useMantineTheme,
  Box,
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
    <Paper withBorder p="xl" radius="md" bg="#F0F6F9">
      <Title order={4} mb="xs">
        Data Packs
      </Title>
      <Divider mb="md" color="primary.9" size="md" />

      <Stack
        gap="md"
        style={{
          maxHeight: "40vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {dataPacks.length === 0 ? (
          <Text c="dimmed" ta="center" mt="xl">
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
                backgroundColor: selectedIndex === idx ? "#d0ebff" : "#e7f5ff",
                border:
                  selectedIndex === idx
                    ? `2px solid ${theme.colors.primary[9]}`
                    : undefined,
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              <Group justify="space-between" wrap="wrap" gap="sm">
                <Group align="center" gap="sm" style={{ flex: 1, minWidth: 0 }}>
                  <Radio
                    checked={selectedIndex === idx}
                    onChange={() => onSelect(idx)}
                    value={String(idx)}
                    tabIndex={-1}
                    styles={
                      selectedIndex === idx
                        ? {
                            radio: {
                              backgroundColor: theme.colors.primary[9],
                            },
                          }
                        : undefined
                    }
                  />
                  <Box>
                    <Title order={4}>{pack.name}</Title>
                    <Title c="#A3A3A3" ml="auto" order={5}>
                      {pack.size} - {pack.duration}
                    </Title>
                  </Box>
                </Group>
                <Title c="primary.9" order={4}>
                  {pack.price}
                </Title>
              </Group>
            </Paper>
          ))
        )}
      </Stack>
    </Paper>
  );
};
