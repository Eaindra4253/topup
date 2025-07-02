import {
  Modal,
  Text,
  TextInput,
  Button,
  Stack,
  Title,
  Paper,
  Box,
  Divider,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { IconX } from "@tabler/icons-react";

interface OTPModalProps {
  opened: boolean;
  close: () => void;
}

export function OTPModal({ opened, close }: OTPModalProps) {
  const [otp, setOtp] = useState("");
  const [counter, setCounter] = useState(59);

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const navigate = useNavigate();

  useEffect(() => {
    if (opened) setCounter(59);
  }, [opened]);

  useEffect(() => {
    if (opened && counter > 0) {
      const timer = setInterval(() => setCounter((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [opened, counter]);

  const formattedCounter = `0:${counter.toString().padStart(2, "0")}`;
  const [otpError, setOtpError] = useState("");

  const handleVerify = () => {
    if (!otp.trim()) {
      setOtpError("OTP is required");
      return;
    }

    setOtpError("");
    close();
    navigate("/transaction-result", {
      state: {
        status: "success",
        transactionData: {
          topUpNumber: "09420033486",
          operator: "MPT",
          package: "E-load",
          amount: "1,000 Ks",
          fees: "Free",
          total: "1,000 Ks",
          transactionId: "1243410000470",
          date: new Date().toLocaleString(),
        },
      },
    });
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      withCloseButton={false}
      overlayProps={{ backgroundOpacity: 0.7 }}
      radius="lg"
      size={isMobile ? "90%" : "sm"}
      zIndex={3000}
    >
      <Paper radius="md" p={isMobile ? "md" : "lg"} shadow="sm">
        <Stack gap="lg">
          <Group justify="space-between">
            <Title order={4} c="primary.9">
              OTP Verification
            </Title>
            <Button variant="subtle" size="xs" p={4} onClick={close} c="dimmed">
              <IconX size={16} />
            </Button>
          </Group>
          <Divider />

          <Box bg="primary.0" p="sm">
            <Text size="sm" c="dimmed">
              Check your SMS, we have sent you the verification code at
              ******3486.
            </Text>
          </Box>

          <TextInput
            placeholder="Enter OTP"
            label="Enter OTP"
            value={otp}
            size="md"
            onChange={(e) => {
              setOtp(e.currentTarget.value);
              setOtpError("");
            }}
            labelProps={{ style: { marginBottom: "6px" } }}
            error={otpError}
          />

          <Text size="sm" c="dimmed">
            Resend OTP in{" "}
            <Text span c="blue">
              {formattedCounter} sec
            </Text>
          </Text>

          <Group justify="end">
            {counter === 0 ? (
              <Button
                size="md"
                variant="outline"
                color="blue"
                onClick={() => {
                  setCounter(59);
                  setOtp("");
                  setOtpError("");
                }}
              >
                Resend OTP
              </Button>
            ) : (
              <Button size="md" onClick={handleVerify} bg="primary.9">
                Verify
              </Button>
            )}
          </Group>
        </Stack>
      </Paper>
    </Modal>
  );
}
