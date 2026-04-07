import { Alert } from "@mantine/core";
import { InfoIcon } from "@phosphor-icons/react";

export function CardsAlertDemo() {
    const icon = <InfoIcon />;
    return (
        <Alert
            variant="default"
            color="blue"
            radius="xs"
            withCloseButton
            title="Alert title"
            icon={icon}
        >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. AtIcon
            officiis, quae tempore necessitatibus placeat saepe. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Sunt corporis natus
            veniam quis cupiditate enim architecto mollitia numquam temporibus,
            consectetur nam laboriosam voluptates nemo facilis? Exercitationem
            aut praesentium quibusdam reiciendis.
        </Alert>
    );
}
