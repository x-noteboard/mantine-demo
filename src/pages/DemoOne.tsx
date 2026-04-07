import {
    Accordion,
    Affix,
    Box,
    Button,
    Card,
    Container,
    Flex,
    Grid,
    Paper,
    Skeleton,
    Tabs,
    Text,
    Transition,
    Image,
    Center,
    Fieldset,
} from "@mantine/core";
import { CardsStats } from "../components/CardsStats";
import { CardsReportIssue } from "../components/CardsReportIssue";
import { SwitchTheme } from "../components/SwitchTheme";
import { CardsCode } from "../components/CardsCode";
import { PageHeader } from "../components/PageHeader";
import { ViewportSize } from "../components/CardsViewportSize";
import { CardsContainerLayout } from "../components/CardsLayout";
import { CardsImage } from "../components/CardsImage";
import { CardsAlertDemo } from "../components/CardsAlert";
import { CardsNotification, CardsNotificationDemo } from "../components/CardsNotification";
import { useWindowScroll } from "@mantine/hooks";
import { ArrowUpIcon } from "@phosphor-icons/react";
import { CardsDrawerDemo } from "../components/CardsDrawer";
import { CardsMenuDemo } from "../components/CardsMenu";
import { CardsModalDemo } from "../components/CardsModal";
import { CardsOverlayDemo } from "../components/CardsOverlay";
import { CardsAvatarDemo } from "../components/CardsAvatar";
import { CardsBackgroundImage } from "../components/CardsBackgroundImage";
import image_1 from "./../assets/images/bg-9.png";
import { CardsListDemo } from "../components/CardsList";
import { CardsTableDemo } from "../components/CardsTable";
import { CardsTextsDemo } from "../components/CardsTexts";
import { CardsScrollAreaDemo } from "../components/CardsScroll";
import { UseFieldDemo } from "../components/CardsUseField";
import { CardsSpotLightDemo } from "../components/CardsSpotlight";

export function DemoOne() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Container mt="lg">
                <PageHeader />

                <Paper mt="lg" shadow="none">
                    <Flex
                        gap="xs"
                        justify="center"
                        align="center"
                        direction="row"
                        wrap="nowrap"
                    >
                        <CardsSpotLightDemo />
                        <CardsModalDemo />

                        <CardsDrawerDemo />
                        <CardsMenuDemo />
                        <CardsNotification />

                        <Box ml="auto">
                            <ViewportSize />
                        </Box>
                    </Flex>
                </Paper>

                <Tabs defaultValue="first" my="lg" variant="outline">
                    <Tabs.List justify="flex-start" mb="xs">
                        <Tabs.Tab value="first">Layout</Tabs.Tab>
                        <Tabs.Tab value="second">Forms</Tabs.Tab>
                        <Tabs.Tab value="third">Content</Tabs.Tab>
                        <Tabs.Tab value="others" ml="auto">
                            Others
                        </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="first">
                        <Fieldset
                            legend="Paper component"
                            mb="md"
                            variant="filled"
                        >
                            <Paper
                                shadow="lg"
                                p="xl"
                                mt="lg"
                                radius={"xs"}
                                withBorder
                            >
                                <Text>
                                    Paper is the most basic ui component
                                </Text>
                                <Text>
                                    Use it to create cards, dropdowns, modals
                                    and other components that require background
                                    with shadow
                                </Text>
                            </Paper>
                        </Fieldset>

                        <CardsContainerLayout />
                    </Tabs.Panel>

                    <Tabs.Panel value="second">

                        <Fieldset legend="UseField components" mb="md" variant="filled">
                            <UseFieldDemo />
                        </Fieldset>

                        <Grid gap="lg" mt="lg">
                            <Grid.Col span={5}>
                                <CardsReportIssue />
                            </Grid.Col>
                            <Grid.Col span={7}>
                                <Skeleton>
                                    <CardsCode />
                                </Skeleton>
                            </Grid.Col>
                        </Grid>

                        <Box my="lg">
                            <CardsStats />
                        </Box>

                        <CardsImage />
                    </Tabs.Panel>

                    <Tabs.Panel value="third">
                        <Card mt="lg" p="0" shadow="none">
                            <Accordion
                                order={3}
                                variant="contained"
                                chevronIconSize={12}
                                transitionDuration={400}
                                multiple={true}
                                defaultValue={["1"]}
                            >
                                <Accordion.Item value="1">
                                    <Accordion.Control>
                                        Avatars
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Box>
                                            <CardsAvatarDemo />
                                        </Box>
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item value="2">
                                    <Accordion.Control>
                                        Background Images
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <CardsBackgroundImage />
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item value="3">
                                    <Accordion.Control>Image</Accordion.Control>
                                    <Accordion.Panel>
                                        <Center>
                                            <Image
                                                radius="xs"
                                                h={400}
                                                w="auto"
                                                fit="contain"
                                                src={image_1}
                                                fallbackSrc="https://placehold.co/600x400?text=Placeholder"
                                            />
                                        </Center>
                                    </Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="4">
                                    <Accordion.Control>Lists</Accordion.Control>
                                    <Accordion.Panel>
                                        <Box>
                                            <CardsListDemo />
                                        </Box>
                                    </Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="5">
                                    <Accordion.Control>
                                        Tables
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Card
                                            shadow="none"
                                            p="xs"
                                            withBorder={false}
                                        >
                                            <CardsTableDemo />
                                        </Card>
                                    </Accordion.Panel>
                                </Accordion.Item>

                                <Accordion.Item value="6">
                                    <Accordion.Control>Texts</Accordion.Control>
                                    <Accordion.Panel>
                                        <Card
                                            shadow="none"
                                            p="xs"
                                            withBorder={false}
                                        >
                                            <CardsTextsDemo />
                                        </Card>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Tabs.Panel>

                    <Tabs.Panel value="others">
                        <Fieldset
                            mt="lg"
                            legend="Scroll component"
                            variant="filled"
                        >
                            <CardsScrollAreaDemo />
                        </Fieldset>

                        <Box mt="lg">
                            <CardsAlertDemo />
                        </Box>

                        <Fieldset
                            mt="lg"
                            legend="Overlay component"
                            variant="filled"
                        >
                            <CardsOverlayDemo />
                        </Fieldset>

                        <Box mt="lg">
                            <CardsNotificationDemo />
                        </Box>
                    </Tabs.Panel>
                </Tabs>
            </Container>

            <Affix position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            leftSection={<ArrowUpIcon size={16} />}
                            style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            Top
                        </Button>
                    )}
                </Transition>
            </Affix>
        </>
    );
}
