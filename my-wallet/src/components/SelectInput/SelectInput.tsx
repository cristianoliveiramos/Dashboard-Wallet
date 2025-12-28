import { SelectOptions, SelectInputWrapper } from './styled';
import { ISelectInput } from '../interfaces/ISelectInput';

export const SelectInput: React.FC<ISelectInput> = ({options}) => (
 <SelectInputWrapper>
    <SelectOptions name="" id="">
      {
         options.map(option => (
            <option value={option.value}>{option.label}</option>
         ))
      }
    </SelectOptions>
 </SelectInputWrapper>
);

