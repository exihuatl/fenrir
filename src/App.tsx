import { Button } from "./ui/Button/Button";

export const App = () => {
  return (
    <>
    <div className="flex gap-4 p-4 items-center">
      <Button variant="primary" size="lg">Button</Button>
      <Button variant="secondary" size="lg">Button</Button>
      <Button variant="tertiary" size="lg">Button</Button>
      <Button variant="alternative" size="lg">Button</Button>
      </div>
    <div className="flex gap-4 p-4 items-center">
      <Button variant="primary" size="sm">Button</Button>
      <Button variant="secondary" size="sm">Button</Button>
      <Button variant="tertiary" size="sm">Button</Button>
      <Button variant="alternative" size="sm">Button</Button>
    </div>
    <div className="flex gap-4 p-4 items-center">
      <Button variant="primary" disabled>Button</Button>
      <Button variant="secondary" disabled>Button</Button>
      <Button variant="tertiary" disabled>Button</Button>
      <Button variant="alternative" disabled>Button</Button>
    </div>
    <div className="flex gap-4 p-4 items-center">
      <Button variant="primary" loading>Button</Button>
      <Button variant="secondary" loading>Button</Button>
      <Button variant="tertiary" loading disabled>Button</Button>
      <Button variant="alternative" loading disabled icon="phone">Button</Button>
    </div>
    <div className="flex gap-4 p-4 items-center">
      <Button variant="primary" icon="phone">Button</Button>
      <Button variant="secondary" icon="phone">Button</Button>
      <Button variant="tertiary" prefixIcon="phone">Button</Button>
      <Button variant="alternative" prefixIcon="phone" suffixIcon="chevron">Button</Button>
    </div>
    <div className="flex gap-4 p-4 items-center">
      <Button variant="primary" icon="phone" size="lg-circle">Button</Button>
      <Button variant="secondary" icon="phone" size="lg-circle">Button</Button>
      <Button variant="tertiary" icon="phone" size="lg-circle">Button</Button>
      <Button variant="tertiary" loading icon="phone" size="lg-circle">Button</Button>
      <Button variant="alternative" icon="phone" size="sm-circle">Button</Button>
      <Button variant="primary" disabled icon="phone" size="sm-circle">Button</Button>
      <Button variant="secondary" disabled icon="phone" size="sm-circle">Button</Button>
      <Button variant="tertiary" disabled loading icon="phone" size="lg-circle">Button</Button>
      <Button variant="alternative" disabled loading icon="phone" size="sm-circle">Button</Button>
    </div>
    </>
  );
};
