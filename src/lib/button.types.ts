// import type { ButtonSize, ButtonVariant } from "./button.svelte"

export type ButtonProps = {
    size: ButtonSize;
    variant: ButtonVariant;
};

export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export const ButtonVariants = ['primary', 'secondary', 'tertiary'];

