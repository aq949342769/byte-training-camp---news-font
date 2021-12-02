import { Button, Icon, Empty, Toast } from "vant";
const components = [Button, Icon, Empty, Toast];

export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}
