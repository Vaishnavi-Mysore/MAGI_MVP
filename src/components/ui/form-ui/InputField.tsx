import type {
  FieldError,
  Path,
  UseFormRegister,
  FieldValues,
} from 'react-hook-form';
import React from 'react';

interface InputFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string | '';
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<T>;
  error?: FieldError;
  rightElement?: React.ReactNode;
}

const InputField = <T extends FieldValues>({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  register,
  error,
  rightElement,
}: InputFieldProps<T>) => {
  // const hasRight = Boolean(rightElement);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className={`text-sm font-medium text-gray-700 `}
        >
          {label}
        </label>
      )}
      <div
        className="w-full flex items-center gap-2 px-3 py-2 border rounded-full shadow-sm bg-white 
        focus-within:ring-2 focus-within:ring-blue-500 transition
        border-gray-300"
      >
        {/* Input */}
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name, { required })}
          className="flex-1 border-none outline-none bg-transparent text-sm placeholder-gray-400"
        />

        {/* Buttons inside the chat bar */}
        {rightElement && (
          <div className="flex items-center gap-2">
            {rightElement}
          </div>
        )}
      </div>
      {error?.message && (
        <p className="text-red-500 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
};

export default InputField;
