import React from 'react';
import Button from "../../lib/components/Button";
import TextInput from "../../lib/components/TextInput";
import "./CreateAccount.scss";

function CreateAccount() {
  return (
    <div className="create-account">
      <TextInput />
      <TextInput />
      <TextInput />
      <Button />
      <Button />
    </div>
  );
}

export default CreateAccount;
