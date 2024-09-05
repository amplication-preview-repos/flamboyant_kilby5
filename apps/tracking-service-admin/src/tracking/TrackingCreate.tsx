import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const TrackingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="CustomerID" source="customerId" />
        <SelectInput
          source="deliveryStatus"
          label="DeliveryStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Review" multiline source="review" />
        <TextInput label="TrackingID" source="trackingId" />
      </SimpleForm>
    </Create>
  );
};
