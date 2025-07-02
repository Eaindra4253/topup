import {
  Box,
  Button,
  Center,
  Paper,
  Stack,
  Text,
  Divider,
  Group,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";

export function TransactionResult() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state || {};
  const {
    status = "fail",
    transactionData = {},
  }: {
    status?: "success" | "fail";
    transactionData?: {
      topUpNumber?: string;
      operator?: string;
      package?: string;
      amount?: string;
      fees?: string;
      total?: string;
      transactionId?: string;
      date?: string;
    };
  } = state;

  const {
    topUpNumber = "N/A",
    operator = "N/A",
    package: pkg = "N/A",
    amount = "N/A",
    fees = "N/A",
    total = "N/A",
    transactionId = "N/A",
    date = "N/A",
  } = transactionData;

  const isSuccess = status === "success";

  return (
    <Paper shadow="lg" radius="lg" p="xl">
      <Stack>
        <Box
          bg={isSuccess ? "green.1" : "red.1"}
          p="sm"
          mb="md"
          style={{ border: `1px solid ${isSuccess ? "#2ecc71" : "#e74c3c"}` }}
        >
          <Text fw={600} ta="center" c={isSuccess ? "green.7" : "red.7"}>
            {isSuccess ? "Transaction Successful" : "Transaction Failed"}
          </Text>
        </Box>

        <Center mb="md">
          <ThemeIcon
            radius="xl"
            size="lg"
            color={isSuccess ? "green" : "red"}
            variant={isSuccess ? "filled" : "outline"}
          >
            {isSuccess ? <IconCheck size={24} /> : <IconX size={24} />}
          </ThemeIcon>
        </Center>
        <Center>
          <Paper
            shadow="xs"
            p="xl"
            bg={isSuccess ? "green.1" : "red.1"} 
            w="100%"
            maw={500}
            mx="auto"
            style={{
              border: `1px solid ${isSuccess ? "#2ecc71" : "#e74c3c"}`,
            }}
          >
            <Stack gap="lg" align="start">
              <TransactionRow label="Top Up Number" value={topUpNumber} />
              <TransactionRow label="Operator" value={operator} />
              <TransactionRow label="Package" value={pkg} />
              <TransactionRow label="Amount" value={amount} />
              <TransactionRow
                label="Fees & Charges"
                value={fees}
                valueColor={fees === "Free" ? "green" : undefined}
              />
              <TransactionRow
                label="Total"
                value={total}
                valueColor={isSuccess ? "green" : "red"} // ✅ dynamic color
                bold
              />
              <Divider size="md" color="primary.9" />
              <TransactionRow
                label="Transaction ID"
                value={transactionId}
                isLink
              />
              <TransactionRow label="Date and Time" value={date} isLink />
            </Stack>
          </Paper>
        </Center>

        <Group justify="end">
          <Button mt="xl" onClick={() => navigate("/")} bg="primary.9">
            Finish
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
}

function TransactionRow({
  label,
  value,
  valueColor,
  bold,
  isLink = false,
}: {
  label: string;
  value: string;
  valueColor?: string;
  bold?: boolean;
  isLink?: boolean;
}) {
  return (
    <Group justify="space-between" w="100%" wrap="nowrap">
      <Text c="gray.7" size="sm">
        {label}
      </Text>
      <Text
        size="sm"
        fw={bold ? 600 : 400}
        c={valueColor}
        component={isLink ? "a" : "span"}
        href={isLink ? "#" : undefined}
        style={isLink ? { textDecoration: "none" } : undefined}
      >
        {value}
      </Text>
    </Group>
  );
}
