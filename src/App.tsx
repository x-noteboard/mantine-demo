import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { Notifications } from "@mantine/notifications";
import { mantineTheme } from "./theme";
import { DemoOne } from "./pages/DemoOne";
import { MainLayout } from "./layouts/MainLayout";

export default function App() {
    return (
        <MantineProvider
            theme={mantineTheme}
            defaultColorScheme="light"
            withGlobalStyles
            withNormalizeCSS
            stylesTransform={emotionTransform}
        >
            <MantineEmotionProvider>
                <Notifications />

                <MainLayout>
                    <DemoOne />
                </MainLayout>
            </MantineEmotionProvider>
        </MantineProvider>
    );
}
