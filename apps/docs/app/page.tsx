import { Button, Header, Signup, firstArrayElement } from "ui";

export default function Page() {
  console.log(firstArrayElement([1, 2, 3]));
  return (
    <>
      {firstArrayElement([1, 2, 3])}
      <Header text="Docs" />
      <Button />
      <Signup />
    </>
  );
}
