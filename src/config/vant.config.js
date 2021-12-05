import {
  Button,
  Icon,
  Empty,
  Toast,
  Card,
  NavBar,
  Tab,
  Tabs,
  List,
  PullRefresh,
  Divider,
  Tabbar,
  TabbarItem,Field
} from "vant";
const components = [
  Button,
  Icon,
  Empty,
  Toast,
  Card,
  NavBar,
  Tab,
  Tabs,
  List,
  PullRefresh,
  Divider,
  Tabbar,
  TabbarItem,Field
];

export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}
