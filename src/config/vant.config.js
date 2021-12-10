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
  Sticky, 
  Form, 
  Dialog,
  ShareSheet,
  Uploader,
  Popup 

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
  Sticky,  
  Form, 
  Dialog,
  ShareSheet,
  Uploader,
  Popup
];

export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}