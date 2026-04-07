import { useMantineColorScheme, Button, Box, Switch } from '@mantine/core';
import { SunIcon, MoonStarsIcon } from '@phosphor-icons/react';

export function SwitchTheme() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Box>
      <Button onClick={() => toggleColorScheme()}>Switch Theme</Button>
    </Box>
  );
}

export function SwitchThemeButton() {
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={<SunIcon size={16} color="var(--mantine-color-yellow-4)" />}
      offLabel={<MoonStarsIcon size={16} color="var(--mantine-color-blue-6)" />}
      onChange={() => toggleColorScheme()}
    />
  );
}