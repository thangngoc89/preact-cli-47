import { h, Component } from "preact";
import style from "./style";
import Dump from "async!../../components/this-component-should-be-load-async";

export default class Home extends Component {
  render() {
    return (
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <Dump />
      </div>
    );
  }
}
