import * as React from 'react'
import Select from 'react-select'
import { Interface } from '@ethersproject/abi'

import StackableContainer from './StackableContainer'

type Props = {
  abi: Interface
  onChange(method: string): void
}

interface ThemeSpacing {
  baseUnit: number
  controlHeight: number
  menuGutter: number
}

interface Theme {
  borderRadius: number
  colors: { [key: string]: string }
  spacing: ThemeSpacing
}

const FunctionSelect = ({ abi, onChange }: Props) => {
  const createOptions = (abi: Interface) =>
    Object.keys(abi.functions).map((key) => ({
      value: key,
      label: abi.functions[key].name,
    }))

  const theme = (theme: Theme) => ({
    ...theme,
    borderRadius: 10,
    colors: {
      ...theme.colors,
      neutral0: '#430086',
      neutral5: '#561A93',
      neutral10: '#69339E',
      neutral20: '#7240A4',
      neutral30: '#8559B0',
      neutral40: '#9873BD',
      neutral50: '#AA8CC8',
      neutral60: '#BDA6D5',
      neutral70: '#C7B3DB',
      neutral80: '#D0BFE0',
      neutral90: '#E3D9ED',
      primary: 'white',
      primary75: '#AA8CC8',
      primary50: '#7240A4',
      primary25: '#561A93',
    },
  })

  const options = createOptions(abi)

  return (
    <StackableContainer lessMargin>
      <StackableContainer lessMargin lessPadding lessRadius>
        <label htmlFor="function-select-input">Select function to encode</label>
        <Select
          theme={theme}
          options={options}
          name="function-select"
          inputId="function-select-input"
          onChange={(selected) => {
            onChange((selected as { value: string; label: string }).value)
          }}
        />
      </StackableContainer>
    </StackableContainer>
  )
}

export default FunctionSelect