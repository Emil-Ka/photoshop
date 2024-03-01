import { ComponentPropsWithRef } from 'react';

type ButtonTheme = 'clear';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
    theme?: ButtonTheme;
}
