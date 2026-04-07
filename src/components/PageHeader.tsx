import { Title, Text } from "@mantine/core";

export function PageHeader() {
    return (
        <header>
            <Title order={1}>
                Welcome to Mantine UI Framework Demo Platform
            </Title>
            <Title order={2} mt="md">
                Featured Services
            </Title>
            <Text mt="md" lineClamp={4} fz={"sm"} lh="xl">
                Let's explore Mantine 's text and typography components in
                depth, focusing on practical implementation and real-world use
                cases. We'll examine how these elements form the foundation of
                readable interfaces while maintaining design consistency across
                applications. In recent developments, the technology sector has
                witnessed remarkable advancements in quantum computing. Major
                industry players are now collaborating to establish standardized
                protocols...
            </Text>
        </header>
    );
}
