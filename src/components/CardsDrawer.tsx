import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

export function CardsDrawerDemo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close} position='right' >
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button variant="filled" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}