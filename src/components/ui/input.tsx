import * as React from 'react';
import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				'block h-12 w-full min-w-0 border border-input bg-background px-3.5 text-base text-foreground transition-colors outline-none placeholder:text-muted-foreground hover:border-foreground focus-visible:border-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-destructive',
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
