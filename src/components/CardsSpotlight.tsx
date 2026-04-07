import { Button } from "@mantine/core";
import { Spotlight, spotlight } from "@mantine/spotlight";
import {
    HouseIcon,
    GaugeIcon,
    FileTextIcon,
    MagnifyingGlassIcon,
} from "@phosphor-icons/react";

const actions = [
    {
        id: "home",
        label: "Home",
        description: "Get to home page",
        onClick: () => console.log("Home"),
        leftSection: <HouseIcon size={24} />,
    },
    {
        id: "dashboard",
        label: "Dashboard",
        description: "Get full information about current system status",
        onClick: () => console.log("Dashboard"),
        leftSection: <GaugeIcon size={24} />,
    },
    {
        id: "documentation",
        label: "Documentation",
        description: "Visit documentation to lean more about all features",
        onClick: () => console.log("Documentation"),
        leftSection: <FileTextIcon size={24} />,
    },
];

export function CardsSpotLightDemo() {
    return (
        <>
            <Button onClick={spotlight.open}>Open spotlight</Button>
            <Spotlight
                p="xs"
                actions={actions}
                nothingFound="Nothing found..."
                highlightQuery
                searchProps={{
                    leftSection: <MagnifyingGlassIcon size={20} />,
                    placeholder: "Search...",
                }}
            />
        </>
    );
}
