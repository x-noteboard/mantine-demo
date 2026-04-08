import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@phosphor-icons/react';
import cx from 'clsx';
import classes from './ToggleColorTheme.module.css';

export function ToggleColorTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="subtle"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <SunIcon className={cx(classes.icon, classes.light)} />
      <MoonIcon className={cx(classes.icon, classes.dark)} />
    </ActionIcon>
  );
}