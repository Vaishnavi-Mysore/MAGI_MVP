// Dropdown.tsx
import { Controller } from 'react-hook-form';
import type {
    Control,
    FieldValues,
    Path,
    PathValue
} from 'react-hook-form';

export interface DropdownProps<T extends FieldValues> {
    name: Path<T>;
    control: Control<T>;
    options: string[];
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    required?: boolean;
    defaultValue?: PathValue<T, Path<T>>;
}

const Dropdown = <T extends FieldValues>({
    name,
    control,
    options,
    label,
    placeholder = '',
    disabled = false,
    className = '',
    required = false,
    defaultValue = '' as PathValue<T, Path<T>>,
}: DropdownProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{ required }}
            defaultValue={defaultValue}
            render={({ field, fieldState }) => (
                <div className={`relative ${className}`}>
                    {label && (
                        <label
                            htmlFor={`${name}-select`}
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            {label}
                        </label>
                    )}

                    <select
                        {...field}
                        id={`${name}-select`}
                        disabled={disabled}
                        className={`w-full bg-white border px-4 py-2 rounded shadow focus:outline-none focus:ring-2 transition
              ${fieldState.error
                                ? 'border-red-500 focus:ring-red-400'
                                : 'border-gray-300 focus:ring-blue-500'}
            `}
                    >
                        {placeholder && (
                            <option value="" disabled hidden>
                                {placeholder}
                            </option>
                        )}
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    {fieldState.error && (
                        <p className="text-xs text-red-500 mt-1">This field is required</p>
                    )}
                </div>
            )}
        />
    );
};

export default Dropdown;
