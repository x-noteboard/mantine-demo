import { useState } from "react";
import {
    GaugeIcon,
    FingerprintIcon,
    HeartbeatIcon,
    CaretRightIcon,
} from "@phosphor-icons/react";
import { Box, NavLink } from "@mantine/core";
const data = [
    {
        icon: GaugeIcon,
        label: "Dashboard",
        description: "Item with description",
    },
    {
        icon: FingerprintIcon,
        label: "Events",
        rightSection: <CaretRightIcon size={16} />,
    },
    { icon: HeartbeatIcon, label: "Activity" },
];

export function NavLinksDemo() {
    const [active, setActive] = useState(0);

    const items = data.map((item, index) => (
        <NavLink
            href="#required-for-focus"
            key={item.label}
            active={index === active}
            label={item.label}
            description={item.description}
            rightSection={item.rightSection}
            leftSection={<item.icon size={16} />}
            onClick={() => setActive(index)}
            color="gray.1"
            variant="filled"
            autoContrast
            py="sm"
        />
    ));

    return <Box>{items}</Box>;
}
