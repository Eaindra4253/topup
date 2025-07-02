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
    <Paper withBorder p="xl" radius="sm" bg="#F0F6F9">
      <Title order={4} mb="xs">
        Amount
      </Title>
      <Divider mb="50" color="primary.9" size="md" />
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {amounts.map((amount, index) => (
          <Paper
            key={index}
            withBorder
            radius="sm"
            h={40}
            p="lg"
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
            <Text c="primary.9" size="md" ta="center" fw={600}>
              {amount}
            </Text>
          </Paper>
        ))}
      </SimpleGrid>
    </Paper>
  );
};

