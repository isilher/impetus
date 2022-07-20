/* eslint-disable import/no-default-export */
/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */

// This file exists for two purposes:
// 1. Ensure that both ios and android files present identical types to importers.
// 2. Allow consumers to import the module as if typescript understood react-native suffixes.
import DefaultAndroid from './index.android';
import * as android from './index.android';
import DefaultIos from './index.ios';
import * as ios from './index.ios';

declare const _test: typeof ios;
declare const _test: typeof android;

declare const _testDefault: typeof DefaultIos;
declare const _testDefault: typeof DefaultAndroid;

export * from './index.ios';
export default DefaultIos;
