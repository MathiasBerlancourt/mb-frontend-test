import {
    extendTheme,
    withDefaultColorScheme,
    ChakraTheme, baseTheme,
} from '@chakra-ui/react';

const config = {
    cssVarPrefix: 'mb-ui',
    initialColorMode: 'system',
    useSystemColorMode: true,
};

export const theme = extendTheme(
    {
        config,
        fonts: {
            heading: 'Inter',
            body: 'Inter',
            mono: 'Inter',
        }
    },
    withDefaultColorScheme({
        colorScheme: 'primary',
        components: ['Radio', 'Switch', 'Checkbox'],
    }),

    baseTheme
) as ChakraTheme;
