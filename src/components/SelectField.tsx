import type { ComponentProps } from 'react';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

// Options are passed as data so the whole <select> renders in React; Astro children
// can't be placed directly inside a <select>.
type Props = ComponentProps<typeof NativeSelect> & {
	options: { value: string; label: string }[];
};

export default function SelectField({ options, ...props }: Props) {
	return (
		<NativeSelect {...props}>
			{options.map((o) => (
				<NativeSelectOption key={o.value || o.label} value={o.value}>
					{o.label}
				</NativeSelectOption>
			))}
		</NativeSelect>
	);
}
