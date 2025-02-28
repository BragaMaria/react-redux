import {createRoot} from "react-dom/client";
import {SamuraiJsApp} from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<SamuraiJsApp/>);
  root.unmount();
});
