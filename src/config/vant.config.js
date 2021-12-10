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
  Sticky, 
  Form, 
  Dialog,
  ShareSheet,
  Uploader,
  Popup 
=======
  Dialog,
  ShareSheet,
  Uploader,
  Form 
>>>>>>> d313812ea9ae82fa291bf7fc1de910f874c045e5
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
  Sticky,  
  Form, 
  Dialog,
  ShareSheet,
  Uploader,
  Popup 

=======
  Dialog,
  ShareSheet,
  Uploader,
  Form 
>>>>>>> d313812ea9ae82fa291bf7fc1de910f874c045e5
];

export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}