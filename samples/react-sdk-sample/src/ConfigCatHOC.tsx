import React from "react";
import { WithConfigCatClientProps } from "configcat-react";

class ButtonClassComponent extends React.Component<
  { text: string } & WithConfigCatClientProps,
  { isEnabled: boolean, loading: boolean }
> {
  constructor(props: { text: string } & WithConfigCatClientProps) {
    super(props);

    this.state = { isEnabled: false, loading: true };
  }

  componentDidMount() {
    this.props
      .getValue("isAwesomeFeatureEnabled", false)
      .then((v: boolean) => this.setState({ isEnabled: v, loading: false }));
  }

  render() {
    return this.state.loading ? (<div>Loading...</div>) : (
      <button
        disabled={!this.state.isEnabled}
        onClick={() => alert("ConfigCat <3 React")}
      >
        {this.props.text}
      </button>
    );
  }
}

export default ButtonClassComponent;
