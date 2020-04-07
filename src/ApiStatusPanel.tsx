import React, { PureComponent } from 'react';
import { PanelProps } from '@grafana/data';
import { ApiStatusOptions } from 'types';

interface Props extends PanelProps<ApiStatusOptions> {}

export class ApiStatusPanel extends PureComponent<Props> {
  constructor(props: any) {
    super(props);
    setInterval(() => {
      props.options.lastchecked = new Date().toLocaleString();
    }, 1000);
  }

  render() {
    const { options, width, height } = this.props;

    return (
      <div
        style={{
          backgroundColor: '#7FFF00',
          position: 'relative',
          width,
          height,
        }}
      >
        <h1 className="center-vh">
          <h1 style={{ color: '#000' }}>{options.condition}</h1>
        </h1>
        <div
          style={{
            color: '#000',
            position: 'absolute',
            bottom: 0,
            left: 0,

            padding: '10px',
          }}
        >
          <div>Last Checked: {options.lastchecked}</div>
        </div>
      </div>
    );
  }
}
