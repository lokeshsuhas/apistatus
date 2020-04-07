import React, { PureComponent } from 'react';
import { FormField } from '@grafana/ui';
import { PanelEditorProps } from '@grafana/data';

import { ApiStatusOptions } from './types';

export class ApiStatusEditor extends PureComponent<PanelEditorProps<ApiStatusOptions>> {
  onURLChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, url: target.value });
  };

  onIntervalChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, interval: target.value });
  };

  onConditionChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, condition: target.value });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">API Status Options</h5>
        <FormField label="URL" labelWidth={5} inputWidth={20} type="text" onChange={this.onURLChanged} value={options.url || ''} />
        <FormField label="Interval" labelWidth={5} inputWidth={20} type="text" onChange={this.onIntervalChanged} value={options.interval || ''} />
        <FormField label="Condition" labelWidth={5} inputWidth={20} type="text" onChange={this.onConditionChanged} value={options.condition || ''} />
      </div>
    );
  }
}
