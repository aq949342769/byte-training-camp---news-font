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
  Uploader,
  RadioGroup,
  Radio,
  ActionSheet
} from "vant";
const components = [Button, Icon, Empty, Toast, NavBar, Cell, CellGroup, Switch, Slider, Popup, Field, Uploader, RadioGroup, Radio, ActionSheet];

export function vant(app) {
  components.forEach((component) => {
    app.use(component);
  });
}