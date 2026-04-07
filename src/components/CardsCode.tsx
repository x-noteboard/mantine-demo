import { Code, Paper } from "@mantine/core";

const codeForPreviousDemo = `
import { createTheme } from '@mantine/core';

const theme = createTheme({

  // Controls --mantine-font-family
  fontFamily: 'Arial, sans-serif',

  // Controls --mantine-font-family-monospace
  fontFamilyMonospace: 'Courier New, monospace',

  headings: {
    // Controls --mantine-font-family-headings
    fontFamily: 'Georgia, serif',
  },
});
`;

export function CardsCode() {
    return (
        <Paper>
            <Code fz="sm" block>
                {codeForPreviousDemo}
            </Code>
        </Paper>
    );
}
