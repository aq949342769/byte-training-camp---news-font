import {
  Button,
  Icon,
  Empty,
  Toast,
  NavBar,
  Cell,
  CellGroup,
  Switch,
  Slider,
  Popup,
  Field,
  ActionSheet,
  Card,
  Tab,
  Tabs,
  List,
  PullRefresh,
  Divider,
  Tabbar,
  TabbarItem,
} from "vant";
const components = [
  Button,
  Icon,
  Empty,
  Toast,
  NavBar,
  Cell,
  CellGroup,
  Switch,
  Slider,
  Popup,
  Field,
  Uploader,
  RadioGroup,
  Radio,
  ActionSheet,
  Card,
  Tab,
  Tabs,
  List,
  PullRefresh,
  Divider,
  Tabbar,
  TabbarItem,
];

export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}
