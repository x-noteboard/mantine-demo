import { Box } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

export function ViewportSize() {
  const { height, width } = useViewportSize();
  return <Box>Width: {width}, height: {height}</Box>;
}