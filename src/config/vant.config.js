import { Button, Icon  } from "vant";
const components = [Button, Icon ];

export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}
