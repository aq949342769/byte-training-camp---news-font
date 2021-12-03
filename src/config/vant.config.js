import {
  Button,
  Icon,
  Empty,
  Toast,
  Card,
  NavBar,
  Tab,
  Tabs,
  List,PullRefresh 
} from "vant";
const components = [Button, Icon, Empty, Toast, Card, NavBar, Tab, Tabs, List,PullRefresh ];

export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}
