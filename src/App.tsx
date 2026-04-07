

import { MantineProvider } from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import { mantineTheme } from "./theme";
import { DemoOne } from "./pages/DemoOne";
import { MainLayout } from "./layouts/MainLayout";

export default function App() {
    return (
        <MantineProvider theme={mantineTheme} defaultColorScheme="light" withGlobalStyles withNormalizeCSS>
            <Notifications />
            <MainLayout>
                <DemoOne />
            </MainLayout>
        </MantineProvider>
    );
}
