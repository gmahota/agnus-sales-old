import {
  TextInput,
  InvalidTextInput,
  ValidTextInput,
} from "../forms/text-inputs";
import { Select, InvalidSelect, ValidSelect } from "../forms/selects";
import { Radio, InvalidRadio, ValidRadio } from "../forms/radios";
import { Checkbox, InvalidCheckbox, ValidCheckbox } from "../forms/checkboxes";
import Widget from "../widget";

const FormItem = () => (
  <>
    <Widget title="Order" description={<span>Add new Item.</span>}>
      <div className="flex flex-col lg:flex-row lg:flex-wrap w-full lg:space-x-4">
        <div className="w-full lg:w-1/4">
          <Select label="Item" />
        </div>
        <div className="w-full lg:w-1/4">
          <TextInput label="Description" />
        </div>
        <div className="w-full lg:w-1/4">
          <Select label="Project" />
        </div>
        <div className="w-full lg:w-1/4">
          <TextInput label="Unity" type="number" />
        </div>
        <div className="w-full lg:w-1/4">
          <TextInput label="Amount" type="number" />
        </div>
        <div className="w-full lg:w-1/4">
          <TextInput label="Total" type="number" />
        </div>
      </div>
    </Widget>
  </>
);
export default FormItem;
