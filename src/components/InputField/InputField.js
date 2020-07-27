import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const InputField = ({placeHolder, onChangeHandle}) => {
  const [name, setName] = useState("active");

  const onChange = (e) => {
    setName(e.target.value);
  }

  const onChangeName = (e) => {
    setName("New value");
  }

  return (
    <div>
      <InputGroup>
        <FormControl
          placeholder={placeHolder}
          onChange={onChange}
          value={name}
        />
        <Button onClick={onChangeName}>Click Me</Button>
      </InputGroup>
    </div>
  );
}

export default InputField;
