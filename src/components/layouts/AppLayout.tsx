import { AppShell, Box } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";

export const AppLayout = () => {
  return (
    <AppShell padding="md" header={{ height: 100 }}>
      <AppShell.Header bg="primary.9">
        <AppHeader />
      </AppShell.Header>

      <AppShell.Main>
        <Box
          pos="absolute"
          top={{ base: 50, sm: 60, md: 80 }}
          left="50%"
          px={{ base: "1rem", sm: "2rem", md: "4rem" }}
          style={{
            transform: "translate(-50%, 0)",
            zIndex: 1000,
            width: "92%",
          }}
        >
          <Outlet />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};
