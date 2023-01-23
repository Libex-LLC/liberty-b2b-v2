import { Card, Button, Text } from '@mantine/core';

function StaffCard({ el, setUserForm }) {
  return (
    <Card
      sx={{
        flex: '0 0 30%',
        height: 200,
        padding: 24,
        borderRadius: 8,
        scrollSnapAlign: 'start',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
    >
      <Text align="center">
        {el?.item ? el?.item?.staffName : el?.staffName}
      </Text>
      <Button
        onClick={() =>
          setUserForm((prev) => ({ ...prev, staffMember: { ...el } }))
        }
        variant="default"
        sx={{ width: '100%' }}
      >
        Check
      </Button>
    </Card>
  );
}

export default StaffCard;
