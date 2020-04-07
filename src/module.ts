import { PanelPlugin } from '@grafana/data';
import { ApiStatusOptions, defaults } from './types';
import { ApiStatusPanel } from './ApiStatusPanel';
import { ApiStatusEditor } from './ApiStatusEditor';

export const plugin = new PanelPlugin<ApiStatusOptions>(ApiStatusPanel).setDefaults(defaults).setEditor(ApiStatusEditor);
