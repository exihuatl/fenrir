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
    </>
  );
};
