// This file exists for two purposes:
// 1. Ensure that both ios and android files present identical types to importers.
// 2. Allow consumers to import the module as if typescript understood react-native suffixes.
import DefaultIos from './index.ios';
import * as ios from './index.ios';
import DefaultAndroid from './index.android';
import * as android from './index.android';

export * from './index.ios';
export default DefaultIos;
