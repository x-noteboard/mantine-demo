import {
    AppShell,
    Box,
    Burger,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    Group,
    NavLink,
    ScrollArea,
    Title,
    useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { type ReactNode } from "react";
import { SwitchThemeButton } from "../components/SwitchTheme";
import { NavLinksDemo } from "../components/NavLinks";
import { SignInIcon } from "@phosphor-icons/react";

export function MainLayout({ children }: { children: ReactNode }) {
    const [opened] = useDisclosure();
    const { colorScheme } = useMantineColorScheme();
    return (
        <AppShell
            navbar={{
                width: { base: "100%", sm: 260, md: 260, lg: 300, xl: 320 },
                breakpoint: "sm",
                collapsed: { mobile: !opened },
            }}
            padding="xs"
            layout="alt"
            // withBorder
            // disabled
            bg={colorScheme === "dark" ? "gray.8" : "gray.0"}
        >
            <AppShell.Navbar>
                <AppShell.Section
                    p="sm"
                    style={{
                        borderBottom:
                            "1px solid var(--mantine-color-default-border)",
                    }}
                >
                    <Flex
                        gap="xs"
                        justify="center"
                        align="center"
                        direction="row"
                        wrap="nowrap"
                    >
                        <Title order={4}>Mantine</Title>
                        <Box ml="auto">
                            <SwitchThemeButton />
                        </Box>
                    </Flex>
                </AppShell.Section>
                <AppShell.Section grow my="md" component={ScrollArea} px="md">
                    <Box>
                        <NavLinksDemo />
                    </Box>
                </AppShell.Section>
                <AppShell.Section
                    p="sm"
                    style={{
                        borderTop:
                            "1px solid var(--mantine-color-default-border)",
                    }}
                >
                    <Container fluid p="0">
                        <Button
                            fullWidth
                            leftSection={
                                <SignInIcon size={"16"} weight="bold" />
                            }
                        >
                            Sign In
                        </Button>
                    </Container>
                </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    );
}
