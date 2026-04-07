import { BackgroundImage, Center, Text, Box, SimpleGrid } from "@mantine/core";

export function CardsBackgroundImage() {
    return (
        <Box maw={"300"} mx="auto">
            <BackgroundImage src="https://picsum.photos/200/300" radius="xs">
                <Text>
                    Let's explore Mantine 's text and typography components in
                    depth, focusing on practical implementation and real-world
                    use cases...
                </Text>
            </BackgroundImage>
        </Box>
    );
}
