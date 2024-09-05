import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const TrackingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="CustomerID" source="customerId" />
        <TextField label="DeliveryStatus" source="deliveryStatus" />
        <TextField label="ID" source="id" />
        <TextField label="Review" source="review" />
        <TextField label="TrackingID" source="trackingId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
