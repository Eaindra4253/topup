import { Paper, Text, Group, Button, Stack, Box, Divider, Center } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { OTPModal } from "../../modal/OtpModal";

interface TransactionData {
  topUpNumber: string;
  operator: string;
  package: string;
  amount: string;
  fees: string;
  total: string;
}

export default function ConfirmationTransaction() {
  const location = useLocation();
  const navigate = useNavigate();

  const [opened, { open, close }] = useDisclosure(false);

  const transactionData = location.state as TransactionData;

  if (!transactionData) {
    return (
      <Box
        px={{ base: "1rem", sm: "2rem", md: "4rem" }}
        pt={{ base: 80, sm: 100, md: 120 }}
      >
        <Text ta="center" size="lg" c="red">
          No transaction data found.
        </Text>
      </Box>
    );
  }

  const transactionItems = [
    { label: "Top Up Number", value: transactionData.topUpNumber },
    { label: "Operator", value: transactionData.operator },
    { label: "Package", value: transactionData.package },
    { label: "Amount", value: transactionData.amount },
    { label: "Fees & Charges", value: transactionData.fees, color: "green" },
  ];

return (
    <>
      <Paper radius="lg" shadow="lg" pt={24} mt={0}>
        <Box bg="primary.0" p="xs" m="xs">
          <Text c="primary.9" ta="center">
            Confirm transaction details
          </Text>
        </Box>
 
        <Center>
          <Paper p="xl" w="100%" maw={500} mx="auto" bg="#FBFCFD" shadow="none">
            <Stack gap="md" p={{ base: "md", sm: "xl" }}>
              {transactionItems.map((item, idx) => (
                <Group key={idx} justify="space-between">
                  <Text c="dimmed" size="sm">
                    {item.label}
                  </Text>
                  <Text fw={500} c={item.color}>
                    {item.value}
                  </Text>
                </Group>
              ))}
 
              <Divider />
 
              <Group justify="space-between">
                <Text fw={600}>Total</Text>
                <Text c="#1565c0" fw={700} size="lg">
                  {transactionData.total}
                </Text>
              </Group>
            </Stack>
          </Paper>
        </Center>
 
        <Group
          justify="end"
          gap="md"
          p={20}
          mt={{ base: 40, sm: 80 }}
          wrap="wrap"
        >
          <Button
            variant="light"
            size="md"
            px="xl"
            onClick={() => navigate(-1)}
            c="primary.9"
          >
            Back
          </Button>
          <Button size="md" px="xl" onClick={open} bg="primary.9">
            Next
          </Button>
        </Group>
      </Paper>
      <OTPModal opened={opened} close={close} />
    </>
  );
}
 
 

