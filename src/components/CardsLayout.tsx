import {
    Box,
    Button,
    Card,
    Center,
    Container,
    Fieldset,
    Flex,
    Grid,
    Group,
    SimpleGrid,
    Space,
    Stack,
    Text,
} from "@mantine/core";

export function CardsContainerLayout() {
    const demoProps = {
        bg: "var(--mantine-color-blue-light)",
        my: "md",
    };

    return (
        <>
            <Fieldset legend="Container component" mb="md" variant="default">
                <Container size="md" {...demoProps}>
                    Default Container
                </Container>

                <Center {...demoProps}>
                    <Box>Center Box</Box>
                </Center>

                <Container fluid {...demoProps}>
                    xs Container
                </Container>

                <Container px={0} size={480} {...demoProps}>
                    480px Container without padding
                </Container>
            </Fieldset>

            <Fieldset legend="Flex component" mb="md" variant="default">
                <Flex
                    mih={40}
                    bg="var(--mantine-color-blue-light)"
                    gap="xs"
                    justify="center"
                    align="center"
                    direction="row"
                    wrap="nowrap"
                    my={"md"}
                    px="xs"
                >
                    <Container size="xs" bg={"lightyellow"}>
                        Flex Container
                    </Container>
                    <Box bg={"lightyellow"}>Flex Box 2</Box>
                    <Box bg={"lightyellow"}>Flex Box 3</Box>
                    <Box bg={"lightyellow"}>Flex Box 4</Box>
                </Flex>
            </Fieldset>

            <Fieldset legend="Group components" mb="md" variant="filled">
                <Group
                    justify="flex-start"
                    bg="var(--mantine-color-blue-light)"
                    grow
                    preventGrowOverflow={false}
                    my={"md"}
                    p="xs"
                >
                    <Button variant="default">Group First</Button>
                    <Button variant="default">
                        Group Second button with large content
                    </Button>
                    <Button variant="default">Group Third</Button>
                </Group>
            </Fieldset>

            <Fieldset legend="Stack component" mb="md" variant="filled">
                <Stack
                    align="stretch"
                    bg="var(--mantine-color-blue-light)"
                    my={"md"}
                    p="xs"
                >
                    <Button variant="default">Stack First</Button>
                    <Button variant="default">
                        Stack Second button with large content
                    </Button>
                    <Button variant="default">Stack Third</Button>
                </Stack>
            </Fieldset>

            <Fieldset legend="Space component" mb="md" variant="default">
                <Box bg="var(--mantine-color-blue-light)" mb={"xs"}>
                    <div style={{ display: "flex" }}>
                        <Text>First line</Text>
                        <Space w="xl" />
                        <Text>Second line</Text>
                    </div>
                </Box>
            </Fieldset>

            <Fieldset legend="Grid components" mb="md" variant="filled">
                <Grid
                    grow
                    bg="var(--mantine-color-blue-light)"
                    mb={"xs"}
                    p="xs"
                    gap="md"
                    rowGap="xl"
                    columnGap="sm"
                >
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Card shadow="none">Grid.Col 1</Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Card shadow="none">Grid.Col 2</Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Card shadow="none">Grid.Col 3</Card>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                        <Card shadow="none">Grid.Col 4</Card>
                    </Grid.Col>
                </Grid>

                <Grid
                    grow
                    bg="var(--mantine-color-blue-light)"
                    mb={"xs"}
                    p="xs"
                    gap="md"
                >
                    <Grid.Col span={3}>
                        <Card shadow="none">Grid.Col 1</Card>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Card shadow="none">Grid.Col 2</Card>
                    </Grid.Col>
                    <Grid.Col span={3} offset={3}>
                        <Card shadow="none">Grid.Col Offset 3</Card>
                    </Grid.Col>
                </Grid>

                <Grid
                    bg="var(--mantine-color-blue-light)"
                    mb={"xs"}
                    p="xs"
                    gap="md"
                >
                    <Grid.Col span="auto">
                        <Card shadow="none">Grid.Col 1 (auto)</Card>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Card shadow="none">Grid.Col 2</Card>
                    </Grid.Col>
                    <Grid.Col span="auto">
                        <Card shadow="none">Grid.Col 3 (auto)</Card>
                    </Grid.Col>
                </Grid>
            </Fieldset>

            <Fieldset legend="SimpleGrid component" mb="md" variant="filled">
                <SimpleGrid
                    cols={4}
                    spacing="sm"
                    verticalSpacing="sm"
                    bg="var(--mantine-color-blue-light)"
                    mb={"xs"}
                    p="xs"
                    autoRows="minmax(100px, auto)"
                >
                    <Card shadow="none">SimpleGrid.Col</Card>
                    <Card shadow="none">
                        Because we defined this condition previously in the
                        ProtectedRoute component itself, we need to define the
                        condition from the outside now.{" "}
                    </Card>
                    <Card shadow="none">SimpleGrid.Col</Card>
                    <Card shadow="none">SimpleGrid.Col</Card>
                    <Card shadow="none">
                        So far, the ProtectedRoute component only deals with
                        authenticated users as authorization process.{" "}
                    </Card>
                </SimpleGrid>
            </Fieldset>
        </>
    );
}
