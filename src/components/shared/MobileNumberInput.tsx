import { TextInput, Box, Title } from "@mantine/core";

interface Props {
  value: string;
  onChange: (value: string) => void;
  showError?: boolean; 
}

export const MobileNumberInput = ({ value, onChange, showError }: Props) => {
  const hasError = showError && !value.trim();

  return (
    <Box style={{ width: "100%", maxWidth: 460, minWidth: 200 }}>
      <Title order={5} mb="md" c="black">Mobile Number</Title>
      <TextInput
        placeholder="Enter Mobile Number"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        maxLength={15}
        error={hasError ? "Please enter mobile number first" : undefined}
      />
    </Box>
  );
};
