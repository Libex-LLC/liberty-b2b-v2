import { Card, Button, Text } from '@mantine/core';

function StaffCard({ el, setUserForm }) {
  return (
    <Card
      sx={{
        width: 100,
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
    >
      <Text>{el.staffName}</Text>
      <Button
        onClick={() =>
          setUserForm((prev) => ({ ...prev, staffMember: { ...el } }))
        }
        variant="default"
        sx={{ width: 80 }}
      >
        Check
      </Button>
    </Card>
  );
}

export default StaffCard;
