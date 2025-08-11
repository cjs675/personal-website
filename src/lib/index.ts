// Reexport your entry components here

import Button from "./button.svelte";
import type { ButtonProps, ButtonSize, ButtonVariant } from "./button.types.ts";

export {
	Button as Root,
	Button as Button,
	type ButtonProps as Props,
	type ButtonProps,
	type ButtonSize,
};

export type { ButtonVariant };