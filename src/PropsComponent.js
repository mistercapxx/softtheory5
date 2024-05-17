// /props part
class PropsComponent extends React.Component {
  render() {
    return <div>{this.props.info}</div>
  }
}
// / or
function PropsComponent1(props) {
  return <div>{props.info}</div>;
}