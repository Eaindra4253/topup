import {
  Paper,
  SimpleGrid,
  Text,
  Title,
  Divider,
  useMantineTheme,
} from "@mantine/core";

type AmountCardsProps = {
  amounts: string[];
  selectedIndex: number | null;
  onSelect: (index: number) => void;
};

export const AmountCards = ({
  amounts,
  selectedIndex,
  onSelect,
}: AmountCardsProps) => {
  const theme = useMantineTheme();

  return (
    <Paper withBorder p="xl" radius="md" bg="primary.0">
      <Title order={5} mb="xs">
        Amount
      </Title>
      <Divider mb="md" color="primary.9" size="sm" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {amounts.map((amount, index) => (
          <Paper
            key={index}
            withBorder
            radius="md"
            h={40}
            p="sm"
            bg="primary.1"
            onClick={() => onSelect(index)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border:
                selectedIndex === index
                  ? `2px solid ${theme.colors.primary[9]}`
                  : undefined,
              cursor: "pointer",
            }}
          >
            <Text c="primary.9" size="xs" ta="center">
              {amount}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Paper>
  );
};
