import { useState } from "react";
import {
  Button,
  Center,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { MobileNumberInput } from "../../shared/MobileNumberInput";
import { AmountCards } from "../../shared/AmountGrid";
import { DataPackCards } from "../../shared/DataPack";
import { useNavigate } from "react-router-dom";
import { amounts, dataPacksByOperator } from "../../../constants/operator";
import { OperatorTabs } from "../../shared/OperatorTabs/OperatorTabs";

export const HomePage = () => {
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [showNextSection, setShowNextSection] = useState(false);
  const [selectedAmountIndex, setSelectedAmountIndex] = useState<number | null>(
    null
  );
  const [selectedDataPackIndex, setSelectedDataPackIndex] = useState<
    number | null
  >(null);
  const navigate = useNavigate();

  // MobileInputNumber
  const [mobile, setMobile] = useState("");
  const [showMobileError, setShowMobileError] = useState(false);

  return (
    <Paper shadow="lg" radius="lg" p="xl">
      <Stack>
        <MobileNumberInput
          value={mobile}
          onChange={(value) => {
            setMobile(value);
            if (value.trim()) {
              setShowMobileError(false);
            }
          }}
          showError={showMobileError}
        />

        <Divider my="sm" size="sm" />
        <Title order={5}>Choose Operator</Title>

        <OperatorTabs
          selectedId={selectedOperator}
          onSelect={(id) => {
            if (!mobile.trim()) {
              setShowMobileError(true);
              return;
            }

            setSelectedOperator(id);
            setShowNextSection(true);
            setSelectedAmountIndex(null);
            setSelectedDataPackIndex(null);
          }}
        />

        {showNextSection && selectedOperator ? (
          <Stack>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "2rem",
                marginTop: "1rem",
              }}
            >
              <AmountCards
                amounts={amounts}
                selectedIndex={selectedAmountIndex}
                onSelect={(index) => {
                  setSelectedAmountIndex(index);
                  setSelectedDataPackIndex(null);
                }}
              />

              <DataPackCards
                dataPacks={dataPacksByOperator[selectedOperator] || []}
                selectedIndex={selectedDataPackIndex}
                onSelect={(index) => {
                  setSelectedDataPackIndex(index);
                  setSelectedAmountIndex(null);
                }}
              />
            </div>

            <Group justify="flex-end" mt="xl">
              <Button
                onClick={() => {
                  const isAmountSelected = selectedAmountIndex !== null;
                  const selectedAmount = isAmountSelected
                    ? amounts[selectedAmountIndex!]
                    : "";

                  const selectedDataPack =
                    selectedDataPackIndex !== null
                      ? dataPacksByOperator[selectedOperator!][
                          selectedDataPackIndex!
                        ]
                      : null;

                  const transactionData = {
                    topUpNumber: mobile,
                    operator: selectedOperator!,
                    package: selectedDataPack?.name || "",
                    amount: selectedAmount || selectedDataPack?.price || "",
                    fees: "100 Ks", // example static fee
                    total: isAmountSelected
                      ? `${parseInt(selectedAmount.replace(/,/g, "")) + 100} Ks`
                      : `${
                          parseInt(
                            (selectedDataPack?.price || "0").replace(
                              /[^\d]/g,
                              ""
                            )
                          ) + 100
                        } Ks`,
                  };

                  navigate("/confirm-transaction", {
                    state: transactionData,
                  });
                }}
                variant="filled"
                bg="primary.9"
                c="white"
                disabled={
                  selectedAmountIndex === null && selectedDataPackIndex === null
                }
              >
                Next
              </Button>
            </Group>
          </Stack>
      ) : (
          <>
            <Paper radius="md" bg="primary.0" p="xl" withBorder h={200}>
              <Center h="100%">
                <Text fw={500} c="primary.9" size="lg">
                  {selectedOperator
                    ? `You selected ${selectedOperator}`
                    : "Please choose operator"}
                </Text>
              </Center>
            </Paper>
            <Group justify="flex-end" mt="md">
              <Button
                variant="filled"
                size="md"
                bg="primary.9"
                c="white"
                onClick={() => {
                  if (selectedOperator) setShowNextSection(true);
                }}
                disabled={!selectedOperator}
              >
                Next
              </Button>
            </Group>
          </>
      )}
      </Stack>
    </Paper>
  );
};
