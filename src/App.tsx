import "./App.css";
import { Button, buttonVariants } from "./components/Button";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Button>Add Button</Button>
      <a
        href="https://google.com"
        className={buttonVariants({ size: "sm", intent: "outline" })}
      >
        Link
      </a>
    </div>
  );
}

export default App;
