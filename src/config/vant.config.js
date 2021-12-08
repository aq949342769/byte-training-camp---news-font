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
<<<<<<< HEAD
  Form 
=======
  Dialog,
  ShareSheet,
  Uploader
>>>>>>> 5fc8343bbf7cedd2a251504ca0cc66db594f21a8
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
<<<<<<< HEAD
  Form 
=======
  Dialog,
  ShareSheet,
  Uploader
>>>>>>> 5fc8343bbf7cedd2a251504ca0cc66db594f21a8
];

export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}