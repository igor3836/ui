import { colorsTuple, type MantineThemeOverride } from '@mantine/core'
import { Notification } from '../components/Notifications/Notification'
import { CloseButton } from '../components/CloseButton'
import { ActionIconTheme } from '../components/ActionIcon/ActionIcon'
import { BreadcrumbsTheme } from '../components/Breadcrumbs'
import { ModalTheme } from '../components/Modal/Modal'
import { PaginationTheme } from '../components/Pagination/Pagination'
import { SegmentedControlTheme } from '../components/Inputs/SegmentedControl/SegmentedControl'
import { SwitchTheme } from '../components/Inputs/Switch/Switch'
import { TabsTheme } from '../components/Tabs'
import { TitleTheme } from '../components/Title'

// ----------------------------------------------------------------------

export const theme: MantineThemeOverride = {
  focusRing: 'never',
  scale: 1, //default value
  fontSmoothing: true, //default value
  // white: 'ffffff',
  black: '#14151a',
  colors: {
    primary: colorsTuple([
      '#14151a',
      '#14151a',
      '#14151a',
      '#14151a',
      '#14151a',
      '#14151a',
      '#14151a',
      '#1f2228',
      '#14151a',
      '#14151a',
    ]),
    secondary: colorsTuple('#ffffff'),
    tertiary: colorsTuple('#0a0f290a'),

    //background
    'background-button-destructive': colorsTuple('#e6483d'),
    'background-surface-warning-accent': colorsTuple('#f48e2f'),

    //borders
    'border-action-normal': colorsTuple('#dee0e3'),
    'border-action-destructive': colorsTuple('#f7c3c0'),
    'border-base-alpha': colorsTuple('#0a0f2914'),
    'border-base-surface': colorsTuple('#ffffff'),

    //icons
    'icon-base-secondary': colorsTuple('#0f132499'),
    'icon-base-tertiary': colorsTuple('#0D112666'),
    'icon-base-quaternary': colorsTuple('#0A0F2940'),
    'icon-status-success': colorsTuple('#26BD6C'),
    // icon/base/secondary

    //text
    'text-base-primary': colorsTuple('#14151a'),
    'text-base-secondary': colorsTuple('#0f132499'),
    'text-base-tertiary': colorsTuple('#0d112666'),
    'text-accent-blue-accent': colorsTuple('#4778F5'),

    //toggle
    'background-toggle-active': colorsTuple('#26bd6c'),
    'background-toggle-default': colorsTuple('#babdc5'),
    'background-checkbox-disabled': colorsTuple('#DEE0E3'),

    //typography
    'typography-secondary': colorsTuple('#91989e'),
  },
  primaryShade: 6, // { light: 6, dark: 8 } default mantine by theme
  primaryColor: 'primary',
  /* variantColorResolver: ({ color, variant, gradient, theme }) => {
    if (variant === 'primary') {
      return {
        background: 'var(--mantine-color-red-9)',
        hover: 'var(--mantine-color-red-8)',
        color: 'var(--mantine-color-white)',
        border: 'none',
      }
    }

    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    }
  }, //color by variant */
  autoContrast: false, //default value
  luminanceThreshold: 0.3, //default value
  fontFamily: 'Onest, Arial, Helvetica, sans-serif',
  /* headings: {
    fontFamily: 'Onest',
    fontWeight: '600',
    textWrap: 'wrap', // 'nowrap', 'balance', 'pretty', 'stable',
    sizes: {
      h1: { fontSize: '24px', fontWeight: '600', lineHeight: '1.3' }, //{ fontSize: string; fontWeight?: string; lineHeight: string; }
      //..
    },
  }, */
  radius: {
    // same name from blank and mantine
    xs: '0.25rem',
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.625rem',
    xl: '0.75rem',
    xxl: '1rem',
    xxxl: '1.5rem',
  },
  defaultRadius: 'xl',
  spacing: {
    //blank variables
    h5: '-0.5px',
    h6: '-0.30000001192092896px',
    'body-m': '-0.20000000298023224px',
    'body-s': '-0.20000000298023224px',
    'body-l': '-0.20000000298023224px',
    'caption-l': '-0.10000000149011612px',
    'caption-m': '0',
    //mantine default variables
    xs: '0.625rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2rem',
  }, //for example
  fontSizes: {
    //blank variables
    h5: '30px',
    h6: '24px',
    'body-m': '18px',
    'body-l': '20px',
    'body-s': '16px',
    'caption-l': '14px',
    'caption-m': '12px',
    // mantine default variables
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  }, //for example
  lineHeights: {
    //blank variables
    h5: '36px',
    h6: '32px',
    'body-m': '26px',
    'body-s': '24px',
    'body-l': '28px',
    'caption-l': '20px',
    'caption-m': '16px',
    // mantine default variables
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  // mantine default variables
  breakpoints: { xs: '36em', sm: '48em', md: '62em', lg: '75em', xl: '88em' },
  shadows: {
    // Blank_2.7 x KVELL effect styles (Shadows/*); xs without the KVELL-file inset, which Blank UI doesn't have
    xs: '0px 1px 2px 0px #14151a0d',
    sm: '0px 1px 2px 0px #14151a0f, 0px 1px 3px 0px #14151a1a',
    md: '0px 2px 4px -1px #14151a0f, 0px 3px 6px -1px #14151a14',
    lg: '0px 3px 6px -2px #14151a0d, 0px 10px 16px -3px #14151a14',
    xl: '0px 8px 8px -5px #14151a0d, 0px 18px 24px -5px #14151a1a',
  }, //for example
  respectReducedMotion: false, //default
  cursorType: 'default',
  defaultGradient: { from: 'black', to: 'yellow', deg: 25 }, //for example
  // activeClassName: 'class-name', //for example
  // focusClassName: 'class-name', //for example
  components: {
    CloseButton,
    Notification,
    // raw Mantine components in apps get the kit look through these
    ActionIcon: ActionIconTheme,
    Breadcrumbs: BreadcrumbsTheme,
    Modal: ModalTheme,
    Pagination: PaginationTheme,
    SegmentedControl: SegmentedControlTheme,
    Switch: SwitchTheme,
    Tabs: TabsTheme,
    Title: TitleTheme,
  },
  other: {
    // any additional vars
    /* usage:
    import { createStyles } from '@mantine/core';
  
    const useStyles = createStyles((theme) => ({
      customBox: {
        padding: theme.other.customSpacing,
        backgroundColor: theme.other.brandColor,
      },
    }));
  
    function MyComponent() {
      const { classes } = useStyles();
  
      return <div className={classes.customBox}>Hello Mantine</div>;
    }
      
    // theme-override.d.ts
    import '@mantine/core';
  
    declare module '@mantine/core' {
      export interface MantineThemeOther {
        customSpacing: string;
        brandColor: string;
      }
    }*/
  },
}
