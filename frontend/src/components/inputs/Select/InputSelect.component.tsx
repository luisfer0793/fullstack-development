import { Fragment } from 'react';
import { useController } from 'react-hook-form';

import { Listbox, Transition } from '@headlessui/react';

import { SelectorIcon, CheckIcon } from '@heroicons/react/solid';

const people = [
  { value: 'Wade Cooper' },
  { value: 'Arlene Mccoy' },
  { value: 'Devon Webb' },
  { value: 'Tom Cook' },
  { value: 'Tanya Fox' },
  { value: 'Hellen Schmidt' },
];

export const InputSelect = ({
  name,
  control,
  label,
  rules,
  helperText,
}: {
  name: string;
  control: any;
  label?: string;
  rules?: any;
  helperText?: string;
}) => {
  const {
    field: { ref, onChange, value, ...inputProps },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <Listbox as="div" value={value} onChange={onChange} {...inputProps}>
      <Listbox.Label className="text-[15px] block mb-2">{label}</Listbox.Label>
      <div className="relative">
        <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-transparent rounded cursor-default border focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
          <span className="block truncate">{value}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon className="h-5 w-5 text-gray-400" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={person.value}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? 'font-medium' : 'font-normal'
                      } block truncate`}
                    >
                      {person.value}
                    </span>
                    {selected && (
                      <span
                        className={`${
                          active ? 'text-amber-600' : 'text-amber-600'
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="h-5 w-5" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
      <p
        className={`text-[13px] mt-1 pl-1 ${
          !!error ? 'text-red-400' : 'text-gray-400'
        }`}
      >
        {error?.message ?? helperText}
      </p>
    </Listbox>
  );
};
