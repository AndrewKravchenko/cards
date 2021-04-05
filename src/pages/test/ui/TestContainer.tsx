import React, { FC, ElementType } from 'react';

import { unCamelCase } from '../../../utils/textTransform';
import { Test } from './Test';
import { Preloader } from '../../../common/ui/Preloader';
import { LinkNative } from '../../../common/ui/LinkNative';
import { Button } from '../../../common/ui/Button';
import { InputText } from '../../../common/ui/InputText';
import { InputCheckbox } from '../../../common/ui/InputCheckbox';
import { InputRadio } from '../../../common/ui/InputRadio';
import { Select } from '../../../common/ui/Select';

const exampleLibrary: ExampleLibraryType = {
  preloader: [Preloader, { text: 'Loading' }],
  link: [LinkNative, { href: '/', children: 'Hover me' }],
  button: [Button, { children: 'Click me' }],
  buttonError: [Button, { children: 'Error', error: true }],
  inputText: [InputText, {}],
  inputEmail: [InputText, { type: 'email' }],
  inputPassword: [InputText, { type: 'password' }],
  inputTextError: [InputText, { error: 'an error' }],
  inputCheckbox: [InputCheckbox, { children: 'Check me' }],
  inputRadio: [
    InputRadio,
    {
      options: ['React', 'Redux', 'Typescript'],
      name: 'skills',
      value: 'React',
    },
  ],
  select: [
    Select,
    { options: ['React', 'Redux', 'Typescript'], value: 'Redux' },
  ],
};

const examples: ExamplesType = Object.entries(
  exampleLibrary,
).map(([title, example]) => [unCamelCase(title), example]);

export const TestContainer: FC = () => {
  return <Test examples={examples} />;
};

type ExampleType = [ElementType, Record<string, unknown>];
type ExampleLibraryType = Record<string, ExampleType>;
export type ExamplesType = [string, ExampleType][];
