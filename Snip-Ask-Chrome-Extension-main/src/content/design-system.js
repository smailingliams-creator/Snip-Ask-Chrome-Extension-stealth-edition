// src/content/design-system.js
// Lightweight visual tokens for injected Snip & Ask surfaces.

(function initSnipAskDesignSystem() {
    if (window.SNIP_ASK_DESIGN) {
        return;
    }

    const tokens = {
        radius: {
            xs: '4px',
            sm: '6px',
            md: '8px',
            lg: '10px',
            xl: '12px',
            pill: '999px'
        },
        space: {
            1: '2px',
            2: '4px',
            3: '6px',
            4: '8px',
            5: '10px',
            6: '12px',
            7: '14px',
            8: '16px',
            9: '18px',
            10: '20px',
            12: '24px'
        },
        shadow: {
            sm: 'none', md: 'none', lg: 'none', overlay: '0 4px 12px rgba(0, 0, 0, 0.08)'
        },
        border: {
            subtle: 'none', default: '1px solid rgba(120, 120, 120, 0.08)', strong: 'none', accent: 'none', topAccent: 'none'
        },
        color: {
            surfaceCanvas: 'transparent', surfaceBase: 'transparent', surfacePanel: 'transparent',
            surfaceRaised: 'transparent', surfaceHeader: 'transparent', surfaceField: 'transparent',
            surfaceFieldHover: 'transparent', surfaceControl: 'transparent', surfaceControlHover: 'transparent',
            surfaceHover: 'transparent', text: 'rgba(120, 120, 120, 0.9)',
            textStrong: 'rgba(120, 120, 120, 0.9)', textSoft: 'rgba(120, 120, 120, 0.9)',
            textMuted: 'rgba(120, 120, 120, 0.9)', textSubtle: 'rgba(120, 120, 120, 0.9)',
            accent: 'rgba(120, 120, 120, 0.05)', accentHover: 'rgba(120, 120, 120, 0.05)',
            accentSoft: 'rgba(120, 120, 120, 0.05)'
        },
        button: {
            primaryBg: 'transparent', primaryHover: 'transparent', secondaryBg: 'transparent', secondaryHover: 'transparent',
            quietBg: 'transparent',
            quietText: 'rgba(120, 120, 120, 0.05)'
        },
        icon: {
            xs: '11px',
            sm: '12px',
            md: '14px',
            lg: '18px',
            xl: '24px'
        },
        control: {
            xxs: '24px',
            xs: '26px',
            sm: '28px',
            md: '30px',
            lg: '32px',
            xl: '34px',
            overlay: '40px',
            input: '42px'
        },
        type: {
            caption: '10px',
            meta: '11px',
            small: '12px',
            body: '13px',
            bodyLarge: '13.5px',
            ui: '14px',
            title: '18px'
        },
        leading: {
            tight: '1.2',
            compact: '1.35',
            normal: '1.5',
            relaxed: '1.62',
            reading: '1.66'
        },
        weight: {
            regular: '400',
            medium: '500',
            semibold: '600',
            strong: '650',
            bold: '700'
        },
        transition: {
            fast: '0.16s ease',
            normal: '0.18s ease',
            entrance: '0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }
    };

    tokens.cssVars = (selector = ':host') => `
        ${selector} {
            --sa-radius-xs: ${tokens.radius.xs};
            --sa-radius-sm: ${tokens.radius.sm};
            --sa-radius-md: ${tokens.radius.md};
            --sa-radius-lg: ${tokens.radius.lg};
            --sa-radius-xl: ${tokens.radius.xl};
            --sa-radius-pill: ${tokens.radius.pill};
            --sa-space-1: ${tokens.space[1]};
            --sa-space-2: ${tokens.space[2]};
            --sa-space-3: ${tokens.space[3]};
            --sa-space-4: ${tokens.space[4]};
            --sa-space-5: ${tokens.space[5]};
            --sa-space-6: ${tokens.space[6]};
            --sa-space-7: ${tokens.space[7]};
            --sa-space-8: ${tokens.space[8]};
            --sa-space-9: ${tokens.space[9]};
            --sa-space-10: ${tokens.space[10]};
            --sa-space-12: ${tokens.space[12]};
            --sa-shadow-sm: ${tokens.shadow.sm};
            --sa-shadow-md: ${tokens.shadow.md};
            --sa-shadow-lg: ${tokens.shadow.lg};
            --sa-shadow-overlay: ${tokens.shadow.overlay};
            --sa-border-subtle: ${tokens.border.subtle};
            --sa-border-default: ${tokens.border.default};
            --sa-border-strong: ${tokens.border.strong};
            --sa-border-accent: ${tokens.border.accent};
            --sa-border-top-accent: ${tokens.border.topAccent};
            --sa-surface-canvas: ${tokens.color.surfaceCanvas};
            --sa-surface-base: ${tokens.color.surfaceBase};
            --sa-surface-panel: ${tokens.color.surfacePanel};
            --sa-surface-raised: ${tokens.color.surfaceRaised};
            --sa-surface-header: ${tokens.color.surfaceHeader};
            --sa-surface-field: ${tokens.color.surfaceField};
            --sa-surface-field-hover: ${tokens.color.surfaceFieldHover};
            --sa-surface-control: ${tokens.color.surfaceControl};
            --sa-surface-control-hover: ${tokens.color.surfaceControlHover};
            --sa-surface-hover: ${tokens.color.surfaceHover};
            --sa-text-primary: ${tokens.color.text};
            --sa-text-strong: ${tokens.color.textStrong};
            --sa-text-soft: ${tokens.color.textSoft};
            --sa-text-muted: ${tokens.color.textMuted};
            --sa-text-subtle: ${tokens.color.textSubtle};
            --sa-accent: ${tokens.color.accent};
            --sa-accent-hover: ${tokens.color.accentHover};
            --sa-accent-soft: ${tokens.color.accentSoft};
            --sa-button-primary-bg: ${tokens.button.primaryBg};
            --sa-button-primary-hover: ${tokens.button.primaryHover};
            --sa-button-secondary-bg: ${tokens.button.secondaryBg};
            --sa-button-secondary-hover: ${tokens.button.secondaryHover};
            --sa-button-quiet-bg: ${tokens.button.quietBg};
            --sa-button-quiet-text: ${tokens.button.quietText};
            --sa-icon-xs: ${tokens.icon.xs};
            --sa-icon-sm: ${tokens.icon.sm};
            --sa-icon-md: ${tokens.icon.md};
            --sa-icon-lg: ${tokens.icon.lg};
            --sa-icon-xl: ${tokens.icon.xl};
            --sa-control-xxs: ${tokens.control.xxs};
            --sa-control-xs: ${tokens.control.xs};
            --sa-control-sm: ${tokens.control.sm};
            --sa-control-md: ${tokens.control.md};
            --sa-control-lg: ${tokens.control.lg};
            --sa-control-xl: ${tokens.control.xl};
            --sa-control-overlay: ${tokens.control.overlay};
            --sa-control-input: ${tokens.control.input};
            --sa-type-caption: ${tokens.type.caption};
            --sa-type-meta: ${tokens.type.meta};
            --sa-type-small: ${tokens.type.small};
            --sa-type-body: ${tokens.type.body};
            --sa-type-body-large: ${tokens.type.bodyLarge};
            --sa-type-ui: ${tokens.type.ui};
            --sa-type-title: ${tokens.type.title};
            --sa-leading-tight: ${tokens.leading.tight};
            --sa-leading-compact: ${tokens.leading.compact};
            --sa-leading-normal: ${tokens.leading.normal};
            --sa-leading-relaxed: ${tokens.leading.relaxed};
            --sa-leading-reading: ${tokens.leading.reading};
            --sa-font-regular: ${tokens.weight.regular};
            --sa-font-medium: ${tokens.weight.medium};
            --sa-font-semibold: ${tokens.weight.semibold};
            --sa-font-strong: ${tokens.weight.strong};
            --sa-font-bold: ${tokens.weight.bold};
            --sa-transition-fast: ${tokens.transition.fast};
            --sa-transition-normal: ${tokens.transition.normal};
            --sa-transition-entrance: ${tokens.transition.entrance};
        }
    `;

    window.SNIP_ASK_DESIGN = Object.freeze(tokens);
})();
