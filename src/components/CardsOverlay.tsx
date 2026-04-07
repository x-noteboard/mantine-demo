import { Overlay, AspectRatio } from '@mantine/core';

export function CardsOverlayDemo() {
  return (
    <AspectRatio ratio={16 / 9} maw={"100%"} mx="auto" pos="relative">
      <img
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"
        alt="Demo"
      />
      <Overlay color="#000" backgroundOpacity={0.35} blur={2} />
    </AspectRatio>
  );
}