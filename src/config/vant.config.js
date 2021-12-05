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
  PullRefresh
} from "vant";
const components = [Button, Icon, Empty, Toast, NavBar, Cell, CellGroup, Switch, Slider, Popup, Field, ActionSheet, Card, Tab, Tabs, List, PullRefresh];


export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}