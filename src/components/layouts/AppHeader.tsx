import Logo from "@/assets/Dotted.png";
import { Box, Group, Image, Title } from "@mantine/core";

export const AppHeader = () => {
  return (
    <Group justify="space-between" align="center" px="md" h="100%">
      <Group align="center" gap={0}>
        <Image src={Logo} alt="Bill Payment Logo" w={60} h={40} />
        <Box
          ml={{ base: "1rem", sm: "2rem", md: "3rem", lg: "4rem" }}
          mb={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
        >
          <Title order={4} c="white">
            Mobile TopUp
          </Title>
        </Box>
      </Group>
      <Image src={Logo} alt="Bill Payment Logo" w={60} h={40} />
    </Group>
  );
};

